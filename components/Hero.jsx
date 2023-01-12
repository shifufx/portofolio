import React from "react";
import {ImUnlocked} from 'react-icons/im'


const Hero = () => {
    return(
        <div className="flex items-center justify-start h-screen bg-fixed bg-center bg-cover custom-img">
           <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]">
                <div className="p-5 text-white z-[2] mt-[10rem] ml-[6rem]">
                    <h2 className="text-5xl font-bold"> Welcome </h2>
                    <p className="py-5 text-xl"> Keep Moving Forward</p>
                    
                    <button class="relative mt-6 duration-300 hover:-translate-y-1 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span class="flex w-[15rem] h-[2.5rem] relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                           <ImUnlocked className="mr-3"/> UNLOCK ALL E-BOOK
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;