import React from 'react'

function ContactUs() {
    return (
        <section className=" bg-[#003886] text-gray-50 py-5 w-screen flex flex-col justify-center">
            <div className="text-3xl text-center font-bold uppercase mb-10">Contact Us</div>
            <div className="flex px-10 bg-[#003886] justify-center ">
                <img src="../images/illustrationTwo.svg" />
            </div>

            <div className="text-xl flex justify-center items-center flex-col  py-10 text-gray-100">
                <h1 className="font-bold w-5/6">Corporate Headquarters</h1>
                <h2 className="text-justify pt-3 w-5/6">302, Varsha Avenue,  104, Anand Park,  Aundh Pune-411 007</h2>
                <h2 className="text-justify pt-1 w-5/6"><span className="font-bold pr-2">Telephone : </span>020 25881123/ 24</h2>
                <h2 className="text-justify pt-1 w-5/6"><span className="font-bold pr-2">Email: </span><a className="decoration-[1px] underline underline-offset-4" href="mailto:Sales@extala.com">Sales@extala.com</a></h2>


            </div>
        </section>
    )
}

export default ContactUs