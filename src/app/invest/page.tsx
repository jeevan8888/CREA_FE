import Card from './card'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

function InvestPage() {
    return (
        <section className="max-w-screen-2xl mx-auto p-6">
            <div className="max-w-screen-lg mx-auto flex flex-col gap-5">
                <h1 className="text-[88px] font-bold text-white text-center">
                    THE <span className="text-pink-700">CONCEPT</span>
                </h1>
                <h6 className="text-white text-center text-2xl">
                    Inspiring creativity building the future
                </h6>
                <p className="text-white text-center text-base tracking-wide">
                    Creative Catalyst (CREA) is a pioneering hybrid platform that blends centralized and decentralized functions to empower creative individuals and industries. By integrating crypto investment and blockchain technology, CREA aims to elevate the prestige of creativity, provide essential funding, and foster industry growth while making cryptocurrency accessible to a broader audience.
                </p>
            </div>

            <Card options={OPTIONS} />

        </section>
    )
}
export default InvestPage