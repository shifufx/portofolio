import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

export const Integrate = () => {
  return (
    // <div>Integrate</div>
    <section className="py-10 bg-black sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Get all support</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden bg-black rounded shadow">

                <div className="p-8">
                    <div className="flex items-center justify-center">
                        <Player className="flex-shrink-0 w-[15rem] h-auto" src={"/svg/money.json"} loop autoplay />
                    </div>
                    <p className=' font-bold text-white text-center mt-1'>Gain Profit</p>
                    <p className="text-base leading-relaxed text-white mt-2">Make easy money with.</p>
                </div>
            </div>

            <div className="overflow-hidden bg-black rounded shadow">
                <div className="p-8">
                    <div className="flex items-center justify-center">
                        <Player className="flex-shrink-0 w-[10rem] h-auto" src={"/svg/trading.json"} loop autoplay />
                    </div>
                    <p className=' font-bold text-white text-center mt-4'>Gain Profit</p>
                    <p className="text-base leading-relaxed text-white mt-2">Make easy money with.</p>
                </div>
            </div>

            <div className="overflow-hidden bg-black rounded shadow">
                <div className="p-8">
                    <div className="flex items-center justify-center">
                        <Player className="flex-shrink-0 w-[15rem] h-auto" src={"/svg/about.json"} loop autoplay />
                    </div>
                    <p className=' font-bold text-white text-center mt-4'>Gain Profit</p>
                    <p className="text-base leading-relaxed text-white mt-2">Make easy money with.</p>
                    {/* <p className="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p> */}
                </div>
            </div>

        </div>
    </div>
</section>

  )
}
