'use client'

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Map from "@/components/Map";
import toast from "react-hot-toast";



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Contact() {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    email: "",
    message: "",
  });

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const [agreed, setAgreed] = useState(false);

  // Get scroll position from useScroll hook
  const { scrollYProgress } = useScroll();

  // Zoom out effect for background (start at 1 and zoom out to 0.9 as you scroll)
  const backgroundScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // Zoom out effect for title and text (start at 1 and zoom out to 0.95 as you scroll)
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, 30]);


  const handleContactUs = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://jefta-jose-interior-next-node-git-ccfc71-jeff-ndegwas-projects.vercel.app/api/multipleEmails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully!");
        // Reset form after success
        setFormData({ firstname: "", lastname: "", company: "", email: "", message: "" });
        setAgreed(false);
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message.");
    }
  };


  return (
    <div className="">
      <motion.div
        className="text-white py-64 text-center bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover"
        style={{ scale: backgroundScale }}
      >
        <div className="bg-primary flex flex-col items-center px-8 py-4 sm:px-32 mx-auto container rounded-sm">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ opacity: textOpacity, y: textY, scale: textScale }}
          >
            Nairobi, Kenya
          </motion.h2>

          <div className="flex flex-wrap gap-10 mt-8 w-full justify-around">
            {/* Email Section */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-semibold text-white uppercase">Email</h3>
              <p className="mt-2 text-lg ">Email@email.com</p>
            </div>

            {/* Phone Section */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-semibold text-white uppercase">Phone</h3>
              <p className="mt-2 text-lg ">Mobile: +254797000000</p>
              <p className="mt-2 text-lg ">Telephone: +254797000000</p>
            </div>

            {/* Location Section */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-semibold text-white uppercase">Location</h3>
              <p className="mt-2 text-lg ">Nyeri</p>
              <p className="mt-2 text-lg ">Kajiado</p>
              <p className="mt-2 text-lg ">Kenya</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto max-w-2xl text-center mt-5">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">Please feel free to ask anything</p>
      </div>

      <form onSubmit={handleContactUs} className="mx-auto mt-8 max-w-xl sm:mt-10">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="mt-2.5">
          <Input type="text" id="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} />
        </div>

        <div className="mt-2.5">
          <Input type="text" id="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />
        </div>

        <div className="sm:col-span-2">
          <div className="mt-2.5">
            <Input type="text" id="company" placeholder="Company" value={formData.company} onChange={handleChange} />
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="mt-2.5">
            <Input type="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="mt-2.5">
            <Textarea id="message" placeholder="Type Your Message Here..." value={formData.message} onChange={handleChange} />
          </div>
        </div>

        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={`flex w-8 flex-none cursor-pointer rounded-full p-px transition-colors duration-200 ${
                agreed ? "bg-primary" : "bg-gray-200"
              }`}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={`h-4 w-4 transform rounded-full bg-white shadow-sm transition duration-200 ${
                  agreed ? "translate-x-3.5" : "translate-x-0"
                }`}
              />
            </Switch>
          </div>
          <Switch.Label className="text-sm leading-6 text-gray-600">
            By selecting this, you agree to our{" "}
            <a href="#" className="font-semibold text-primary">
              privacy&nbsp;policy
            </a>
            .
          </Switch.Label>
        </Switch.Group>

        <div className="mt-2 mb-20">
          <Button type="submit" className="flex w-full items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800">
            Let's Talk <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </form>
          <Map/>
    </div>
  );
}
