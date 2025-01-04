'use client'

import { tagVariants, titleVariants } from "@/utils/animation"
import Badge from "./Badge"
import { motion } from "framer-motion"

const CompanySection = () => {
    return (
        <div className=" flex flex-col">
        <div className=' self-center pt-3 pb-4'> 
        <motion.h1 
        initial="offscreen"
        whileInView={"onscreen"}
        variants={titleVariants}
        className='text-4xl font-bold tracking-wider text-center uppercase'>Current Statistics</motion.h1>
        </div>
        <div className=" bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover py-24 sm:py-32">
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                    {/* Badge 1 */}
                    <motion.div 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-white leading-7">
                            Transaction every 24 hours
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            <Badge 
                            endCountNum={44}
                            endCountText=' million'
                            />
                        </dd>
                    </motion.div>

                    {/* Badge 2 */}
                    <motion.div 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-white leading-7">
                            Assets Under Running
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            <Badge 
                            endCountNum={119}
                            endCountText=' trillion'
                            />
                        </dd>
                    </motion.div>

                    {/* Badge 3 */}
                    <motion.div 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-white leading-7">
                            New Users Annually
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            <Badge 
                            endCountNum={45000}
                            endCountText=' +'
                            />
                        </dd>
                    </motion.div>

                    {/* Badge 4 */}
                    <motion.div 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-white leading-7">
                            New Users Annually
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            <Badge 
                            endCountNum={45000}
                            endCountText=' +'
                            />
                        </dd>
                    </motion.div>
                </dl>
            </div>
        </div>
        </div>
    )
}

export default CompanySection