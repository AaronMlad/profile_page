"use client";
import Link from 'next/link';
import { montserrat } from "@/app/fonts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <>
            <div className="sticky top-0 text-center p-4">
                <div className="flex justify-between">
                    <div className="ml-8 mb-2 mt-2">
                        <img src="/assets/logonobg.png" alt="logo" className="w-[202px] h-[59px]"/>
                    </div>
                    <div>
                        <nav className={`font-montserrat flex items-center gap-15 mr-8 mt-4 mb-4 text-[20px] font-light`}>
                            <button>
                            <FontAwesomeIcon icon={faSun} className="w-10 h-10 mt-3 
                            drop-shadow-[0_0_10px_#000000] 
                            hover:drop-shadow-[0_0_5px_#FFFFFF] hover:scale-115
                            transition-all
                            duration-300"/>
                            </button>
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