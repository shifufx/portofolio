import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {TiStarFullOutline} from "react-icons/ti"
import {TiStarOutline} from "react-icons/ti"
import {RxDotFilled} from "react-icons/rx"
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import SwipeCore, {Autoplay} from 'swiper'


const Section2 = () => {

    SwipeCore.use([Autoplay])

  return (

    <section className='container mx-auto md:px20 py-1'>
        <h1 className='font-bold text-4xl py-12 text-center'> Course </h1>

        {/* grid */}
        {/* <div className="grid md:grid-cols2 lg:grid-cols-3 gap-14"> */}
        {/* <div className="grid grid-flow-row gap-10 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            { Post() }
            { Post() }
            { Post() }
        </div> */}

        <div className="grid-flow-row flex sm:grid-cols-1 md:grid-cols-2">
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop = {true}
            autoplay={{
                delay: 3000
            }}
            >
            <SwiperSlide>{ Post() }</SwiperSlide>
            <SwiperSlide>{ Post() }</SwiperSlide>
            <SwiperSlide>{ Post() }</SwiperSlide>
            <SwiperSlide>{ Post() }</SwiperSlide>
            <SwiperSlide>{ Post() }</SwiperSlide>
            <SwiperSlide>{ Post() }</SwiperSlide>
            
            </Swiper>
        </div>
        <div className="button py-12 text-center mx-auto ">
            <Link href={"/"}>
                <button className='w-1/5 duration-300 hover:-translate-y-1 text-2xl text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2'>View All Course</button>
            </Link>
        </div>
    </section>
    )
}

function Post(){
    return (
        <div className="item mt-5 my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
            <div className="images">
                {/* <Link href={"/"}><a> src={""} width={600} height={600} /></a> */}
                <Link href={"/"}>
                    <Image src={"/Batch/post-1.jpg"} width={310} height={280} alt="..."className="rounded-t h-50 w-full object-cover"/>
                </Link>
            </div>

            <div className="info flex justify-center flex-col p-4">
                <div className="title text-lg mb-0 font-bold leading-relaxed text-white dark:text-gray-300">
                    <Link href={"/"}><h1 className='font-bold text-2xl'>Batch Panda</h1></Link>
                </div>
            </div>

            <div className="people px-4 text-white py-4">
                <h1 className='font-bold text-1xl'>Who is the trading course for?</h1>
                <p className='text-white mt-1 flex text-sm'><RxDotFilled className='text-3xl'/> 
                Increase OSCP preparedness with OffSec Academy, expert instructor-led streaming sessions
                </p>
            </div>

            <div className="benefit px-4 text-white py-4">
                <h1 className='font-bold text-1xl'>Benefits</h1>
                <p className='text-white mt-1 flex text-sm'><RxDotFilled className='text-3xl'/> 
                Increase OSCP preparedness with OffSec Academy, expert instructor-led streaming sessions
                </p>

            </div>

            <div className="description px-4 text-white text-1xl py-4 pt-0">
                <h1 className='font-bold'>Level:</h1>
                <p className='flex pt-2 '>
                    <TiStarFullOutline className='text-yellow-300'/>                    
                    <TiStarFullOutline className='text-yellow-300'/>                    
                    <TiStarFullOutline className='text-yellow-300'/>   
                    <TiStarOutline className='text-yellow-300'/>
                    <TiStarOutline className='text-yellow-300'/>                 
                </p>
            </div>
        
            <Link href={"/contact"}>
                <p className='p-4 text-white font-bold'>Download</p>
            </Link>
        </div>
        
    )
}

export default Section2