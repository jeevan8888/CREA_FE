'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { use } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { cardData } from "../data"

// Mock Data for demonstration (replace with actual data source or API call)

const CardDetailPage = ({ params: paramsPromise }: { params: Promise<{ id: string }> }) => {
    const router = useRouter()
    const params = use(paramsPromise)

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

    return (
        <section className="max-w-screen-lg mx-auto p-6 text-white">
            <div className="flex flex-col items-center gap-8">
                <div>
                    <h1 className="text-xl md:text-9xl font-bold text-center text-pink-700">{card.title}</h1>
                    <h4 className="text-lg md:text-5xl text-center font-light leading-10 tracking-[6px]">{card.subtitles}</h4>
                </div >
                <div className="w-full">
                    <Accordion type="single" collapsible className="w-full">
                        {card.Faq?.map((faq, index) => (
                            <AccordionItem value={`item-${index}`} className="w-full my-10" key={index}>
                                <AccordionTrigger>{faq.title}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="break-words wrapper">
                                        {faq.content.split('\n').map((line, index) => (
                                            <p key={index} className="my-5" dangerouslySetInnerHTML={{ __html: line }} />
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))
                        }
                    </Accordion>
                </div>
                {/* <Button onClick={() => router.push('/invest')} className="mt-6 bg-pink-700 hover:bg-pink-800 text-white rounded-full px-6 py-3">
                    Go Back
                </Button> */}
            </div>
        </section >
    )
}

export default CardDetailPage
