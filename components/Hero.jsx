import React from "react";
import {ImUnlocked} from 'react-icons/im'
import Image from "next/image";

const Hero = () => {
    return(
        <div className="flex items-center justify-start h-screen bg-fixed bg-center bg-cover custom-img">
           <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]">
                <div className="p-5 text-white z-[2] mt-[8rem] ml-[6rem]">
                {/* <div className="flex flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12 px-4">
                    <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full max-w-full h-auto border-none" />
                </div>
                </div> */}
                <div className="user flex flex-wrap px-3 mb-6">
                    <div className="w-1/2 sm:w-2/6">
                        <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..."  className="shadow rounded-full w-1/2 h-auto align-middle border-8"/>
                    </div>
                </div>
                    <h2 className="text-5xl font-bold"> Build your mindset. Right here. </h2>
                    <p className="py-5 text-xl"> Keep Moving Forward</p>
                    <button className="relative mt-6 duration-300 hover:-translate-y-1 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="flex w-[15rem] h-[2.5rem] relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                           <ImUnlocked className="mr-3"/> UNLOCK THE COURSES
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;