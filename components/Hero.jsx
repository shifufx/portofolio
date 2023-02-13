import React from 'react'
import {Player} from '@lottiefiles/react-lottie-player'
import { useRouter } from 'next/router';
import Typewriter from 'typewriter-effect';
import en from 'locales/en'
import id from 'locales/id'

const Hero = () => {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;

    const animations = [
      `fade-up`,
      `fade-left`,
      `fade-right`,
    ];
  return (
    // <div>Hero2</div>
  <div className="bg-black lg:py-0 select-none">
    <section className="bg-black bg-opacity-30 py-20 sm:py-16 lg:py-22 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pb-24">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">
                <div>
                    <p className="text-base font-semibold tracking-wider text-blue-600 uppercase"></p>
                    <h1 className="mt-4 text-4xl font-bold text-gray-50 lg:mt-5 sm:text-5xl xl:text-6xl">{t.halo}</h1>
                    <h2 className='mt-4 text-2xl font-bold text-gray-50 sm:text-4xl xl:text-5xl'>
                      <Typewriter
                          options={{
                          strings: [t.trader, t.analis],
                          autoStart: true,
                          loop: true
                          }} 
                        />
                    </h2>
                    <p className="mt-4 text-base text-gray-50 lg:mt-8 sm:text-xl">{t.build}</p>
                    <div className='text-lg text-white'>
                    
                    </div>
                    <br />
                  
                    <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all hover:-translate-y-1 duration-300 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                        {t.join}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                          <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                    </a>
                    {/* <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline"></a></p> */}
                </div>
                <div className=' lg:w-[35rem] md:w-[32rem] sm:w-[20rem] lg:ml-[5rem] md:ml-[7rem]'>
                  <Player src={"/svg/home.json"} loop autoplay/>
                  {/* <Player src={"/svg/rain.json"} loop autoplay/> */}
                </div>
            </div>
            
        </div>
    </section>
    <div className="shape pb-0">
              <img src="/svg/wave-1.svg" alt="" />
            </div>
  </div>

  )
}
export default Hero
