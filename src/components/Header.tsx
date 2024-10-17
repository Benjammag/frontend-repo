"use client";

import React from 'react'

import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '@/hooks/UseScroll';
import { cn } from '@/lib/utils';
import { div } from 'framer-motion/client';

const Header = () => {

    const scrolled = useScroll(5);
    const selectedLayout = useSelectedLayoutSegment();
    return (
        <div>
            <div className='logo pr-5 pl-2 pt-12'><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 24.9698V40L19.9159 19.9133L0 39.8292V24.8936L12.4468 12.4468L0 0H15.0302L40 24.9698Z" fill="#01295C" />
                <path d="M40.0001 0V15.1932L24.8096 0H40.0001Z" fill="#01295C" />
            </svg>
            </div>
            <div>
                <div
                    className={cn(
                        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
                        {
                            'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
                            'border-b border-gray-200 bg-white': selectedLayout,
                        },
                    )}
                >
                    <div className="flex h-[47px] items-center justify-between px-4">
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/"
                                className="flex flex-row space-x-3 items-center justify-center md:hidden"
                            >
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;