import React from "react";
import {ImUnlocked} from 'react-icons/im'
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import { useRouter } from "next/router";
import en from 'locales/en'
import id from 'locales/id'

const Hero = () => {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;

    return(
        <div className="items-center justify-start h-screen">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black">
                <div className="p-5 text-white z-[2] mt-[8rem] md:mt-[10rem]] md:ml-3">
                    <div className="user flex flex-wrap px-3 mb-5 ">
                        <div className="picture w-3/5">
                            <img src="/Batch/test-1.jpg" alt="..." className="shadow rounded-full md:w-1/3 h-auto align-middle bg-gradient-to-r from-rose-500 via-fuchsia-500 to-cyan-400 p-1" />
                        </div>
                    </div>
                    <h2 className="lg:text-4xl md:text-3xl sm:text-xl font-bold flex ">{t.halo}
                        <div className="ml-2 bg-clip-text text-transparent bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400">
                            <Typewriter
                                options={{
                                    strings: ['Professional Trader', 'Trader Analyst'],
                                    autoStart: true,
                                    loop: true
                                }} />
                        </div>
                    </h2>
                    <p className="py-5 lg:text-xl md:text-xl leading-relaxed" data-aos="fade-right" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000"> {t.build}</p>
                    <a href="/" className="relative cursor-pointer mt-7 duration-300 hover:-translate-y-1 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                    data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000"
                    >
                        <span className="flex w-[15rem] h-[2.5rem] relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-black rounded-full group-hover:bg-opacity-0">
                            <ImUnlocked className="mr-3" /> {t.download}
                        </span>
                    </a>
                </div>
                {/* <div className="relative h-[14.5rem] w-32">
                    <div className="absolute h-0.5 w-[50rem] bottom-0 left-0 mb-5 bg-text-clip bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400">
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Hero;