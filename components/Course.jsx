import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react'
import en from 'locales/en'
import id from 'locales/id'

const Course = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const [active, setActive] = React.useState(false);

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;

    const animations = [
        `fade-up`,
        `fade-left`,
        `fade-right`,
      ];

  return (
    // <div>TestCourse</div>
<div className="bg-black">
    <div className="container px-6 py-8 mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-50 capitalize lg:text-4xl dark:text-white" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">We offering a Course ?  <span className='text-cyan-300'>yes we are!</span></h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-gray-50 xl:mt-6 dark:text-gray-300" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas magni libero consequuntur voluptatum velit amet id repudiandae ea, deleniti laborum in neque eveniet.
        </p>

        {/* start feature section */}
        <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3 xl:mt-12" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            {/* start here basic section */}
            <button className={"flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700" + 
            (openTab === 1
                ? "flex items-center justify-between px-8 py-4 border border-blue-600 cursor-pointer rounded-xl"
                : "flex items-center justify-between px-8 py-4 border border-gray-500 cursor-pointer rounded-xl")
            }
            onClick = {e => {
                e.preventDefault();
                setOpenTab(1)
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
            >
                <div className="flex flex-col items-center space-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <h2 className="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">Basic</h2>
                </div>

                <h2 className="text-2xl font-semibold text-gray-500 sm:text-3xl dark:text-gray-300">Free</h2>
            </button>
            {/* end basic section here */}

            {/* start pro section */}
            {/* <button className={"flex items-center justify-between px-8 py-4 border dark:border-gray-700 cursor-pointer rounded-xl" +
            setOpenTab === 2 
            ? "flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl "
            : "flex items-center justify-between px-8 py-4 border border-blue-500 cursor-pointer rounded-xl"
            }
            onClick = { e =>{
                e.preventDefault();
                setOpenTab(2)
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"
            >
                <div className="flex flex-col items-center space-y-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 dark:text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>

                    <h2 className="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">Pro</h2>
                </div>

                <div className="flex flex-col items-center space-y-1">
                    <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full dark:text-blue-400 sm:px-4 sm:py-1 dark:bg-gray-700 ">
                        Save 30%
                    </div>

                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-500 sm:text-3xl">$99 <span className="text-base font-medium">/Yearly</span></h2>
                </div>
            </button> */}
            {/* end pro section */}
            {/* start here basic section */}
            <button className={"flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700" + 
            (openTab === 2
                ? "flex items-center justify-between px-8 py-4 border border-blue-600 cursor-pointer rounded-xl"
                : "flex items-center justify-between px-8 py-4 border border-gray-500 cursor-pointer rounded-xl")
            }
            onClick = {e => {
                e.preventDefault();
                setOpenTab(2)
            }}
            data-toggle="tab"
            href="#link2"
            role="tablist"  
            >
                <div className="flex flex-col items-center space-y-1">
                    <img className='w-5 h-5 sm:h-7 sm:w-7' src="/gif/check.gif" alt="..." />
                    
                    <h2 className="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">Pro</h2>
                </div>

                <h2 className="text-2xl font-semibold text-gray-500 sm:text-3xl dark:text-gray-300">Free</h2>
            </button>
            {/* end basic section here */}

            {/* start here basic section */}
            <a href='/course' className="flex items-center justify-between px-8 py-4 border cursor-pointer rounded-xl dark:border-gray-700 hover:border-blue-600">
                <div className="flex flex-col items-center space-y-1">
                    <h2 className="text-lg font-medium text-gray-700 sm:text-xl dark:text-gray-200">See All Ebook</h2>
                </div>
                <img className='w-7 h-7' src="/gif/outline.gif" alt="" />
            </a>
            {/* end basic section here */}
        </div>
        {/* end feature section  */}

        {/* start section option */}
            {/* start edit here */}
            <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                {basic()}
                
            </div>
        
            <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                {profesional()}
            </div>
            {/* {basic()} */}
            {/* start edit here */}
    </div>
    </div>
  )
}

export default Course

function profesional(){

    return(
        <>
        <div className="p-8 mt-8 space-y-8 bg-gray-800 rounded-xl select-none">
        <div className='p-1 mt-1 space-y-8'>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                <p className="textlg sm:text-xl">Unlimited Download Exclusive Ebook</p>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>

            <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                <p className="textlg sm:text-xl">Free Signal all Pair</p>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>

            <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                <p className="textlg sm:text-xl">Private Coaching</p>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>

            <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                <p className="textlg sm:text-xl">Lifetime Education</p>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>
            
            
        </div>
        
        </div>
        <div className="flex justify-center py-10 sm:mt-9">
            <button className="px-16 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Join with us!
            </button>
        </div>
        </>
    )
}

function basic(){
    return(
<>
    <div className="p-8 mt-8 space-y-8 bg-gray-800 rounded-xl">
        <div className='p-1 mt-1 space-y-8'>
            <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                <p className="textlg sm:text-xl"> Free Exclusive ebook 1x</p>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
            </div>

            <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                <p className="textlg sm:text-xl">Free Signal all pair</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                </svg>
            </div>

            <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                <p className="textlg sm:text-xl">Private Coaching</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                </svg>
            </div>

            <div className="flex items-center justify-between text-gray-800 dark:text-gray-200">
                <p className="textlg sm:text-xl">Lifetime Education</p>

                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400 sm:h-7 sm:w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                </svg>
            </div> 
        </div>
    </div>
    <div className="flex justify-center py-10 sm:mt-9">
        <button className="px-16 py-2 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Choose Plan
        </button>
    </div>
</>
    )
}