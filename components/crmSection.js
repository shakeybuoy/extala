import React from 'react'
import { motion } from "framer-motion";
function CrmSection() {
    return (
        <motion.section initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { opacity: 1, x: 0, transition: { delay: 1, duration: 1 } },
                hidden: { opacity: 0, x: 200 }
            }} className="px-5  h-[80vh] py-10 w-screen  flex flex-col justify-center">
            <div className="text-xl text-[#016df8] font-bold uppercase">Improving CRM</div>
            <div className="text-4xl font-bold capitalize">Why Microsoft Dynamics 365?</div>
            <div className="text-xl mt-8 font-medium capitalize">
                <ul>
                    <li>
                        → Improved operational efficiency
                    </li>
                    <li>
                        → Enhanced customization
                    </li>
                    <li>
                        → Dynamics 365/CRM is built for Outlook
                    </li>
                    <li>
                        → Seamless Excel integration
                    </li>
                    <li>
                        → Seamless application and data source integration
                    </li>
                    <li>
                        → Powerful reporting with Power BI
                    </li>
                    <li>
                        → Scalable database architecture
                    </li>
                </ul>

            </div>
        </motion.section>
    )
}

export default CrmSection