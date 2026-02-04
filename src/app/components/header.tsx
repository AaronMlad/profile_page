"use client";

import Link from 'next/link';
import { montserrat } from "@/app/fonts";

export default function Header() {
    return (
        <>
            <div className="sticky top-0 bg-[#152637] text-white text-center p-4">
                <div className="flex justify-between">
                    <div className="ml-8 mb-2 mt-2">
                        <img src="/assets/logonobg.png" alt="logo" className="w-[202px] h-[59px]"/>
                    </div>
                    <div>
                        <nav className={`${montserrat.className} flex gap-15 mr-8 mt-4 mb-4 text-[20px] font-light`}>
                            <a href="#home" className="hover:text-[#ff3131] active:text-[#8C1D18]">HOME</a>
                            <a href="#about" className="hover:text-[#ff3131] active:text-[#8C1D18]">ABOUT</a>
                            <a href="#skills" className="hover:text-[#ff3131] active:text-[#8C1D18]">SKILLS</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}