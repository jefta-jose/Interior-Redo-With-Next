'use client'

import { useState } from "react";  // Import useState hook

import Link from "next/link";

//Hooks
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { Services } from "@/utils/servicesArray";

const links = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About Us' },
    { path: '/services', name: 'Services' },
    { path: '/gallery', name: 'Gallery' },
    { path: '/projects', name: 'Projects' },
    { path: '/events', name: 'Events' },
    { path: '/blogs', name: 'Blogs' },
    { path: '/contact', name: 'Contact Us' },
]



const Nav = ({ containerStyles, linkStyles, underlineStyles , onLinkClick }) => {
    const [isHovered, setIsHovered] = useState(false);  // State to track hover
    const [dropdownVisible, setDropdownVisible] = useState(false); // State to show/hide dropdown
    const path = usePathname();
  
    const handleMouseEnter = () => {
      setIsHovered(true);
      setDropdownVisible(true);  // Show dropdown on hover
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      setDropdownVisible(false);  // Hide dropdown when hover ends
    };

    const handleClickService = () => {
      setDropdownVisible(false);  // Hide dropdown when a service is clicked
    };

    return (
        <nav className={`${containerStyles}`}>
        {links.map((link, index) => {
          if (link.name === "Services") {
            return (
              <div key={index} className="relative"
                onMouseEnter={handleMouseEnter}  // Attach hover events to parent div
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.path}
                  className={`uppercase ${linkStyles}`}
                  onClick={onLinkClick}
                >
                  {link.name}
                </Link>
  
                {/* Dropdown */}
                {dropdownVisible && isHovered && (
                  <div
                    className="absolute left-0 top-4 mt-2 w-60 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-10"
                    onMouseEnter={() => setDropdownVisible(true)}  // Keep dropdown visible when mouse enters it
                    onMouseLeave={() => setDropdownVisible(false)}  // Hide dropdown when mouse leaves it
                  >
                    <ul>
                      {Services.map((service) => (
                        <li key={service.id}>
                          <Link
                            href="#"
                            className="block py-2 px-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
                            onClick={handleClickService}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          }
  
          return (
            <Link
              href={link.path}
              key={index}
              className={`uppercase ${linkStyles}`}
              onClick={onLinkClick}
            >
              {link.path === path && (
                <motion.span
                  initial={{ y: "-100%" }}
                  animate={{ y: 0 }}
                  transition={{ type: "tween" }}
                  layoutId="underline"
                  className={`${underlineStyles}`}
                />
              )}
              {link.name}
            </Link>
          );
        })}
      </nav>
    )
}

export default Nav