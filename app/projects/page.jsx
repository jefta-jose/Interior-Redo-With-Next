'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import { motion } from "framer-motion";


export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'Drowing room for family time',
      description: 'Bedroom with a clean and comfortable design for your family. charming whit a modern design.',
      image1: '/image/project3.jpg',
      image2: '/image/project3.jpg',
      image3: '/image/project3.jpg',
      link: 'projectone',
    },
    {
      id: 2,
      name: 'Kitchen look modern and clean',
      description: 'kitchen look modern and clean. charming whit a modern design.',
      image1: '/image/project2.jpg',
      image2: '/image/project2.jpg',
      image3: '/image/project2.jpg',
      link: '',
    },
    {
      id: 3,
      name: 'Perfect living room for family time',
      description: 'Drowing room with a clean and comfortable design for your family. charming whit a modern design.',
      image1: '/image/project2.jpg',
      image2: '/image/project2.jpg',
      image3: '/image/project2.jpg',
      link: '',
    },

    {
      id: 4,
      name: 'Drowing room for family time',
      description: 'Bedroom with a clean and comfortable design for your family. charming whit a modern design.',
      image1: '/image/project3.jpg',
      image2: '/image/project3.jpg',
      image3: '/image/project3.jpg',
      link: '',
    },
    {
      id: 5,
      name: 'Kitchen look modern and clean',
      description: 'kitchen look modern and clean. charming whit a modern design.',
      image1: '/image/project2.jpg',
      image2: '/image/project2.jpg',
      image3: '/image/project2.jpg',
      link: '',
    },
    {
      id: 6,
      name: 'Perfect living room for family time',
      description: 'Drowing room with a clean and comfortable design for your family. charming whit a modern design.',
      image1: '/image/project2.jpg',
      image2: '/image/project2.jpg',
      image3: '/image/project2.jpg',
      link: '',
    },
  ];

  return (
    <div>
      <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">Our Projects</h1>
      </div>

      <div className="container grid lg:grid-cols-2 gap-8 py-8">
        {
          projects.map((project) => (
            <div key={project.id} className="relative overflow-hidden rounded-sm group">

            <motion.div
              className="flex h-full"
              whileHover={{ x: "0%" }} // Slides the images into view on hover
              initial={{ x: "-100%" }} // Start hidden to the left
              animate={{ x: "-100%" }} // Rest position
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image src={project.image1} width={480} height={380} alt="" className="w-full" />
              <Image src={project.image2} width={480} height={380} alt="" className="w-full" />
              <Image src={project.image3} width={480} height={380} alt="" className="w-full" />
            </motion.div>

            <div className="absolute bottom-0 right-0 bg-white/60 dark:bg-black/40 flex flex-col items-center lg:items-start justify-evenly h-full w-full max-w-[400px] sm:max-w-[360px] md:max-w-[420px] p-4 md:p-6 lg:p-12 text-base sm:text-lg lg:text-xl transition duration-300 ease-in-out translate-y-full from-transparent to-black group-hover:translate-y-0">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center lg:text-left">{project.name}</h1>
              <p className="py-2 text-xs sm:text-sm md:text-base lg:py-4 text-center lg:text-left">{project.description}</p>

              <Button className="mt-2 px-6 sm:px-8 py-2 sm:py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 lg:self-start self-center">
                <Link href={project.link} className="inline-flex items-center">
                  View Project <TbArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 ml-2" />
                </Link>
              </Button>
            </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}