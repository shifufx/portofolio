import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import en from 'locales/en'
import id from 'locales/id'
import { Player } from "@lottiefiles/react-lottie-player";

const Contacts = () => {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;

    const animations = [
        `fade-up`,
        `fade-left`,
        `fade-right`,
      ];

    return(
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">
                    <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get in Touch with Me</h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
                <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2500">
                    {email()}
                    {telegram()}
                    {whatsapp()}
                </div>
            </div>
        </section>
    )
}

export default Contacts;

function email(){
    return(
        <div className="transition-all duration-200 bg-white hover:shadow-xl">
            <div className="py-10 px-9">
                <Player className="h-16 w-16" src={'/svg/email.json'} loop autoplay/>
                <h3 className="mt-8 text-lg font-semibold text-black">Email me!</h3>
                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
           </div>
        </div>
    )
}

function telegram(){
    return(
        <div className="transition-all duration-200 bg-white hover:shadow-xl">
            <div className="py-10 px-9">
                <Player className="h-16 w-16" src={'/svg/chat.json'} loop autoplay/>
                <h3 className="mt-8 text-lg font-semibold text-black">Chat me!</h3>
                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
           </div>
        </div>
    )
}

function whatsapp(){
    return(
        <div className="transition-all duration-200 bg-white hover:shadow-xl">
            <div className="py-10 px-9">
                <Player className="h-16 w-16" src={'/svg/phone.json'} loop autoplay/>
                <h3 className="mt-8 text-lg font-semibold text-black">Whatsapp me!</h3>
                <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
           </div>
        </div>
    )
}