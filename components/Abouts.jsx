import React from "react";
import { useRouter } from "next/router";
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import {FaBrain, FaDollarSign} from 'react-icons/fa'
import en from 'locales/en'
import id from 'locales/id'
import { t } from "i18next";

const info = () => {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;

    // const changeLanguage = (e) => {
    //     const locale = e.target.value;
    //     router.push(router.pathname, router.asPath, { locale });
    // }

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
                            <h1 className="text-3xl mb-10 md:text-5xl p-2 lg:py-15 md:py-10 text-white tracking-loose ">{t.subtitle}</h1>
                            <p className="text-sm md:text-base text-gray-50 lg:mb-20 md:mb-10">{t.description}</p>
                            {/* <a href="#what"
                                className="mt-5 bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                                What I do?
                            </a> */}
                        </div>
                        <div className="p-8 mt-12 lg:mb-6 md:mb-6 md:mt-0 ml-0 md:ml-12 lg:w-2/3 md:w-1/2" data-aos="fade-right" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
                            <div className="h-48 flex flex-wrap content-center">
                                <div className="inline-block md:mt-8 w-full md:p-0 sm:mt-8">
                                    {Book()}
                                    {/* <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="/Batch/shifu.png" alt="..." /> */}
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z" clip-rule="evenodd" />
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
                <FaDollarSign className="w-8 h-8" />
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