'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { use, useState } from 'react'
import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cardData } from "../data"
import { Arrow_left_red, Arrow_left, Arrow_right_red, Arrow_right } from "@/Images"


// Mock Data for demonstration (replace with actual data source or API call)

const CardDetailPage = ({ params: paramsPromise }: { params: Promise<{ id: string }> }) => {
    const router = useRouter()
    const params = use(paramsPromise)

    let [count, setCount] = useState(0)

    // Find the card data based on the id in the URL
    const card = cardData.find((card) => card.id === params.id)

    // If card not found, return an error message
    if (!card) return (
        <div className='h-screen content-center text-white text-center'>
            <p className="font-bold">
                404 - Card not found
            </p>
            <Button onClick={() => router.back()} className="mt-6 bg-pink-700 hover:bg-pink-800 text-white rounded-full px-6 py-3">
                Go Back
            </Button>
        </div>
    )

    const showPreviousContent = () => {
        console.log(count)
        if (count < 1) {
            setCount(0)
            return;
        }
        setCount(--count)
    }
    
    const showNextContent = () => {
        console.log(count)
        if (count > card.Faq.length - 2) {
            return;
        }
        setCount(++count)
    }


    return (
        <section className="max-w-screen-lg mx-auto p-6 text-white">
            <div className="flex flex-col items-center gap-8">
                <div>
                    <h1 className="!text-[88px] font-[700] leading-[110px] md:text-9xl text-center text-pink-700">{card.title}</h1>
                </div >
                <div className="w-full">
                    {/* {card.Faq?.map((faq, index) => ( */}
                        <section className="flex">
                            <div className="break-words wrapper px-[32px] py-[10px] bg-white text-black rounded-[60px] w-[1256px]">
                                {card.Faq[count || 0].content.split('\n').map((line, index) => (
                                    <div key={index} className="my-5" dangerouslySetInnerHTML={{ __html: line }} />
                                ))}
                                {card.Faq.length > 1 && <div className="flex justify-center">
                                    <button className="mr-1" onClick={e => showPreviousContent()}>{count == card.Faq.length-1 ? <Image src={Arrow_left_red} alt={""} />: <Image src={Arrow_left} alt={""} />}</button>
                                    <button className="ml-1" onClick={e => showNextContent()}>{count == 0 ? <Image src={Arrow_right_red} alt={""} />: <Image src={Arrow_right} alt={""} />}</button>
                                </div>}
                            </div>
                            <div>
                                <button onClick={() => router.back()}>X</button>
                            </div>
                        </section>
                    {/* )) */}
                    {/* } */}
                </div>
                {/* <Button onClick={() => router.push('/invest')} className="mt-6 bg-pink-700 hover:bg-pink-800 text-white rounded-full px-6 py-3">
                    Go Back
                </Button> */}
            </div>
        </section >
    )
}

export default CardDetailPage
