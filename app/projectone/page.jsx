'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";

import { motion, useScroll, useTransform } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';

const page = () => {
  return (
    <div className=''>
    <div className=" py-72 bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
        <h1 className="container py-2 text-6xl font-semibold tracking-widest text-white">Project One</h1>
        <p className='text-white uppercase container'>Bedroom</p>
      </div>

      <div className=' py-4 mt-4 flex flex-col md:flex-row container mx-auto justify-between items-center'>
        <div>
            <h1 className='sm:text-2xl font-bold uppercase'>Description</h1>
            <p>Famous roads are only complete with a cafe.</p>
        </div>

        <div>
        <Table className="w-full table-auto dark:bg-gray-800 dark:text-white">
            <TableCaption className="text-md upp text-center dark:text-gray-300">Project details.</TableCaption>
            <TableBody>
                <TableRow className="even:bg-gray-100 dark:even:bg-tertiary">
                <TableCell className="px-4 py-2">Project Size</TableCell>
                <TableCell className="px-4 py-2">100SQM</TableCell>
                </TableRow>
                <TableRow className="even:bg-gray-100 dark:even:bg-tertiary">
                <TableCell className="px-4 py-2">Location</TableCell>
                <TableCell className="px-4 py-2">Chaka Road Mall</TableCell>
                </TableRow>
                <TableRow className="even:bg-gray-100 dark:even:bg-tertiary">
                <TableCell className="px-4 py-2">Status</TableCell>
                <TableCell className="px-4 py-2">Ongoing</TableCell>
                </TableRow>
                <TableRow className="even:bg-gray-100 dark:even:bg-tertiary">
                <TableCell className="px-4 py-2">Scope</TableCell>
                <TableCell className="px-4 py-2">Design consultancy & Project Management.</TableCell>
                </TableRow>
            </TableBody>
            </Table>


        </div>
      </div>

      <div className='pt-3 pb-4'>
            <motion.h1 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className='  lg:text-4xl font-bold tracking-wider text-center uppercase'>Project Images</motion.h1>
          </div>

      <div className=" mb-20">
        {/**project images */}
            {/* Swiper Section */}
            <Swiper
            sliderperview={1}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            >
                <SwiperSlide>
                    <Image 
                    src="/image/swiper1.jpg"
                    alt="Swiper"
                    width={520}
                    height={220}
                    className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                    src="/image/swiper2.jpg"
                    alt="Swiper"
                    width={520}
                    height={220}
                    className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                    src="/image/swiper3.jpg"
                    alt="Swiper"
                    width={520}
                    height={220}
                    className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                    src="/image/swiper4.jpg"
                    alt="Swiper"
                    width={520}
                    height={220}
                    className="w-full"
                    />
                </SwiperSlide>
                <SwiperSlide>
                <Image 
                    src="/image/swiper5.jpg"
                    alt="Swiper"
                    width={520}
                    height={220}
                    className="w-full"
                    />
                </SwiperSlide>
            </Swiper>
      </div>
    </div>
  )
}

export default page