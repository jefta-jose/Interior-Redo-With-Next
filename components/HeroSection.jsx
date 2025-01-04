'use client'

import Image from "next/image";
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import icon from '../public/briefcase-alt-4-svgrepo-com.svg'
import image from '../public/image/project3.jpg'

const HeroSection = () => {
    return (
        <div className='container mx-auto py-2 h-[auto] m-8'>
            <div className="flex flex-col items-center">
                {/* Left Section */}
                <div className='py-2 flex flex-col items-center'>
                    <motion.h1
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='tracking-sm uppercase text-5xl xl:leading-[80px] font-bold mb-5 mt-4 text-primary'>
                        Why choose homeaxil interior design
                    </motion.h1>

                    <motion.p 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className='pb-3 text-muted-foreground xl:pb-3 text-center'>
                        Change your view with the best interior design. We provide the best interior design for your Home. Make every moment beautiful with the best interior design.Change your view with the best interior design. We provide the best interior design for your Home. Make every moment beautiful with the best interior design.
                    </motion.p>

                    <div className="grid grid-cols-4 max-md:grid-cols-1 gap-10">

                        <div className="flex flex-col items-center justify-center text-center gap-4">
                            <Image
                            src={image}
                            width={236}
                            height={100}
                            className="w-full rounded-md shadow-lg"
                            alt="image"
                            />
                            <Link
                            href="/"
                            className="inline-flex items-center gap-x-1 text-[0.8rem] text-blue-500 hover:text-blue-800"
                            >
                            <Image
                                src={icon}
                                width={30}
                                height={30}
                                alt="link icon"
                            />
                            Commercial Interior
                            </Link>
                        </div>


                        <div className="flex flex-col items-center justify-center text-center gap-4">
                            <Image
                            src={image}
                            width={236}
                            height={100}
                            className="w-full rounded-md shadow-lg"
                            alt="image"
                            />
                            <Link
                            href="/"
                            className="inline-flex items-center gap-x-1 text-[0.8rem] text-blue-500 hover:text-blue-800"
                            >
                            <Image
                                src={icon}
                                width={30}
                                height={30}
                                alt="link icon"
                            />
                            Commercial Interior
                            </Link>
                        </div>


                        <div className="flex flex-col items-center justify-center text-center gap-4">
                            <Image
                            src={image}
                            width={236}
                            height={100}
                            className="w-full rounded-md shadow-lg"
                            alt="image"
                            />
                            <Link
                            href="/"
                            className="inline-flex items-center gap-x-1 text-[0.8rem] text-blue-500 hover:text-blue-800"
                            >
                            <Image
                                src={icon}
                                width={30}
                                height={30}
                                alt="link icon"
                            />
                            Commercial Interior
                            </Link>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center gap-4">
                            <Image
                            src={image}
                            width={236}
                            height={100}
                            className="w-full rounded-md shadow-lg"
                            alt="image"
                            />
                            <Link
                            href="/"
                            className="inline-flex items-center gap-x-1 text-[0.8rem] text-blue-500 hover:text-blue-800"
                            >
                            <Image
                                src={icon}
                                width={30}
                                height={30}
                                alt="link icon"
                            />
                            Commercial Interior
                            </Link>
                        </div>
                    </div>

                    </div>
                    
                    <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    >
                    <Button className=" mt-5 inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                        Book now <TbArrowUpRight className="w-5 h-5 ml-2" />
                    </Button>
                    </motion.div>
                </div>
            </div>

    )
}

export default HeroSection