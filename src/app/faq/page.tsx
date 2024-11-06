import React from "react";
import * as Accordion from "@radix-ui/react-accordion";


const FAQ = () => {

    const data = [
        {
            title: "What is Creative Catalyst?",
            description: "Creative Catalyst is an innovative platform designed to empower creators by providing them with the tools and resources needed to bring their projects to life. It leverages blockchain technology, smart contracts, and the CREA token to facilitate project funding and collaboration within a global creative community.",
        },
        {
            title: "How does Creative Catalyst support creativity?",
            description: "The platform supports creativity by offering a space where creators can submit their projects, seek funding, and collaborate with like-minded individuals. Through its decentralized autonomous organization (DAO) structure, Creative Catalyst ensures transparent and equitable access to resources.",
        },
        {
            title: "What role does the CREA token play?",
            description: "The CREA token serves as the primary currency within the Creative Catalyst ecosystem. It is used for transactions on the platform, including project funding, voting on creative initiatives, and accessing premium features and resources.",
        },
        {
            title: "How can I become a part of the community?",
            description: "Joining the Creative Catalyst community is simple. Users can register on the platform during the beta or public launch phases, participate in community-driven events, and engage in forums and social media channels dedicated to creative collaboration.",
        },
        {
            title: "What are the eligibility criteria for project funding?",
            description: "To qualify for funding, projects must align with Creative Catalyst's mission of fostering innovation and creativity. Detailed guidelines and submission processes will be available on the platform to guide creators through the application stages.",
        },
        {
            title: "How does the platform ensure sustainability?",
            description: "Creative Catalyst is committed to integrating sustainable practices by encouraging eco-friendly projects and embracing green technologies. The platform also seeks to educate the community about sustainability's role in responsible creativity.",
        },
    ];

    return (
        <section className="max-w-screen-lg mx-auto p-6 text-white">
            <div>
                <h1 className="text-[88px] font-bold text-white text-center">
                    THE <span className="text-pink-700">FAQ</span>
                </h1>
            </div >
            <div className="w-full">
                <Accordion.Root
                    type="single"
                    collapsible
                    className="space-y-4"
                >
                    {data.map((item, index) => (
                        <Accordion.Item
                            value={item.title}
                            key={item.title}
                            className="rounded-full bg-white py-4 px-8 data-[state=open]:bg-pink-700 data-[state=closed]:text-black data-[state=open]:text-white"
                        >
                            <Accordion.Header>
                                <Accordion.Trigger className="group">
                                    <span className="text-2xl font-semibold"> {item.title} </span>
                                </Accordion.Trigger>
                            </Accordion.Header>
                            <Accordion.Content className="transition-all data-[state=closed]:animate-accordion-up pt-1 data-[state=open]:animate-accordion-down">
                                <p className="text-sm">{item.description}</p>
                            </Accordion.Content>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </div>
        </section >
    )
}

export default FAQ;