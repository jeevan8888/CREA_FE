import React from 'react';
import { Button } from '@/components/ui/button';
import { FaFileAlt } from 'react-icons/fa';
import Card from './card'
import { EmblaOptionsType } from 'embla-carousel'

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true }

function Blog() {

    return (
        <section className="max-w-screen-2xl mx-auto p-6">
            <h1 className="!text-[88px] font-bold text-white text-center">
                <span className="text-pink-700">BLOG</span>
            </h1>

            <Card options={OPTIONS} />
        </section>
    );
}

export default Blog;