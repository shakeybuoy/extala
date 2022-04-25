import React from 'react'
import { motion } from "framer-motion";

function OurServices() {
    return (
        <div className=" py-20">
            <motion.section initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 1 } },
                    hidden: { opacity: 0, x: -200 }
                }} className="px-5 w-screen pb-10 flex flex-col justify-center">
                <div className="text-xl text-[#016df8] font-bold uppercase">our services</div>
                <div className="text-4xl font-bold capitalize">What we do ?</div>
                <div className="text-xl mt-8 font-medium capitalize">
                    <ul className="list-disc px-4 text-justify">
                        <li>Digital Transformation using Microsoft D365</li>
                        <li>Microsoft Power Platform</li>
                        <li>E-Commerce</li>
                        <li>Website Development</li>
                        <li>Power BI and Azure AI</li>
                    </ul>
                </div>
            </motion.section>
            <motion.div initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { opacity: 1, transition: { delay: 0.2, duration: 1.4 } },
                    hidden: { opacity: 0 }
                }} className="flex justify-center w-screen">

                <img src="/images/img1.png" />

            </motion.div>
        </div>
    )
}

export default OurServices