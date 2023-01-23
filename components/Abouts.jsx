import React from "react";
import {FaBrain, FaDollarSign} from 'react-icons/fa'

const info = () => {
    const animations = [
        `fade-up`,
        `fade-left`,
        `fade-right`,
      ];
    return(
        <div className="items-center justify-start h-screen">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black">
                <div className="bg-black text-white py-10">
                    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
                        <div className="flex-col w-full lg:w-2/3 md:w-1/3 justify-center items-start p-8">
                            <h1 className="text-3xl md:text-5xl p-2 lg:py-16 md:py-10 text-white tracking-loose ">About Me</h1>
                            <p className="text-sm md:text-base text-gray-50 mb-4 ">I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                                My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
                            </p>
                            {/* <a href="#what"
                                className="mt-5 bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                                What I do?
                            </a> */}
                        </div>
                        <div className="p-8 mt-12 lg:mb-6 md:mb-6 md:mt-0 ml-0 md:ml-12 lg:w-2/3" data-aos="fade-right" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
                            <div className="h-48 flex flex-wrap content-center">
                                <div >
                                    <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="/Batch/shifu.png" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* what i do section */}
                <section className="bg-white dark:bg-black">
                    <div className="container px-6 xl:py-20 md:py-10  mx-auto bg-black" id="what">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white mb-1" data-aos="fade-right" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">What i do!</h1>
                        
                        {/* garis rainbow */}
                        <div className="relative" data-aos="fade-left" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
                            <div className="h-0.5 xl:w-[7rem] sm:w-[10rem] mt-0 bottom-0 left-0 lg:ml-1 bg-text-clip bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400">
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                            {Post()}
                            {Post2()}
                            {Post3()}
                            {Post4()}
                            {Post5()}
                            {Post6()}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

function Post() {
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 stroke-2">
                    <path  d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"  />
                </svg>
            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>
            <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
            </p>
        </div>
    )
}

function Post2() {
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaBrain className="w-8 h-8" />
            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>
            <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
            </p>
        </div>
    )
}

function Post3() {
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaBrain className="w-8 h-8" />
            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>
            <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
            </p>
        </div>
    )
}

function Post4() {
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaBrain className="w-8 h-8" />
            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>
            <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
            </p>
        </div>
    )
}

function Post5() {
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaBrain className="w-8 h-8" />
            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>
            <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
            </p>
        </div>
    )
}

function Post6() {
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaDollarSign className="w-8 h-8" />
            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">elegant Dark Mode</h1>
            <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
            </p>
        </div>
    )
}

export default info;