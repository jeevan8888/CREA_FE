import React from "react";

const Contact = () => {
    return (
        <section className="max-w-screen-2xl mx-auto p-6">
            <h1 className="text-[88px] font-bold text-pink-700 text-center">
                CONTACT
            </h1>
            <div className="flex flex-col items-center mt-10">
                <div className="bg-[#1D1D1D] rounded-3xl py-6 px-8 w-[900px] space-y-4">
                    <div className="bg-white rounded-3xl px-4 py-2">
                        <label htmlFor="name" className="text-2xl font-bold mr-4">Name:</label>
                        <input id="name" className="text-2xl outline-none bg-transparent" />
                    </div>
                    <div className="bg-white rounded-3xl px-4 py-2">
                        <label htmlFor="email" className="text-2xl font-bold mr-4">Email:</label>
                        <input id="email" className="text-2xl outline-none bg-transparent" />
                    </div>
                    <div className="bg-white rounded-3xl px-4 py-2">
                        <textarea id="email" className="text-2xl outline-none bg-transparent" rows={4} placeholder="what’s on your mind?..." />
                    </div>
                </div>
                <button className="font-bold mt-8 bg-[#DE1E61] text-2xl rounded-3xl w-52 h-10 mx-auto block">
                    Send
                </button>
            </div>
        </section>
    )
}

export default Contact;