'use client'

import { useState , useEffect } from 'react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Nav from './Nav';
import Logo from './Logo';
import { AlignJustify } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Mobilenavigation = () => {
    //state to control whether sheet is opened
    const [isOpen , setIsOpen] = useState(false);
    const path = usePathname();

    useEffect(()=>{
        setIsOpen(false)
    }, [path]);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen} >
            <SheetTrigger asChild>
                <AlignJustify 
                className='cursor-pointer'
                onClick={()=> setIsOpen(true)}
                />
            </SheetTrigger>
            <SheetContent>
                <div className='flex flex-col items-center justify-between h-full py-8'>
                    <div className='flex flex-col items-center gap-y-32'>
                        <Logo />
                        <Nav 
                        containerStyles='flex flex-col items-center gap-y-6'
                        linkStyles='text-1xl font-semibold'
                        onLinkClick={() => setIsOpen(false)}
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default Mobilenavigation