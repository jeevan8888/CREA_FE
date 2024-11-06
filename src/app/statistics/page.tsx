import React from "react";
import CircleProgress from "@/components/ui/circle-progress"


const Statistics = () => {
    return (
        <section className="max-w-screen-2xl mx-auto p-6">
            <h1 className="text-[88px] font-bold text-white text-center">
                THE <span className="text-pink-700">ALLOCATION</span>
            </h1>
            <div className="mt-32 flex flex-row gap-x-20 items-center justify-between">
                <div className="flex flex-col items-center justify-center">
                    <CircleProgress percentage={80} />
                    <h4 className="text-5xl font-bold text-center mt-16 text-white uppercase">TOTAL SUPPLY</h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <CircleProgress percentage={18} />
                    <h4 className="text-5xl font-bold text-center mt-16 text-white uppercase"> grants and icos</h4>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <CircleProgress percentage={68} />
                    <h4 className="text-5xl font-bold text-center mt-16 text-white uppercase">COMMUNITY</h4>
                </div>
            </div>
        </section>
    )
}


export default Statistics;