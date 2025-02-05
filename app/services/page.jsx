'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { Services } from "@/utils/servicesArray";


const Servicespage = () => {

  return (
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8 mt-4">
        {
          Services.map((service) => (
            <motion.div
              key={service.id}
              className="relative dark:bg-tertiary"
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
                <Image src={service.image} width={480} height={380} alt="" className="w-full h-auto rounded-md" />
              </div>
              <div className="flex flex-col items-start justify-end p-4 sm:p-6 lg:p-12 text-xl">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">{service.name}</h1>
                <p className="py-2 sm:py-4 text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))
        }
      </div>
  )
}

export default Servicespage