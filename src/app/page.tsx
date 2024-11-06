'use client'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <section className="homePage text-center">
      <div className="py-10 h-full flex flex-col justify-between items-center">
        <div className="px-4 md:px-14 bg-black/50 rounded-[20px] md:rounded-[50px] py-10">
          <h1>
            <span className="text-white text-4xl md:text-7xl font-bold ">
              Creative Catalyst<br />Dive into the </span>
            <span className="text-[#de1d60] text-[48px] md:text-[88px] font-bold ">Future</span>
          </h1>
          <p className="text-white text-xl md:text-4xl font-normal">Experience art like never before</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-20 mt-5 md:mt-0 mb-24 w-full">
          <Button className="rounded-full text-pink-700 font-bold text-2xl p-4 py-8 md:p-8 bg-black/30 border-4 hover:bg-pink-700 hover:text-white hover:border-pink-700 max-w-60 w-full leading-[120px] tracking-[4px]" onClick={() => router.push('/white-paper')}>
            WHITEPAPER
          </Button>
          <Button className="rounded-full text-pink-700 font-bold text-2xl p-4 py-8 md:p-8 bg-black/30 border-4 hover:bg-pink-700 hover:text-white hover:border-pink-700 max-w-60 w-full leading-[120px] tracking-[4px]" onClick={() => router.push('invest')}>
            INVEST
          </Button>
        </div>
      </div>
    </section >
  );
}