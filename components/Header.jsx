'use client';

import React, { useEffect, useState } from 'react';

//Components
import Logo from './Logo';
import Nav from './Nav';
import Mobilenavigation from './Mobilenavigation';

import ThemeToggler from './ThemeToggler';
import { usePathname } from 'next/navigation';
import { TbArrowUpRight } from "react-icons/tb";
import Link from 'next/link';


const Header = () => {

    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        //remove Events
        return () => window.removeEventListener('scroll', scrollYPos);
    });
    return (
        <header
        className={`${
            header
            ? 'py-4 bg-tertiary shadow-lg dark:bg-accent'
            : 'py-6 dark:bg-transparent shadow-md'
        } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'}`}
        >
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    {/* Logo Section */}
                    <Logo />
                    <div className='flex items-center gap-x-6'>
                        {/* Nav Section */}
                        <Nav 
                        containerStyles='hidden xl:flex gap-x-8 items-center'
                        linkStyles='relative hover:text-primary transition-all font-bold'
                        underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
                        />

                        {/** */}
                        <button className=' relative overflow-hidden group max-md:hidden border-[1px] border-gray-500 p-2 rounded-sm inline-flex items-center font-bold hover:text-white hover:border-none'>
                            <Link className='inline-flex items-center' href='contact'>
                            <span className=' relative z-10'>Book A Consultancy</span>
                            <TbArrowUpRight className=' relative z-10 h-5 w-5 ml-2'/>
                            <span className="absolute inset-0 bg-primary transform translate-y-full transition-transform duration-500 group-hover:translate-y-0"></span>
                            </Link>
                        </button>

                        {/* Theme Toggler */}
                        <ThemeToggler />


                        {/* Mobile Navigation */}
                        <div className='xl:hidden'>
                            <Mobilenavigation />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header