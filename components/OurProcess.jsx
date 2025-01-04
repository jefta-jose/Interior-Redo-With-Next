'use client'

import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import icon from '../public/briefcase-alt-4-svgrepo-com.svg'

const OurProcess = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
  return (
    <div>
      <div className='container mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Design Process Section */}
        <div className='lg:py-10'>
          <div className='pt-3 pb-4'>
            <motion.h1 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className='text-4xl font-bold tracking-wider text-center uppercase'>Our Design Process</motion.h1>
          </div>

          <div className='grid py-8 gap-20 lg:grid-cols-3 sm:grid-cols-2'>
          <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className=' border-primary border-2'
                >
                <div className=" group p-4 text-center bg-gray-100 sm:aspect-square -m-1 dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3">
                    {/* Circle Container */}
                    <div className="relative mx-auto rounded-full w-[200px] h-[200px] bg-black text-3xl font-bold flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:ring-2 group-hover:ring-gray-600">
                    {/* Number "1" */}
                    <span className=" absolute top-2 left-2 h-10 w-10 rounded-full border-2 border-gray-200 group-hover:bg-black group-hover:text-white text-black bg-gray-100 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:top-8 group-hover:left-8">
                        1
                    </span>

                    {/* Centered Content */}
                    <div className="flex flex-col items-center justify-center">
                        <Image src={icon} width={35} height={35} alt="Icon" />
                        <span className="text-sm uppercase text-white mt-2 transition-colors duration-300 ease-in-out group-hover:text-black">
                        Client Brief
                        </span>
                    </div>
                    </div>

                    {/* Heading */}
                    <h2 className="py-2 text-md font-semibold uppercase">Client Surveys</h2>
                    <p className="text-sm line-clamp-2">
                    Client visit, site visit, site survey and analysis, initial client budget analysis
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className=' border-primary border-2'
                >
                <div className=" group p-4 text-center bg-gray-100 sm:aspect-square -m-1 dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3">
                    {/* Circle Container */}
                    <div className="relative mx-auto rounded-full w-[200px] h-[200px] bg-black text-3xl font-bold flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:ring-2 group-hover:ring-gray-600">
                    {/* Number "2" */}
                    <span className=" absolute top-2 left-2 h-10 w-10 rounded-full border-2 border-gray-200 group-hover:bg-black group-hover:text-white text-black bg-gray-100 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:top-8 group-hover:left-8">
                        2
                    </span>

                    {/* Centered Content */}
                    <div className="flex flex-col items-center justify-center">
                        <Image src={icon} width={35} height={35} alt="Icon" />
                        <span className="text-sm uppercase text-white mt-2 transition-colors duration-300 ease-in-out group-hover:text-black">
                        Concept Design
                        </span>
                    </div>
                    </div>

                    {/* Heading */}
                    <h2 className="py-2 text-md font-semibold uppercase">Concept Design</h2>
                    <p className="text-sm line-clamp-2">
                    Choice of design philosophy & design style, Case Studies, Mood board, preliminary Schedule of accommodation ...
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className=' border-primary border-2'
                >
                <div className=" group p-4 text-center bg-gray-100 sm:aspect-square -m-1 dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3">
                    {/* Circle Container */}
                    <div className="relative mx-auto rounded-full w-[200px] h-[200px] bg-black text-3xl font-bold flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:ring-2 group-hover:ring-gray-600">
                    {/* Number 3" */}
                    <span className=" absolute top-2 left-2 h-10 w-10 rounded-full border-2 border-gray-200 group-hover:bg-black group-hover:text-white text-black bg-gray-100 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:top-8 group-hover:left-8">
                        3
                    </span>

                    {/* Centered Content */}
                    <div className="flex flex-col items-center justify-center">
                        <Image src={icon} width={35} height={35} alt="Icon" />
                        <span className="text-sm uppercase text-white mt-2 transition-colors duration-300 ease-in-out group-hover:text-black">
                        Scheme Design
                        </span>
                    </div>
                    </div>

                    {/* Heading */}
                    <h2 className="py-2 text-md font-semibold uppercase">Scheme Design</h2>
                    <p className="text-sm line-clamp-2">
                    Detailed Space plans, Detailed CAD modelling, Artistic impressions, Final colour & Material selection, Furniture, Fixtures & Equipment selection. Finishes Schedules, Refinement of client’s budget.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className=' border-primary border-2'
                >
                <div className=" group p-4 text-center bg-gray-100 sm:aspect-square -m-1 dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3">
                    {/* Circle Container */}
                    <div className="relative mx-auto rounded-full w-[200px] h-[200px] bg-black text-3xl font-bold flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:ring-2 group-hover:ring-gray-600">
                    {/* Number "4" */}
                    <span className=" absolute top-2 left-2 h-10 w-10 rounded-full border-2 border-gray-200 group-hover:bg-black group-hover:text-white text-black bg-gray-100 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:top-8 group-hover:left-8">
                        4
                    </span>

                    {/* Centered Content */}
                    <div className="flex flex-col items-center justify-center">
                        <Image src={icon} width={35} height={35} alt="Icon" />
                        <span className="text-sm uppercase text-white mt-2 transition-colors duration-300 ease-in-out group-hover:text-black">
                        Detailed Design
                        </span>
                    </div>
                    </div>

                    {/* Heading */}
                    <h2 className="py-2 text-md font-semibold uppercase">Detailed Design</h2>
                    <p className="text-sm line-clamp-2">
                    Preparation of all working drawings and details indicating all dimensions and material specification for use by contractors and sub-contractors on site.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className=' border-primary border-2'
                >
                <div className=" group p-4 text-center bg-gray-100 sm:aspect-square -m-1 dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3">
                    {/* Circle Container */}
                    <div className="relative mx-auto rounded-full w-[200px] h-[200px] bg-black text-3xl font-bold flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:ring-2 group-hover:ring-gray-600">
                    {/* Number "5" */}
                    <span className=" absolute top-2 left-2 h-10 w-10 rounded-full border-2 border-gray-200 group-hover:bg-black group-hover:text-white text-black bg-gray-100 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:top-8 group-hover:left-8">
                        5
                    </span>

                    {/* Centered Content */}
                    <div className="flex flex-col items-center justify-center">
                        <Image src={icon} width={35} height={35} alt="Icon" />
                        <span className="text-sm uppercase text-white mt-2 transition-colors duration-300 ease-in-out group-hover:text-black">
                        Contract Administration
                        </span>
                    </div>
                    </div>

                    {/* Heading */}
                    <h2 className="py-2 text-md font-semibold uppercase">Contract Administration</h2>
                    <p className="text-sm line-clamp-2">
                    Scheduled site visits during installation to review progress, conformance with working drawings, Inspection of materials and equipment for conformity with specifications ...
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className=' border-primary border-2'
                >
                <div className=" group p-4 text-center bg-gray-100 sm:aspect-square -m-1 dark:bg-tertiary transition hover:-translate-y-3 hover:-translate-x-3">
                    {/* Circle Container */}
                    <div className="relative mx-auto rounded-full w-[200px] h-[200px] bg-black text-3xl font-bold flex items-center justify-center transition-colors duration-300 ease-in-out group-hover:bg-white group-hover:ring-2 group-hover:ring-gray-600">
                    {/* Number "6" */}
                    <span className=" absolute top-2 left-2 h-10 w-10 rounded-full border-2 border-gray-200 group-hover:bg-black group-hover:text-white text-black bg-gray-100 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:top-8 group-hover:left-8">
                        6
                    </span>

                    {/* Centered Content */}
                    <div className="flex flex-col items-center justify-center">
                        <Image src={icon} width={35} height={35} alt="Icon" />
                        <span className="text-sm uppercase text-white mt-2 transition-colors duration-300 ease-in-out group-hover:text-black">
                        Project HandOver
                        </span>
                    </div>
                    </div>

                    {/* Heading */}
                    <h2 className="py-2 text-md font-semibold uppercase">Project Handover</h2>
                    <p className="text-sm line-clamp-2">
                    Project is handed over back to the client for occupation.
                    </p>
                </div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProcess