import { exportPathMap } from 'next.config'
import React from 'react'
import Link from 'next/link';
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Ebook = () => {
    // animation
    const animations = [
        `fade-up`,
        `fade-left`,
        `fade-right`,
      ];
  return (

    <section className="bg-white dark:bg-black w-full">
        <div className="bg-black text-white lg:py-5 sm:py-2 lg:mb-10 sm:mb-4  ">
                    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
                        <div className="flex-col w-full lg:w-2/3 md:w-1/3 justify-center items-start p-8">
                            <h1 className="text-3xl md:text-5xl p-2 lg:py-16 md:py-10 text-white tracking-loose ">About Course</h1>
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
                                <div className="inline-block lg:mt-28 inset-1 w-full md:p-0 disabled">
                                    {Book()}
                                    {/* <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="/Batch/shifu.png" alt="..." /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <div className="container px-6 py-4 mx-auto" >
            <h1 className="md:text-2xl sm:text-2xl font-semibold md:mt-20 sm:mt-10 text-gray-800 capitalize lg:text-3xl dark:text-white" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">Beginner To Intermediate Course</h1>
            <div className="relative py-2">
                <div className="h-0.5 xl:w-[25rem] sm:w-[10rem] bottom-0 left-0 bg-text-clip bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                {panda()}
                {mantis()}
                {monkey()}
            </div>
        </div>

        {/* intermediate to advance */}
        <div className="container px-6 py-4 mx-auto">
            <h1 className="md:text-2xl sm:text-2xl font-semibold md:mt-20 sm:mt-10 text-gray-800 capitalize lg:text-3xl dark:text-white" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">Intermediate to Advanced Course</h1>
            <div className="relative py-2" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <div className="h-0.5 xl:w-[25rem] sm:w-[10rem] bottom-0 left-0 bg-text-clip bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400"></div>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 lg:mb-16 md:mb-13  ">
                {tiger()}
                {flamingo()}
                {snake()}
            </div>
        </div>
        
        {/* indicator course */}
        <div className="container px-6 py-4 mx-auto">
            <h1 className="md:text-2xl sm:text-2xl font-semibold md:mt-20 sm:mt-10 text-gray-800 capitalize lg:text-3xl dark:text-white" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">How to use Indicator</h1>
            <div className="relative py-2" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <div className="h-0.5 xl:w-[25rem] sm:w-[10rem] bottom-0 left-0 bg-text-clip bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400"></div>
            </div>

            {/* delete here if there is a content */}
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 lg:mb-16 md:mb-13">
                {comingSoonMA()}
                {bolinger()}
            </div>
        </div>
</section>
  )
}

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/paladins_book/scene.gltf");
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
            <OrbitControls autoRotate enableZoom={false} />
          </Canvas>
          </div>
      </>
    )
  }

function panda(){
    return (
        <div className="lg:flex" data-aos="fade-left" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="/ebook/panda.png" alt="..."/>
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
                    <Link type='' href="/" className='md:py-2 sm:py-2 text-white text-center text-lg rounded inset-1 bg-fuchsia-400 hover:bg-fuchsia-500 hover:-translate-y-1 duration-300'>Download</Link>
                </div>
        </div>
    )
}

function mantis(){
    return (
        <div className="lg:flex" data-aos="fade-left" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="/ebook/Belalang.png" alt="..."/>
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
                    <Link type='' href="/" className='md:py-2 sm:py-2 text-white text-center text-lg rounded inset-1 bg-gray-400 hover:bg-gray-500 hover:-translate-y-1 duration-300'>Download</Link>
                </div>
        </div>
    )
}

function monkey(){
    return (
        <div className="lg:flex" data-aos="fade-left" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="/ebook/Monyet.png" alt="..."/>
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
                    <Link type='' href="/" className='md:py-2 sm:py-2 text-white text-center text-lg rounded inset-1 bg-rose-400 hover:bg-rose-500 hover:-translate-y-1 duration-300'>Download</Link>
                </div>
        </div>
    )
}

function tiger(){
    return (
        <div className="lg:flex" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="/ebook/Harimau.png" alt="..."/>
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

function flamingo(){
    return (
        <div className="lg:flex" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="/ebook/burung.png" alt="..."/>
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

function snake(){
    return (
        <div className="lg:flex" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="/ebook/ular.png" alt="..."/>
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

function comingSoonMA(){
    return (
        <div className="lg:flex" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="/ebook/comingsoon.jpg" alt="..."/>
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <h1 className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Analysis using Moving Average
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

function bolinger(){
    return (
        <div className="lg:flex" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="/ebook/comingsoon.jpg" alt="..."/>
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <h1 className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        Analysis using Bolinger Band
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