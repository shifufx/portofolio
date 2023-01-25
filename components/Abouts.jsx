import React from "react";
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import {FaBrain, FaDollarSign} from 'react-icons/fa'

const info = () => {

    const animations = [
        `fade-up`,
        `fade-left`,
        `fade-right`,
      ];
    return(
        <div className="items-center justify-start h-screen">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black">
                <div className="bg-black text-white py-10">
                    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
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
                        <div className="p-8 mt-12 lg:mb-6 md:mb-6 md:mt-0 ml-0 md:ml-12 lg:w-2/3" data-aos="fade-right" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
                            <div className="h-48 flex flex-wrap content-center">
                                <div className="inline-block  md:mt-10 inset-1 w-full md:p-0 disabled">
                                    {Book()}
                                    {/* <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="/Batch/shifu.png" alt="..." /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* what i do section */}
                <section className="bg-white dark:bg-black">
                    <div className="container px-6 xl:py-20 md:py-10  mx-auto bg-black" id="what">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white mb-1" data-aos="fade-right" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">What i do!</h1>
                        
                        {/* garis rainbow */}
                        <div className="relative" data-aos="fade-left" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
                            <div className="h-0.5 xl:w-[7rem] sm:w-[10rem] mt-0 bottom-0 left-0 lg:ml-1 bg-text-clip bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400">
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

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/michi_bot/scene.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.32} />
      </>
    );
  };

function Book() {
    return (
      <>
          {/* <Books /> */}
          <div className=" w-full h-[25rem] my-15 mt-15">
          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 1], fov: 5 }}>
            <ambientLight intensity={0.7} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[50, 15, 50]} castShadow />
            <Suspense fallback={null}>
              <Model />
              <Environment preset="city" />
            </Suspense>
            <OrbitControls autoRotate  />
          </Canvas>
          </div>
      </>
    )
  }

function Post() {
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 stroke-2">
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
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                {/* <FaBrain className="w-8 h-8" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
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
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                {/* <FaBrain className="w-8 h-8" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
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
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
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

function Post5() {
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
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
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
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