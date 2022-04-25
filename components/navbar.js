import React, { useState } from 'react'
import Link from 'next/link'
import disableScroll from 'disable-scroll';
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    if (!isOpen) {
        disableScroll.off();
    }
    else {
        disableScroll.on();
    }
    return (
        <nav className="bg-[#262b30] fixed z-20 text-[#016df8] justify-between font-semibold w-screen py-4 flex px-10 items-center ">
            <Link href="/" ><img className="w-24 " src="/images/logo.png" /></Link>
            <div className="">
                <img src="https://img.icons8.com/material-rounded/30/016df8/menu--v1.png" onClick={() => setIsOpen(!isOpen)} />
            </div>
            {isOpen && (
                <div className="w-screen bg-black text-white z-50 h-screen fixed left-0 top-0 flex flex-col justify-center items-center ">
                    <img className="fixed top-6 right-8" onClick={() => setIsOpen(!isOpen)} src="https://img.icons8.com/material-rounded/30/016df8/delete-sign.png" />
                    <div className="text-2xl font-bold py-5">About Us</div>
                    <div className="text-2xl font-bold py-5">About Us</div>
                    <div className="text-2xl font-bold py-5">About Us</div>
                    <div className="text-2xl font-bold py-5">About Us</div>
                </div>
            )}
        </nav>
    )
}

export default Navbar