"use client";
import React, { useCallback, useEffect, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cardData } from './data';
import {
    EmblaCarouselType,
    EmblaEventType,
    EmblaOptionsType
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './CarouselDotButton';
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

    const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);

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
        <div className="embla mt-10 mx-auto">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {cardData.map((card, index) => (
                        <div key={index} className="embla__slide">
                            <div className="embla__parallax">
                                <div className="embla__parallax__layer">
                                    <Card className="bg-[#1c1c1c] text-white border-none rounded-3xl p-4 flex gap-4">
                                        <Image src={card.image} alt={card.title} className="rounded-xl mb-4" />
                                        <div className='flex flex-col justify-between'>
                                            <div>
                                                <CardHeader className='py-0'>
                                                    <CardTitle className='text-[88px] font-bold'>{card.cardTitle}</CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className='text-base font-light'>
                                                        {card.content}
                                                    </p>
                                                </CardContent>
                                            </div>
                                            <CardFooter>
                                                <Link href={`/invest/${card.id}`}>
                                                    <Button className="rounded-full text-white font-bold text-2xl p-4 md:px-8 md:py-6 bg-black/30 border-4 hover:bg-pink-700 hover:text-white hover:border-pink-700">
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
                </div>
            </div>
            <div className="flex justify-center items-center gap-3 mt-5">
                <div className="embla__dots">
                    {cardData.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`embla__dot${index === selectedIndex ? ' embla__dot--selected' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EmblaCarousel; 