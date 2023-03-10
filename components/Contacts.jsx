import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import en from 'locales/en'
import id from 'locales/id'

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
        <section className="py-10 bg-black sm:py-16 lg:py-1 lg:pb-[8rem] select-none">
            
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-xl mx-auto text-center" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">
                    <h2 className="mt-6 text-3xl font-bold leading-tight text-gray-50 sm:text-4xl lg:text-5xl">{t.titleContact}</h2>
                    <p className="mt-4 text-base leading-relaxed text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
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
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="transition-all duration-200 bg-black hover:shadow-xl">
            <div className="py-10 px-9">
                <img className="h-16 w-16 lg:ml-24 md:ml-5" src='/gif/email.gif'/>
                <h3 className="mt-8 text-lg font-semibold text-gray-50">Email</h3>
                <p className="mt-4 text-base text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                <div className="email">
                    <a href="mailto:ryan@shifufx.education" className="button inline-flex text-center py-3 px-20 md:px-10 font-bold mt-10 bg-white text-black hover:text-white rounded-full capitalize hover:shadow-[inset_12rem_0_0_0] hover:shadow-teal-600 duration-[400ms,700ms] transition-[color,box-shadow]">{t.email}</a>
                </div>
           </div>
        </div>
    )
}

function telegram(){
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="transition-all duration-200 bg-black hover:shadow-xl">
            <div className="py-10 px-9">
                <img className="h-16 w-16 lg:ml-24 md:ml-6" src={'/gif/chat.gif'}/>
                <h3 className="mt-8 text-lg font-semibold text-gray-50">Telegram</h3>
                <p className="mt-4 text-base text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                <div className="telegram">
                    <a href="" className="button inline-flex text-center py-3 px-20 md:px-10 font-bold mt-10 bg-white text-black hover:text-white rounded-full capitalize hover:shadow-[inset_13rem_0_0_0] hover:shadow-teal-600 duration-[400ms,700ms] transition-[color,box-shadow]">{t.telegram}</a>
                </div>
           </div>
        </div>
    )
}

function whatsapp(){
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="transition-all duration-200 bg-black hover:shadow-xl">
            <div className="py-10 px-9">
                <img className="h-16 w-16 lg:ml-24 md:ml-6" src={'/gif/call.gif'}/>
                <h3 className="mt-8 text-lg font-semibold text-gray-50">Whatsapp</h3>
                <p className="mt-4 text-base text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
            <div className="wa">
                <a href="" className="button inline-flex text-center py-3 px-20 md:px-10 font-bold mt-10 bg-white text-black hover:text-white rounded-full capitalize hover:shadow-[inset_13rem_0_0_0] hover:shadow-teal-600 duration-[400ms,700ms] transition-[color,box-shadow]">{t.whatsapp}</a>
            </div>
           </div>
        </div>
    )
}
