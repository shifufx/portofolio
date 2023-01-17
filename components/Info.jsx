import React from "react";
import {FaBrain, FaDollarSign} from 'react-icons/fa'

const info = () => {
    return(
        <div className="items-center justify-start h-screen">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black">
                <div className="bg-black text-white py-10">
                    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
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
                        <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3">
                            <div className="h-48 flex flex-wrap content-center">
                                <div >
                                    <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png" alt="..." />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* what i do section */}
                <section className="bg-white dark:bg-black">
                    <div className="container px-6 xl:py-20 md:py-10 mx-auto bg-black" id="what">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white mb-5">What i do!</h1>
                        
                        {/* garis rainbow */}
                        <div className="relative">
                            <div className="h-0.5 xl:w-[15rem] sm:w-[10rem] bottom-0 left-0 bg-text-clip bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400">
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
        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" className="w-8 h-8 stroke-2">
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
        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path fill-rule="evenodd" d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.54 15h6.42l.5 1.5H8.29l.5-1.5zm8.085-8.995a.75.75 0 10-.75-1.299 12.81 12.81 0 00-3.558 3.05L11.03 8.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 001.146-.102 11.312 11.312 0 013.612-3.321z" clip-rule="evenodd" />
                </svg>
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
        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                    <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>
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
        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                    <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                </svg>
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
        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
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
        <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
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