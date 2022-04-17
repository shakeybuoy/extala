import React from 'react'
import { motion } from "framer-motion";

function OurServices() {
    return (
        <motion.section initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } },
                hidden: { opacity: 0, x: -200 }
            }} className="px-5  h-[80vh] py-10 w-screen  flex flex-col justify-center">
            <div className="text-xl text-[#016df8] font-bold uppercase">our services</div>
            <div className="text-4xl font-bold capitalize">What we do ?</div>
            <div className="text-xl mt-8 font-medium capitalize">
                <ul className="list-disc px-4 text-justify">
                    <li>Reduce time & cost building business applications</li>
                    <li>Extend your system of record to simplify processes and remove silos</li>
                    <li>Reduce errors by automating manual processes</li>
                    <li>Consolidate siloed LOB application and improve business processes</li>
                </ul>
            </div>
        </motion.section>
    )
}

export default OurServices