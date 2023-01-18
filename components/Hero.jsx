import React from "react";
import {ImUnlocked} from 'react-icons/im'
import Image from "next/image";
import Typewriter from 'typewriter-effect';

const Hero = () => {

    return(
        <div className="flex items-center justify-start h-screen bg-fixed bg-center bg-cover custom-img">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black z-[2]">
                <div className="p-5 text-white z-[2] mt-[8rem] ml-[6rem]">
                    <div className="user flex flex-wrap px-3 mb-6 ">
                        <div className="w-1/2 sm:w-2/6">
                            <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full w-1/2 h-auto align-middle bg-gradient-to-r from-rose-500 via-fuchsia-500 to-cyan-400 p-1" />
                        </div>
                    </div>
                    <h2 className="text-5xl font-bold flex ">Hello i'm Ryan as a
                        <div className="ml-2 bg-clip-text text-transparent bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400">
                            <Typewriter
                                options={{
                                    strings: ['Professional Trader', 'Trader Analyst'],
                                    autoStart: true,
                                    loop: true
                                }} />
                        </div>
                    </h2>
                    <p className="py-5 text-xl"> Build your mindset. Right here.</p>
                    <a href="/" className="relative cursor-pointer mt-7 duration-300 hover:-translate-y-1 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="flex w-[15rem] h-[2.5rem] relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                            <ImUnlocked className="mr-3" /> UNLOCK THE COURSES
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