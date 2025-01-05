'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useRef } from 'react'
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll, useTransform } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import icon from '../../public/briefcase-alt-4-svgrepo-com.svg'


const page = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
  return (
    <div>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover grid grid-cols-2">
      <div className='  bg-primary flex flex-col py-16 lg:py-32 sm:pl-10 sm:gap-y-4'>
        <h1 className=' text-[.5rem] sm:text-4xl font-semibold text-black tracking-widest '>About Us</h1>
        <p className='text-[.5rem] sm:text-[1.1rem]'>
        We are an award-winning interior design firm based in Nairobi Kenya and Kampala Uganda. We opened our doors in August 2015 and since then we have worked for over 500 clients in corporate, retail, residential, hospitality and healthcare categories of interior design.
        <br />
        <br />
        Our work is world class; we are keen on quality and detail; we have mastered our craft; which clearly distinguishes our work. We were recognized as The Fastest Interior Design Firm in Kenya in 2019 & 2022, Interior Designers of the year in 2020, 2022 & 2024, The Best Interior Design Solutions Provider in 2022, Top Commercial Interior Design Company 2024 and multiple international awards including African Excellence Awards: Interior Design Firm of the Year 2024 – Nairobi
        </p>

        <div className='flex lg:pt-4'>
          <div>
          <Image
          src={icon}
          height={100}
          width={200}
          />
          </div>

          <div className='lg:pl-4'>
            <h2 className='text-[.5rem] sm:text-2xl font-semibold'>What We Believe</h2>
            <p className='text-[.5rem] sm:text-[1.1rem]'>
            We believe that everyone deserves to work, live or play in a space that is safe, functional and tastefully finished. To us, the aesthetic is as important as the function.
            </p>
          </div>
        </div>

      </div>
      </div>

      <div className='container'>
        <div className='pt-4'>
          <motion.h2 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className='text-3xl font-semibold text-center lg:p-10 lg:text-5xl'>We have great idea & Interior Design</motion.h2>

          <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className='text-2xl text-center font-medium pb-10 mt-5'>
            Our interior design company is a company that provides interior design services for homes, offices, apartments, and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior.
          </motion.p>
        </div>

        <div className='items-center lg:flex gap-x-8'>
          {/*Left Image Section */}
          <motion.div 
          style={{scale}}
          ref={ref}
          className='w-full'>
            <Image src="/image/gallery1123.jpg" width={700} height={700} />
          </motion.div>

          {/*Right Content Section */}
          <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          >
            <p className='pb-4 tracking-wide mt-2'>
            We are an international Architects. We believe that today it is fundamental to totally rethink archi-tectural education. Confluence not only integrates new visions on society but also incorporates new methods and contemporary tools linked to creativity, production and communication. De-signed and handcrafted to hold and showcase my year two architecture portfolio, the unfolding box allows portfolio sheets… <br /><br />
            We are an international Architects. We believe that today it is fundamental to totally rethink archi-tectural education. Confluence not only integrates new visions on society but also incorporates new methods and contemporary tools linked to creativity, production and communication. De-signed and handcrafted to hold and showcase my year two architecture portfolio, the unfolding box allows portfolio sheets… <br /><br />
            <span className='text-xl font-extrabold tracking-tight'>
              The backpiperARCH, we share a belief in the transformational power of people united in a common purpose.
            </span>
            </p>
            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">Read More <TbArrowUpRight className='w-5 h-5 ml-2' /> </Button>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className='lg:py-20'>
          <div className='pt-8 pb-4'>
            <motion.h1 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className='text-4xl font-bold tracking-wider text-center uppercase'>Team</motion.h1>
          </div>

          <div className='grid py-8 gap-20 lg:grid-cols-3'>
            <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src="/image/profile2.jpg" width={200} height={200} alt='' className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className='text-sm'>
                Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>

            <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src="/image/profile1.jpg" width={200} height={200} alt='' className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className='text-sm'>
                Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>

            <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src="/image/profile3.jpg" width={200} height={200} alt='' className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Building Surveys</h2>
                <p className='text-sm'>
                Creativity is the ability to generate, create, or discover new ideas, solutions, and possibilities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page