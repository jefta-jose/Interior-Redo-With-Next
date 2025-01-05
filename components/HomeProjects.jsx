'use client'

import Image from "next/image";
import { motion } from 'framer-motion';
import { desVariants, tagVariants, titleVariants } from '@/utils/animation';
import { Button } from "./ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import Link from "next/link";


export default function HomeProjects() {
  const projects = [
    {
      id: 1,
      name: 'Drowing room for family time',
      description: 'Bedroom with a clean and comfortable design for your family. charming whit a modern design.',
      image: '/image/project3.jpg',
      link: '',
    },
    {
      id: 2,
      name: 'Kitchen look modern and clean',
      description: 'kitchen look modern and clean. charming whit a modern design.',
      image: '/image/project2.jpg',
      link: '',
    },
    {
        id: 3,
        name: 'Drowing room for family time',
        description: 'Bedroom with a clean and comfortable design for your family. charming whit a modern design.',
        image: '/image/project3.jpg',
        link: '',
      },
  ];

  return (
    <div className="flex flex-col items-center">
          <div className='pt-3 pb-4'>
            <motion.h1 
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className='text-4xl font-bold tracking-wider text-center uppercase'>Our Projects</motion.h1>
          </div>

      <div className="container grid lg:grid-cols-3 gap-8 py-8">
        {
          projects.map((project) => (
            <div key={project.id} className="relative overflow-hidden rounded-xl group">
              <div>
                <Image src={project.image} width={480} height={380} alt="" className="w-full" />
              </div>
              <div className="absolute rounded-t-md bottom-0 right-0 bg-white/90 dark:bg-black/40 flex-col items-center justify-end w-96 gap-32 p-5 max-sm:p-1 max-sm:gap-5 max-sm:w-40 text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
                <h1 className="text-md font-semibold max-sm:text-sm">{project.name}</h1>
                <p className="py-4 text-sm max-sm:py-1 max-sm:line-clamp-1">{project.description}</p>
              </div>
            </div>
          ))
        }
      </div>

      <Button className=" sm:px-12 pb-4 mt-4 inline-flex items-center py-3 text-white rounded-sm  shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            <Link className="inline-flex items-center" href='projects'>
            View More Projects <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
        </Button>
    </div>
  )
}