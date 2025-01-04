"use client";
import { TbArrowUpRight } from "react-icons/tb";
import { Button } from "./ui/button";

import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";

export default function HomeCatalogSwiperSection() {
    return (
        <div className=" ">
            {/* Swiper Section */}
            <Swiper
            sliderperview={1}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            >

            <SwiperSlide>
                <div className="bg-[url('/image/projectbackground.jpg')] bg-center bg-cover">
                    <h1 className="container py-64 text-6xl font-semibold tracking-widest text-black">
                    Elevating Spaces, <br />  Redefining Style
                    </h1>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="bg-[url('/image/projectbackground.jpg')] bg-center bg-cover">
                    <h1 className="container py-64 text-6xl font-semibold tracking-widest text-black">
                    Timeless Interiors, <br /> Perfect Harmony
                    </h1>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="bg-[url('/image/projectbackground.jpg')] bg-center bg-cover">
                    <h1 className="container py-64 text-6xl font-semibold tracking-widest text-black">
                    Where Design <br /> Meets Elegance
                    </h1>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="bg-[url('/image/projectbackground.jpg')] bg-center bg-cover">
                    <h1 className="container py-64 text-6xl font-semibold tracking-widest text-black">
                    Inspiring Living, <br />  Beautifully Crafted
                    </h1>
                </div>
            </SwiperSlide>

            </Swiper>
        </div>
    )
}