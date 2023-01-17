import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import {Autoplay} from 'swiper'
import {TiStarFullOutline} from "react-icons/ti"

const Testimonials = () => {
  return (

    <section className="py-10 bg-black sm:py-16 lg:py-14">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h1 className='text-lg text-white mb-5 tracking-[.50rem]'>TESTIMONIALS</h1>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400" >We love our clients from all over the world</h2>
        </div>

{/* 
        <div className="grid grid-flow-row max-w-xl sm:grid-cols-1 md:grid-cols-2 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6"> */}
        
        <div className="grid-flow-row flex sm:grid-cols-1 md:grid-cols-2 py-10 mt-5">
        <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            loop = {true}
            autoplay={{
                delay: 2000
            }}
            >
            <SwiperSlide>{ post() }</SwiperSlide>
            <SwiperSlide>{ post() }</SwiperSlide>
            <SwiperSlide>{ post() }</SwiperSlide>
            <SwiperSlide>{ post() }</SwiperSlide>
            <SwiperSlide>{ post() }</SwiperSlide>
            <SwiperSlide>{ post() }</SwiperSlide>
            </Swiper>
        </div>
    </div>
</section>

  )
}

function post () {
    return(
        <div className="overflow-hidden bg-white rounded-md shadow">
                <div className="px-8 py-12">
                    <div className="relative w-24 h-24 mx-auto">
                        <img className="relative object-cover w-24 h-24 mx-auto rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg" alt="..." />
                        <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                            <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <blockquote className="mt-7">
                        <p className="text-lg text-black">“Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat”</p>
                    </blockquote>
                    <p className="text-base font-semibold tex-tblack mt-9">Jenny Wilson</p>
                    <p className="mt-1 text-base text-gray-600">Beginner Trader</p>
                    <p className='flex pt-3 '>
                    <TiStarFullOutline className='text-yellow-400'/>                    
                    <TiStarFullOutline className='text-yellow-400'/>                    
                    <TiStarFullOutline className='text-yellow-400'/>
                    <TiStarFullOutline className='text-yellow-400'/>
                    <TiStarFullOutline className='text-yellow-400'/>
                </p>
                </div>
            </div>
    )
}
export default Testimonials;
