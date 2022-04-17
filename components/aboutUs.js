import React from 'react'
import { motion } from "framer-motion";

function AboutUs() {
    return (
        <motion.section initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } },
                hidden: { opacity: 0, x: 200 }
            }} className="px-5  h-[80vh] py-10 w-screen  flex flex-col justify-center">
            <div className="text-xl text-[#016df8] font-bold uppercase">About Us</div>
            <div className="text-4xl font-bold capitalize">Who We Are ?</div>
            <div className="text-xl mt-8 font-semibold italic capitalize">Extala solutions  is a cloud solution provider. We help organisations achieve more from technology through Microsoft Power Platform and Microsoft Dynamics 365.
            </div>
            <div className=" mt-4 capitalize">
                By collecting existing and potential customer data, CRM tools can access customers' interaction histories and sales data. This enables CRM systems to identify the required services and products to improve sales processes. Overall, the software helps businesses understand their customers better.
            </div>
        </motion.section>
    )
}

export default AboutUs