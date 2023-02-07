import React from 'react'
import { useRouter } from 'next/router'
import { Player } from '@lottiefiles/react-lottie-player'
import en from 'locales/en'
import id from 'locales/id'
import {RxDotFilled} from 'react-icons/rx'

const TestBlog = () => {
    const router = useRouter();
    const {locale} = router;
    const t = locale === 'en' ? en : id

    const animations = [
        `fade-up`,
        `fade-left`,
        `fade-right`,
      ];
  return (
    // <div>testBlog</div>
    <section className="py-10 bg-black sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" data-aos="fade-right" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">{t.titleCourse}</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-100 lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-3">
                {/* <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button> */}
            </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">
            {/* begining section ebook */}
            {panda()}
            {mantis()}
            {monkey()}
        </div>

        <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
            {/* <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button> */}
        </div>
        
        {/* sectiion intermediate to advance */}
        <div className="flex-1 text-center lg:text-left mt-16">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl " data-aos="fade-right" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">{t.titleCourse2}</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-100 lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>
        
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">
            {flamingo()}
            {tiger()}
            {snake()}
        </div>
        {/* end section */}

        {/* section indicator */}
        <div className="flex-1 text-center lg:text-left mt-16">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" data-aos="fade-right" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">{t.titleCourse3}</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-100 lg:mx-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>
        
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">
            {MovingAverage()}
            {BolingerBand()}
        </div>
        {/* end section here */}
    </div>
</section>
  )
}

export default TestBlog

// function for beginner to intermediate
function panda(){
    return(
        <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <Player className="object-cover w-full h-full" src="/svg/ebook/panda.json" loop autoplay alt="" />
                        </a>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2020 </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> Batch Panda: Breakout Strategy Market. </a>
                    </p>
                    <p>You will learn:</p>
                    <ul className='px-1 ml-0'>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> understand how to read Breakout on market</li>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> how to perform market execution</li>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> understand how to read Breakout on market</li>
                    </ul>
                    {/* <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> */}
                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1 mb-2">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                        Download
                    </a>
                </div>
            </div>
    )
}

function mantis(){
    return(
        <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <Player className="object-cover w-full h-full" src="/svg/ebook/mantis.json" loop autoplay alt="" />
                        </a>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2020 </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> Batch Mantis: Supply & Demand. </a>
                    </p>
                    <p>You will learn:</p>
                    <ul className='px-1 ml-0'>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> understand how to read Breakout on market</li>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> how to perform market execution</li>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> understand how to read Breakout on market</li>
                    </ul>
                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1 mb-2">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                        Download
                    </a>
                </div>
            </div>
    )
}

function monkey(){
    return(
        <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <Player className="object-cover w-full h-full" src="/svg/ebook/monkey.json" loop autoplay alt="" />
                        </a>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2020 </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> Batch Monkey: Scalping Strategy </a>
                    </p>
                    <p>You will learn:</p>
                    <ul className='px-1 ml-0'>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> understand how to read Breakout on market</li>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> how to perform market execution</li>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> understand how to read Breakout on market</li>
                    </ul>
                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1 mb-2">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                        Download
                    </a>
                </div>
            </div>
    )
}

//function intermediate to advance
function tiger(){
    return(
        <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <Player className="object-cover w-full h-full" src={"/svg/ebook/tiger.json"} loop autoplay alt=""/>
                        </a>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2020 </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> Batch Tiger: Smart Shifu Concept. </a>
                    </p>
                    <p>You will learn:</p>
                    <ul className='px-1 ml-0'>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> understand how to read Breakout on market</li>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> how to perform market execution</li>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> understand how to read Breakout on market</li>
                    </ul>
                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1 mb-2">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                        Download
                    </a>
                </div>
            </div>
    )
}

function flamingo(){
    return(
        <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <Player className="object-cover w-full h-full" src="/svg/ebook/flamingo.json" loop autoplay alt="" />
                        </a>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2020 </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> Batch Flamingo: Support & Resistance Continue. </a>
                    </p>
                    <p>You will learn:</p>
                    <ul className='px-1 ml-0'>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> understand how to read Breakout on market</li>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> how to perform market execution</li>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> understand how to read Breakout on market</li>
                    </ul>
                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1 mb-2">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                        Download
                    </a>
                </div>
            </div>
    )
}

function snake(){
    return(
        <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <Player className="object-cover w-full h-full" src="/svg/ebook/snake.json" loop autoplay alt="" />
                        </a>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2020 </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> Batch Snake: Expert Support & Resistance. </a>
                    </p>
                    <p>You will learn:</p>
                    <ul className='px-1 ml-0'>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> understand how to read Breakout on market</li>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> how to perform market execution</li>
                        <li className='flex'><RxDotFilled className='mt-1 mr-1'/> understand how to read Breakout on market</li>
                    </ul>
                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1 mb-2">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                        Download
                    </a>
                </div>
            </div>
    )
}

// function handler indicator

function MovingAverage(){
    return(
        <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <Player className="object-cover w-full h-full" src="/svg/ebook/coming.json" loop autoplay alt="" />
                        </a>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2020 </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> Master Moving Average. </a>
                    </p>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1 mb-2">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                        Download
                    </a>
                </div>
            </div>
    )
}

function BolingerBand(){
    return(
        <div className="overflow-hidden bg-white rounded shadow">
                <div className="p-5">
                    <div className="relative">
                        <a href="#" title="" className="block aspect-w-4 aspect-h-3">
                            <Player className="object-cover w-full h-full" src="/svg/ebook/coming.json" loop autoplay alt="" />
                        </a>
                    </div>
                    <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> March 21, 2020 </span>
                    <p className="mt-5 text-2xl font-semibold">
                        <a href="#" title="" className="text-black"> Master Bolinger Band. </a>
                    </p>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    <a href="#" title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-1 mb-2">
                        <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                    </svg>
                        Download
                    </a>
                </div>
            </div>
    )
}