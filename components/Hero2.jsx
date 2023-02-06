import React from 'react'
import {Player} from '@lottiefiles/react-lottie-player'
import { useRouter } from 'next/router';
import en from 'locales/en'
import id from 'locales/id'

const Hero2 = () => {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;

  return (
    // <div>Hero2</div>
  <div className="bg-black">
    <section className="bg-black bg-opacity-30 py-10 sm:py-16 lg:py-32">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <p className="text-base font-semibold tracking-wider text-blue-600 uppercase"></p>
                    <h1 className="mt-4 text-4xl font-bold text-gray-50 lg:mt-8 sm:text-6xl xl:text-8xl">Connect & learn from the experts</h1>
                    <p className="mt-4 text-base text-gray-50 lg:mt-8 sm:text-xl">Grow your career fast with right mentor.</p>

                    <a href="#" title="" className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-gray-50 transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                        Join for free
                        <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </a>
                    {/* <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline"></a></p> */}
                </div>

                <div>
                  <Player src={"/svg/about.json"} loop autoplay/>
                    {/* <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" /> */}
                </div>
            </div>
        </div>
    </section>
  </div>

  )
}
export default Hero2
