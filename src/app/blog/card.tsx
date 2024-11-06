"use client";
import React, { useCallback, useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cardData } from './data';
import { Carousel } from 'react-responsive-3d-carousel'
import {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';

const TWEEN_FACTOR_BASE = 0.2;

type PropType = {
    options?: EmblaOptionsType;
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const tweenFactor = useRef(0);
    const tweenNodes = useRef<HTMLElement[]>([]);

    const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector('.embla__parallax__layer') as HTMLElement;
        });
    }, []);

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenParallax = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine();
            const scrollProgress = emblaApi.scrollProgress();
            const slidesInView = emblaApi.slidesInView();
            const isScrollEvent = eventName === 'scroll';

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress;
                const slidesInSnap = engine.slideRegistry[snapIndex];

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target();

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target);
                                diffToTarget = sign === -1 ? scrollSnap - (1 + scrollProgress) : scrollSnap + (1 - scrollProgress);
                            }
                        });
                    }

                    const translate = diffToTarget * (-1 * tweenFactor.current) * 100;
                    const tweenNode = tweenNodes.current[slideIndex];
                    if (tweenNode) {
                        tweenNode.style.transform = `translateX(${translate}%)`;
                    }
                });
            });
        },
        []
    );

    useEffect(() => {
        if (!emblaApi) return;

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenParallax(emblaApi);

        emblaApi
            .on('reInit', setTweenNodes)
            .on('reInit', setTweenFactor)
            .on('reInit', tweenParallax)
            .on('scroll', tweenParallax)
            .on('slideFocus', tweenParallax);
    }, [emblaApi, setTweenNodes, setTweenFactor, tweenParallax]);

    return (
        // <div className="embla1 mt-10 mx-auto">
        //     <div className="embla__viewport flex justify-center" ref={emblaRef}>
        //         <div className="embla__container">
        //             {cardData.map((card, index) => (
        //                 <div key={index} className="embla__slide">
        //                     <div className="embla__parallax">
        //                         <div className="embla__parallax__layer">
        //                             <Card className="bg-[#ffffff] text-black border-none rounded-[40px] p-4 gap-4 justify-items-center w-[400px] h-[600px]">
        //                                 <Image src={card.image} alt={card.title} className="rounded-[30px] w-[350px] h-[350px]" />
        //                                 <div className='flex flex-col'>
        //                                     <div>
        //                                         <CardHeader className='py-2'>
        //                                             <CardTitle className='text-[40px] font-[900] text-center'>{card.cardTitle}</CardTitle>
        //                                         </CardHeader>
        //                                         <CardContent className='w-[350px] h-[110px] flex items-center'>
        //                                             <p className='text-[16px] font-[300] leading-[25px] text-center'>
        //                                                 {card.content}
        //                                             </p>
        //                                         </CardContent>
        //                                     </div>
        //                                     <CardFooter className='mx-auto'>
        //                                         <Link href={`/blog/${card.id}`}>
        //                                             <Button className="rounded-full text-white font-bold text-[14px] md:px-8 md:py-6 bg-pink-700 hover:bg-pink-700 hover:text-white hover:border-pink-700 w-[246px] !h-[30px] !p-0">
        //                                                 READ MORE
        //                                             </Button>
        //                                         </Link>
        //                                     </CardFooter>
        //                                 </div>
        //                             </Card>
        //                         </div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
        <Carousel height='700px' showStatus={false} showArrows={false} showIndicators={false}>
            {cardData.map((card, index) => (
                <div key={index} className="embla__slide">
                    <div className="embla__parallax">
                        <div className="embla__parallax__layer">
                            <Card className="bg-[#ffffff] text-black border-none rounded-[40px] p-4 gap-4 justify-items-center w-[400px] h-[600px]">
                                <Image src={card.image} alt={card.title} className="rounded-[30px] w-[350px] h-[350px]" />
                                <div className='flex flex-col'>
                                    <div>
                                        <CardHeader className='py-2'>
                                            <CardTitle className='text-[40px] font-[900] text-center'>{card.cardTitle}</CardTitle>
                                        </CardHeader>
                                        <CardContent className='w-[350px] h-[110px] flex items-center'>
                                            <p className='text-[16px] font-[300] leading-[25px] text-center'>
                                                {card.content}
                                            </p>
                                        </CardContent>
                                    </div>
                                    <CardFooter className='mx-auto'>
                                        <Link href={`/blog/${card.id}`}>
                                            <Button className="rounded-full text-white font-bold text-[14px] md:px-8 md:py-6 bg-pink-700 hover:bg-pink-700 hover:text-white hover:border-pink-700 w-[246px] !h-[30px] !p-0">
                                                READ MORE
                                            </Button>
                                        </Link>
                                    </CardFooter>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
}

export default EmblaCarousel; 