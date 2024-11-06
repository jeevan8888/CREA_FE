import React from 'react';
import {
    Nikolay_Sharov, Ngwu_Tochukwu_Ambrose, Wajdi_Zoghbi, Prathamesh_Shedge, Jason_Chang, Jude_Abara, Ayoshis_Sitaula,
    Hangjun_Li, Nathan_Godwin, Ifeanyi_Kingsley_Chikelu, Subhodip_Ghosh, Ameawhule_David,
} from "@/Images"
import Image from 'next/image';

function WhitePage() {
    const team = [
        { name: 'Nikolay Sharov', postion: 'ceo', img: Nikolay_Sharov },
        { name: 'Ngwu Tochukwu Ambrose', postion: 'Project Manager', img: Ngwu_Tochukwu_Ambrose },
        { name: 'WAJDI ZOGHBI ', postion: 'ProDUct DESIGNER', img: Wajdi_Zoghbi },
        { name: 'Prathamesh Shedge', postion: 'gRAPHIC dESIGNER', img: Prathamesh_Shedge },
        { name: 'Jason CHANG', postion: '', img: Jason_Chang },
        { name: 'JUDE ABARA', postion: '', img: Jude_Abara },
        { name: 'AYOSHIS SITAULA', postion: '', img: Ayoshis_Sitaula },
        { name: 'AMEAWHULE DAVID', postion: '', img: Ameawhule_David },
        { name: 'HANGJUN LI', postion: '', img: Hangjun_Li },
        { name: 'NATHAN GODWIN', postion: '', img: Nathan_Godwin },
        { name: 'IFEANYI KINGSLEY CHIKELU', postion: '', img: Ifeanyi_Kingsley_Chikelu },
        { name: 'SUBHODIP GHOSH', postion: '', img: Subhodip_Ghosh },
    ];

    return (
        <section className="max-w-screen-2xl mx-auto p-6">
            <h1 className="text-[88px] font-bold text-white text-center">
                THE <span className="text-pink-700">TEAM</span>
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mt-10'>
                {
                    team.map((item) =>
                        <div className='rounded-3xl bg-white overflow-hidden' key={item.name}>
                            <Image src={item.img} alt={item.name} className='h-80 object-cover bg-center' />
                            <div className='flex flex-col items-center h-16 justify-center'>
                                <h4 className='uppercase text-sm font-bold text-center'>{item.name}</h4>
                                <span className='uppercase text-xs mt-1.5 text-center'>{item.postion}</span>
                            </div>
                        </div>)
                }
            </div>
        </section>
    );
}

export default WhitePage;