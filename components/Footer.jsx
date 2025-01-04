'use client';

import Link from "next/link";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";


export default function Footer() {
    return (
        <div className="bg-tertiary">
            <div className="container lg:grid lg:grid-cols-2 py-14">
                <div className="grid gap-4 pb-4 text-left lg:pb-0 lg:grid-cols-3">
                    <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    >
                        <h2 className="pb-4 text-xl font-semibold uppercase">Quick Links</h2>
                        <div className="flex flex-col">
                            <Link href='/about' className="py-1 hover:underline">About Us</Link>
                            <Link href='/services' className="py-1 hover:underline">Services</Link>
                            <Link href='/gallery' className="py-1 hover:underline">Gallery</Link>
                            <Link href='/projects' className="py-1 hover:underline">Projects</Link>
                            <Link href='/events' className="py-1 hover:underline">Events</Link>
                            <Link href='/blogs' className="py-1 hover:underline">Blogs</Link>
                            <Link href='/contact' className="py-1 hover:underline">Contact Us</Link>
                        </div>
                    </motion.div>

                    <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    >
                        <h2 className="pb-4 text-xl font-semibold uppercase">Connect</h2>
                        <div className="flex flex-col">
                            <Link href='/' className="py-1 hover:underline">Instragram</Link>
                            <Link href='/' className="py-1 hover:underline">Twitter</Link>
                            <Link href='/' className="py-1 hover:underline">Linkedin</Link>
                            <Link href='/' className="py-1 hover:underline">Facebook</Link>
                        </div>
                    </motion.div>

                    <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    >
                        <h2 className="pb-4 text-xl font-semibold uppercase">Contacts</h2>
                        <div className="flex flex-col">
                            <Link href='/' className="py-1 hover:underline">+254 797 000 000</Link>
                            <Link href='/' className="py-1 hover:underline">email1@gmail.com</Link>
                            <Link href='/' className="py-1 hover:underline">email2@gmail.com</Link>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                >
                    <p className="pb-4 text-xl font-semibold">Stay Updated</p>
                    <div className="relative lg:max-w-sm">
                        <Input type='name' id='first name' placeholder="Email Address" />
                        <button className="absolute bg-black text-white rounded-full h-10 px-3 text-sm top-2 right-2 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-primary">
                            Subscribe
                        </button>
                    </div>
                    <p className="pt-4 text-gray-500">
                        By subscribing to our newsletter, you agree to receive emails from us. Your personal data will be stored and processed in accordance with our Privacy Policy and you can unsubscribe at any time.
                    </p>
                </motion.div>
            </div>

            {/* Copyright */}
            <motion.div 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="py-10 bg-black dark:bg-primary">
                <div className="container text-white text-center lg:justify-between lg:flex">
                    <div className="pb-4 lg:pb-0">
                        <p>&copy; 2015–2025 by Home Axil Interiors Ltd. All rights reserved. | Built by 
                        <Link target="_blank" className="p-4 hover:text-blue-600 text-primary font-bold uppercase " href='https://jeffndegwa.netlify.app/'>Jeff Ndegwa</Link>
                        </p>
                    </div>
                    <div>
                        <Link className="p-4 hover:underline" href='/'>Privacy</Link>
                        <Link className="p-4 hover:underline" href='/'>Terms</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
} 