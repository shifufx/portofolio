import React from "react";
import { useRouter } from "next/router";
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import {FaBrain, FaDollarSign} from 'react-icons/fa'
import en from 'locales/en'
import id from 'locales/id'

const info = () => {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    
    const animations = [
        `fade-up`,
        `fade-left`,
        `fade-right`,
      ];
    return(
        <div className="items-center justify-start h-screen">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black">
                <div className="bg-black text-white py-10 md:mb-8">
                    <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
                        <div className="flex-col w-full lg:w-2/3 md:w-1/2 justify-center items-start p-8">
                            <h1 className="text-3xl md:text-5xl p-2 lg:py-15 md:py-10 text-white tracking-loose ">{t.subtitle}</h1>
                            <p className="text-sm md:text-base text-gray-50 lg:mb-20 md:mb-10">{t.description}</p>
                        </div>
                        <div className="p-8 mt-12 lg:mb-6 md:mb-6 md:mt-0 ml-0 md:ml-12 lg:w-2/3 md:w-1/2" data-aos="fade-right" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
                            <div className="h-48 flex flex-wrap content-center">
                                <div className="inline-block md:mt-8 w-full md:p-0 sm:mt-8">
                                    {Book()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* what i do section */}
                <section className="bg-white dark:bg-black">
                    <div className="container px-6 xl:py-20 md:py-10 mx-auto bg-black" id="what">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white mb-1" data-aos="fade-right" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">{t.whatIdo}</h1>
                        
                        {/* garis rainbow */}
                        <div className="relative" data-aos="fade-left" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
                            <div className="h-0.5 xl:w-[15rem] sm:w-[10rem] mt-0 bottom-0 left-0 lg:ml-1 bg-text-clip bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400">
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                            {/* {Post()} */}
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
    const gltf = useLoader(GLTFLoader, "/emojimat/scene.gltf");
    return (
      <>
        <primitive object={gltf.scene} scale={0.10} />
      </>
    );
  };

function Book() {
    return (
      <>
          {/* <Books /> */}
          <div className=" w-full h-[25rem] my-15 mt-[4rem]">
          <Canvas shadows dpr={[1, 2]} camera={{ position: [700, 0, 1], fov: 15 }}>
            <ambientLight intensity={0.7} />
            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[50, 50, 5]} castShadow />
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

function Post2() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                {/* <FaBrain className="w-8 h-8" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>


            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{t.fundamental}</h1>
            <p className="text-gray-500 dark:text-gray-300">
                Traders who use fundamental analysis may gain more profit by identifying undervalued assets and buying them at a discount.
            </p>
        </div>
    )
}

function Post3() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                {/* <FaBrain className="w-8 h-8" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>


            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{t.teknikal}</h1>
            <p className="text-gray-500 dark:text-gray-300">
            This involves using charts and other tools to identify patterns in market data and make predictions about future price movements. Technical analysis may gain more profit by buying assets at low prices and selling them at higher prices.
            </p>
        </div>
    )
}

function Post4() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
            </svg>

            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{t.resiko}</h1>
            <p className="text-gray-500 dark:text-gray-300">
                This involves using techniques such as stop-loss orders, options, and other derivatives to limit the potential loss on a trade, in order to maximize potential gain.
            </p>
        </div>
    )
}

function Post5() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <FaBrain className="w-8 h-8" />
            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{t.psikolog}</h1>
            <p className="text-gray-500 dark:text-gray-300">
                By understanding the psychology of trading, traders can become more aware of their own mental and this can include things like setting clear rules for when to enter and exit trades.
            </p>
        </div>
    )
}

function Post6() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <span className="inline-block text-blue-500 dark:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            </span>
            <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">{t.fun}</h1>
            <p className="text-gray-500 dark:text-gray-300">
                Trading in the stock market can be a way to potentially make more money.
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet */}
            </p>
        </div>
    )
}

export default info