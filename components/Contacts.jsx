import Link from "next/link";
import React from "react";

const Contacts = () => {
    return(
        <div className="flex items-center justify-start h-screen bg-fixed bg-center bg-cover custom-img">
           <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]">
                <div className="p-1 text-white align-middle text-center mt-[10rem]">
                    <h2 className="text-5xl font-bold py-1 bg-clip-text text-transparent bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400" > Let's Talk About The Business.</h2>
                    <p className="py-5 text-xl text-gray-400"> Feel free to ask me any question or let's do to talk about our future collaboration</p>
                    
                    <div class="py-10 bg-white sm:py-16 lg:py-20 mt-[6rem]">
                    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-8 xl:gap-x-20">
                            <div class="flex items-start">
                                <svg class="flex-shrink-0 w-10 h-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div class="ml-6">
                                    <p class="text-base font-medium text-black/50 mb-6">Call us</p>
                                    <p class="text-xl font-medium text-gray-900">(+62) 87873052028</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <svg class="flex-shrink-0 w-10 h-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div class="ml-6">
                                    <p class="text-base font-medium text-black/50 mb-5">Email me</p>
                                    <a className="text-gray-900 font-medium text-xl" href="mailto:ryan@shifufx.education">ryan@shifufx.education</a>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <svg class="flex-shrink-0 w-10 h-10 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <div class="ml-6">
                                    <p class="text-base font-medium text-black/50">Location</p>
                                    <p class="mt-4 text-xl font-medium leading-relaxed text-gray-900">Jl. ababil No.15, sukajadi, pekanbaru, Indonesia</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;