import { exportPathMap } from 'next.config'
import React from 'react'
import Link from 'next/link';

const Ebook = () => {
    // animation
    const animations = [
        `fade-up`,
        `fade-left`,
        `fade-right`,
      ];
  return (

    <section className="bg-white dark:bg-black w-full">
        <div className="container px-6 py-4 mx-auto" >
            <h1 className="md:text-2xl sm:text-2xl font-semibold md:mt-20 sm:mt-10 text-gray-800 capitalize lg:text-3xl dark:text-white" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">Beginner To Intermediate Course</h1>
            <div className="relative py-2">
                <div className="h-0.5 xl:w-[25rem] sm:w-[10rem] bottom-0 left-0 bg-text-clip bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                {begginer()}
                {begginer()}
                {begginer()}
                {begginer()}
                {begginer()}
            </div>
        </div>

        {/* intermediate to adance */}
        <div className="container px-6 py-4 mx-auto">
            <h1 className="md:text-2xl sm:text-2xl font-semibold md:mt-20 sm:mt-10 text-gray-800 capitalize lg:text-3xl dark:text-white" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">Intermediate to Advanced Course</h1>
            <div className="relative py-2" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <div className="h-0.5 xl:w-[25rem] sm:w-[10rem] bottom-0 left-0 bg-text-clip bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 lg:mb-16 md:mb-13  ">
                {intermediate()}
                {intermediate()}
                {intermediate()}
                {intermediate()}
            </div>
        </div>
</section>
  )
}

function begginer(){
    return (
        <div className="lg:flex" data-aos="fade-left" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="..."/>
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <h1 className="text-base font-semibold text-gray-800 hover:underline dark:text-white ">
                        How to use sticky note for problem solving
                    </h1>
                    <span className='text-sm text-gray-500 lg:py-2 md-py-1 mb-1'>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </span>
                    {/* <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span> */}
                    <Link type='' href="/" className='md:py-2 sm:py-2 text-white text-center text-lg rounded inset-1 bg-pink-400 hover:bg-pink-500 hover:-translate-y-1 duration-300'>Download</Link>
                </div>
        </div>
    )
}

function intermediate(){
    return (
        <div className="lg:flex" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="..."/>
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <h1 className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        How to use sticky note for problem solving
                    </h1>  
                    <span className='text-sm text-gray-500 lg:py-2 md-py-1 mb-1'>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </span>
                    {/* <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span> */}
                    <Link type='' href="/" className='md:py-2 sm:py-2 text-white text-center text-lg rounded inset-1 bg-pink-400 hover:bg-pink-500 hover:-translate-y-1 duration-300'>Download</Link>
            </div>
        </div>
    )
}

export default Ebook