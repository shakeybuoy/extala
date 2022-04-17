import React from 'react'
import { motion } from "framer-motion";

function HireUs() {
    return (
        <motion.section initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } },
                hidden: { opacity: 0, x: -200 }
            }} className="px-5  h-[100vh] py-10 w-screen  flex flex-col justify-center">
            <div className="text-xl text-[#016df8] font-bold uppercase">why us</div>
            <div className="text-4xl font-bold capitalize">Why you should hire us ?</div>
            <div className="text-xl mt-8 font-medium capitalize">
                <ul className="list-disc px-4 text-justify">
                    <li className="mt-2">Extala understands the capabilities and functional capacity of Microsoft Power Platform and Microsoft Dynamics 365 to its full extent.</li>
                    <li className="mt-2">An experienced, committed and well equipped team which understands the platform and its applications well to deliver the best results.</li>
                    <li className="mt-2">Training employees to give their best, Extala can also assists in training your employees as well. In order to provide a seamless transition of using the platform.</li>
                </ul>
            </div>
        </motion.section>

    )
}

export default HireUs