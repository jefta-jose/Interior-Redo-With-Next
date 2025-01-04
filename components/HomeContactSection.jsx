'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/utils/animation";
import { TbArrowUpRight } from "react-icons/tb";


const posts = [
    {
        id: 1,
        title: 'Commercial Interior Design ',
        href: '#',
        description:
        'It is a fantastic theme with tons of design and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: '4.7', href: '#' },
        author: {
        name: 'Natasha',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
            '/briefcase-alt-4-svgrepo-com.svg',
        },
    },
    {
        id: 2,
        title: 'Gypsum Ceilings  ',
        href: '#',
        description:
        'From all point of views one of the best theme I have ever bought. It is also very flexible, I am thinking about using it for a photograph portfolio as well in the future.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: '4.9', href: '#' },
        author: {
        name: 'Michael Chris',
        role: 'Co-Founder / CEO',
        href: '#',
        imageUrl:
            '/briefcase-alt-4-svgrepo-com.svg',
        },
    },
    {
        id: 3,
        title: 'Office Partitioning ',
        href: '#',
        description:
        'Well, i had to choose a main reason for rating your great theme. Everything in this theme is customizable, easy to use and it has a very high quality styling',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: '4.2', href: '#' },
        author: {
        name: 'Samuel',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
            '/briefcase-alt-4-svgrepo-com.svg',
        },
    },
    {
        id: 1,
        title: 'Residential Interior Design ',
        href: '#',
        description:
        'It is a fantastic theme with tons of design and layout options, and the customer service is simply outstanding. They respond immediately and solve any inconvenience, no matter how small.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: '4.7', href: '#' },
        author: {
        name: 'Natasha',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
            '/briefcase-alt-4-svgrepo-com.svg',
        },
    },
    {
        id: 2,
        title: 'Painting & Special Effects ',
        href: '#',
        description:
        'From all point of views one of the best theme I have ever bought. It is also very flexible, I am thinking about using it for a photograph portfolio as well in the future.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: '4.9', href: '#' },
        author: {
        name: 'Michael Chris',
        role: 'Co-Founder / CEO',
        href: '#',
        imageUrl:
            '/briefcase-alt-4-svgrepo-com.svg',
        },
    },
    {
        id: 3,
        title: 'Commercial Interior Design ',
        href: '#',
        description:
        'Well, i had to choose a main reason for rating your great theme. Everything in this theme is customizable, easy to use and it has a very high quality styling',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: '4.2', href: '#' },
        author: {
        name: 'Samuel',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
            '/briefcase-alt-4-svgrepo-com.svg',
        },
    },
    ];

export default function HomeContactSection() {
    return (
        <div className="pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.h2 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="text-3xl font-bold tracking-tight sm:text-4xl uppercase">Interior Design</motion.h2>
                <motion.p 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className="mt-2 text-lg leading-8 text-muted-foreground">
                    Our Services
                </motion.p>

                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="mx-auto mt-2 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-5 sm:mt-2 py-5 gap-y-16 dark:bg-tertiary">
                    {
                        posts.map((post) => (
                            <article 
                            key={post.id}
                            className="flex w-full flex-col items-start justify-between border-gray-950 sm:border-r p-2 transition"
                            >
                                <div className="flex items-center gap-x-4 text-xs">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                </div>

                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-400">
                                        <a className=" inline-flex items-center" href={post.href}>
                                            <span className=" uppercase">{post.title}</span>
                                            <TbArrowUpRight className="ml-3"/>
                                        </a>
                                    </h3>
                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
                                        {post.description}
                                    </p>
                                </div>

                            </article>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}