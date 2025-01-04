'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";


const AboutComponent = () => {
    return (
        <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-12 xl:py-24 h-[auto]">
            <div className="grid lg:grid-cols-2 place-items-center">
                <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                >
                    <Image 
                    src="/image/aboutfront.png"
                    width={900}
                    height={500}
                    alt="About"
                    className="max-md:hidden"
                    />
                </motion.div>

                <div className="items-center flex flex-col ">
                    <motion.h2 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="px-12 text-3xl font-extrabold leading-tight">
                        We are an awards Winning Company
                    </motion.h2>

                    <motion.p 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className="px-12 tracking-wider uppercase text-gray-400 mt-3 self-start">
                        World Award
                    </motion.p>

                    <motion.p 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="px-12 pb-4 mt-4">
                    This is a company engaged in the field of interior design. We provide the best interior design for your home. We have been trusted by many people to design their homes. We have also received many awards from various countries for our work.
                    </motion.p>

                    <Button className=" sm:px-12 pb-4 mt-4 inline-flex items-center py-3 text-white rounded-sm  shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                        View Awards <TbArrowUpRight className="w-5 h-5 ml-2" />
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default AboutComponent