'use client'

import Image from "next/image";
import { motion } from "framer-motion";


const page = () => {
  const Services = [
    {
      id: 1,
      name: 'Commercial Interior Design',
      description: 'Transform commercial spaces with designs that boost brand image and foster employee collaboration.',
      image: '/image/project3.jpg',
      link: '',
    },
    {
      id: 2,
      name: 'Residential Interior Design',
      description: 'Design personalized homes that reflect your style, enhance comfort, and create lasting memories.',
      image: '/image/project2.jpg',
      link: '',
    },
    {
      id: 3,
      name: 'Gypsum Ceilings',
      description: 'Add elegance and functionality to your home with beautiful gypsum ceiling designs.',
      image: '/image/project3.jpg',
      link: '',
    },
    {
      id: 4,
      name: 'Modern Office Design',
      description: 'Create a functional and modern office space that promotes productivity and innovation.',
      image: '/image/project3.jpg',
      link: '',
    },
    {
      id: 5,
      name: 'Luxury Living Room Design',
      description: 'Design luxurious living rooms that provide comfort and timeless style.',
      image: '/image/project2.jpg',
      link: '',
    },
    {
      id: 6,
      name: 'Customized Bedroom Interiors',
      description: 'Design tailored bedrooms that blend aesthetics with functionality.',
      image: '/image/project3.jpg',
      link: '',
    },
    {
      id: 7,
      name: 'Kitchen Renovations',
      description: 'Innovate your kitchen with practical and stylish designs that meet all your culinary needs.',
      image: '/image/project3.jpg',
      link: '',
    },
    {
      id: 8,
      name: 'Outdoor Living Spaces',
      description: 'Enhance outdoor areas with designs perfect for relaxation and entertainment.',
      image: '/image/project2.jpg',
      link: '',
    },
    {
      id: 9,
      name: 'Eco-Friendly Interiors',
      description: 'Incorporate sustainable and eco-friendly designs into your interior spaces.',
      image: '/image/project3.jpg',
      link: '',
    },
    {
      id: 10,
      name: 'Creative Kids Room Design',
      description: 'Design playful and inspiring rooms for children to grow and thrive.',
      image: '/image/project3.jpg',
      link: '',
    },
    {
      id: 11,
      name: 'Elegant Bathroom Designs',
      description: 'Upgrade bathrooms with elegant, modern, and functional designs.',
      image: '/image/project2.jpg',
      link: '',
    },
    {
      id: 12,
      name: 'Home Office Interiors',
      description: 'Design home offices that inspire productivity and comfort.',
      image: '/image/project3.jpg',
      link: '',
    },
    {
      id: 13,
      name: 'Retail Space Design',
      description: 'Create retail spaces that captivate customers and boost sales.',
      image: '/image/project3.jpg',
      link: '',
    },
    {
      id: 14,
      name: 'Event Space Interiors',
      description: 'Design event spaces that are stylish, functional, and memorable.',
      image: '/image/project2.jpg',
      link: '',
    },
    {
      id: 15,
      name: 'Hospitality Design',
      description: 'Elevate guest experiences with interior designs for hotels, restaurants, and lounges.',
      image: '/image/project3.jpg',
      link: '',
    },
  ];
  

  return (
          <div className="container grid lg:grid-cols-3 gap-8 py-8 mt-4">
            {
              Services.map((service) => (
                <motion.div
                key={service.id}
                className="relative"
                whileHover={{
                  y: -10, // Moves up on hover
                  x: -10, // Moves left on hover
                  scale: 1.05, // Slightly scales up
                  rotate: 2, // Adds a slight rotation
                  boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)", // Adds shadow
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div>
                  <Image src={service.image} width={480} height={380} alt="" className="w-full rounded-md" />
                </div>
                <div className="flex flex-col items-start justify-end w-96 gap-2 p-12 text-xl">
                  <h1 className="text-2xl font-semibold">{service.name}</h1>
                  <p className="py-4 text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
              ))
            }
          </div>
  )
}

export default page