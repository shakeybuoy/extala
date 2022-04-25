import React from 'react'
import { motion } from "framer-motion";

function FillerOne() {
    return (
        <section className=" bg-[#016BFB] text-gray-50 w-full  flex flex-col justify-center">
            <motion.div initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 1 } },
                    hidden: { opacity: 0, x: 200 }
                }} >
                <div className="py-4 my-2 text-center self-center w-screen flex flex-col items-center">
                    <svg enableBackground="new 0 0 512 512" id="icon_141650101816587" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" data-filename="bubble.svg" width="95" height="95"><path d="M16,452.7c-2.6,0-5.2-1-7.2-2.9c-2.9-2.7-4-6.8-2.9-10.6l28.5-100.5C11.9,310.4,0,278.3,0,245.7  c0-50.5,27.1-97.6,76.3-132.9c48.1-34.5,112-53.5,179.7-53.5c67.7,0,131.6,19,179.7,53.5C484.9,148,512,195.2,512,245.7  c0,50.5-27.1,97.6-76.3,132.9C387.6,413,323.7,432,256,432c-41.5,0-82.6-7.4-119.3-21.4L19.5,452C18.4,452.5,17.2,452.7,16,452.7z   M256,80.4c-129.5,0-234.9,74.1-234.9,165.2c0,29.3,11.4,58.3,33,83.9c2.3,2.7,3,6.3,2.1,9.7l-24.4,86.1l101.7-36  c2.4-0.9,5-0.8,7.4,0.1c35.1,14,75,21.4,115.2,21.4c129.5,0,234.9-74.1,234.9-165.3C490.9,154.6,385.5,80.4,256,80.4z" fill="#FFFFFF"></path></svg>
                    <div className="text-xl py-1 font-bold ">30000+</div>
                    <div className="text-md font-bold opacity-70 capitalize">Support Hours</div>
                </div>
                <div className="py-4 my-2 text-center self-center w-screen flex flex-col items-center">
                    <svg enableBackground="new 0 0 512 512" id="icon_11650101816604" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" dataFilename="star.svg" width="95" height="95"><path d="M407.7,500c-1.7,0-3.4-0.4-4.9-1.2L256,421.6l-146.8,77.2c-3.6,1.9-7.9,1.6-11.1-0.8  c-3.2-2.4-4.9-6.4-4.2-10.3l28-163.5L3.2,208.4c-2.9-2.8-3.9-7-2.7-10.8c1.2-3.8,4.5-6.6,8.5-7.2l164.1-23.8l73.4-148.7  c1.8-3.6,5.4-5.9,9.5-5.9c4,0,7.7,2.3,9.5,5.9l73.4,148.7L503,190.5c4,0.6,7.3,3.4,8.5,7.2c1.2,3.8,0.2,8-2.7,10.8L390.1,324.2  l28,163.5c0.7,4-0.9,8-4.2,10.3C412.1,499.3,409.9,500,407.7,500z M256,399.1c1.7,0,3.4,0.4,4.9,1.2l132.8,69.8l-25.4-147.9  c-0.6-3.4,0.5-6.9,3-9.3l107.4-104.7l-148.5-21.6c-3.4-0.5-6.4-2.7-7.9-5.8L256,46.4l-66.4,134.5c-1.5,3.1-4.5,5.3-7.9,5.8  L33.2,208.3L140.6,313c2.5,2.4,3.6,5.9,3,9.3l-25.4,147.9l132.8-69.8C252.6,399.5,254.3,399.1,256,399.1z" fill="#FFFFFF"></path></svg>
                    <div className="text-xl py-1 font-bold ">10+</div>
                    <div className="text-md font-bold opacity-70 capitalize">Years in business</div>
                </div>

                <div className="py-4 my-2 text-center self-center w-screen flex flex-col items-center">
                    <svg enableBackground="new 0 0 512 512" id="icon_101650101816591" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" dataFilename="add-user.svg" width="95" height="95"><g><path d="M185.9,272.4c-57.4,0-104.1-46.7-104.1-104.1S128.5,64.2,185.9,64.2S290,110.9,290,168.3   S243.3,272.4,185.9,272.4z M185.9,85.3c-45.8,0-83,37.2-83,83s37.2,83,83,83s83-37.2,83-83S231.7,85.3,185.9,85.3z" fill="#FFFFFF"></path><path d="M361.3,447.8c-5.8,0-10.5-4.7-10.5-10.5c0-90.9-73.9-164.8-164.8-164.8S21.1,346.3,21.1,437.2   c0,5.8-4.7,10.5-10.5,10.5S0,443,0,437.2c0-102.5,83.4-185.9,185.9-185.9s185.9,83.4,185.9,185.9   C371.8,443,367.1,447.8,361.3,447.8z" fill="#FFFFFF"></path><path d="M501.5,239.7H337.8c-5.8,0-10.5-4.7-10.5-10.5s4.7-10.5,10.5-10.5h163.7c5.8,0,10.5,4.7,10.5,10.5   S507.3,239.7,501.5,239.7z" fill="#FFFFFF"></path><path d="M419.6,321.5c-5.8,0-10.5-4.7-10.5-10.5V147.3c0-5.8,4.7-10.5,10.5-10.5c5.8,0,10.5,4.7,10.5,10.5V311   C430.2,316.8,425.4,321.5,419.6,321.5z" fill="#FFFFFF"></path></g></svg>
                    <div className="text-xl py-1 font-bold ">40000+</div>
                    <div className="text-md font-bold opacity-70 capitalize">Happy clients</div>
                </div>

                <div className="py-4 my-2 text-center self-center w-screen flex flex-col items-center">
                    <svg enableBackground="new 0 0 512 512" id="icon_31650101816593" version="1.1" viewBox="0 0 512 512" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" dataFilename="code.svg" width="95" height="95"><g><g><path d="M361.9,401.4c-2.8,0-5.5-1.1-7.6-3.2c-4-4.2-3.9-10.9,0.3-14.9l139.6-134.9c4.2-4,10.9-3.9,14.9,0.3    c4,4.2,3.9,10.9-0.3,14.9L369.2,398.5C367.1,400.4,364.5,401.4,361.9,401.4z" fill="#FFFFFF"></path><path d="M501.5,266.5c-2.6,0-5.3-1-7.3-3L354.5,128.7c-4.2-4-4.3-10.7-0.3-14.9c4-4.2,10.7-4.3,14.9-0.3    l139.6,134.9c4.2,4,4.3,10.7,0.3,14.9C507,265.5,504.2,266.5,501.5,266.5z" fill="#FFFFFF"></path></g><g><path d="M150.1,401.4c-2.6,0-5.3-1-7.3-3L3.2,263.6c-4.2-4-4.3-10.7-0.3-14.9c4-4.2,10.7-4.3,14.9-0.3l139.6,134.9    c4.2,4,4.3,10.7,0.3,14.9C155.6,400.4,152.9,401.4,150.1,401.4z" fill="#FFFFFF"></path><path d="M10.5,266.5c-2.8,0-5.5-1.1-7.6-3.2c-4-4.2-3.9-10.9,0.3-14.9l139.6-134.9c4.2-4,10.9-3.9,14.9,0.3    c4,4.2,3.9,10.9-0.3,14.9L17.9,263.6C15.8,265.6,13.2,266.5,10.5,266.5z" fill="#FFFFFF"></path></g><path d="M205.8,446.1c-0.9,0-1.9-0.1-2.8-0.4c-5.6-1.6-8.9-7.4-7.3-13L296,73.6c1.6-5.6,7.4-8.9,13-7.3   c5.6,1.6,8.9,7.4,7.3,13L216,438.4C214.7,443.1,210.4,446.1,205.8,446.1z" fill="#FFFFFF"></path></g></svg>
                    <div className="text-xl py-1 font-bold ">70000+</div>
                    <div className="text-md font-bold opacity-70 capitalize">development hours</div>
                </div>
            </motion.div>
        </section>)
}

export default FillerOne