import React from "react";
import { useRouter } from "next/router";
import en from 'locales/en'
import id from 'locales/id'
import { Player } from '@lottiefiles/react-lottie-player';

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
        <div className="items-center justify-start h-screen mx-auto">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black">
                <div className="bg-opacity-30 py-10 sm:py-16 lg:py-32">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">
                            <div>
                                <p className="text-base font-semibold tracking-wider text-blue-600 uppercase"></p>
                                <h1 className="mt-4 text-4xl font-bold text-gray-50 lg:mt-8 sm:text-6xl xl:text-7xl">{t.subtitle}</h1>
                                <p className="mt-4 text-base text-gray-50 lg:mt-8 sm:text-xl">{t.description}</p>
                            </div>

                            <div>
                            <Player className="lg:w-[27rem] md:w-[20rem]" src={"/svg/pro.json"} loop autoplay/>
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
                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">
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

function Post2() {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="p-8 space-y-3 border-2 border-white rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <img src="/gif/book.gif" alt="..." className="w-9 h-10 bg-black" />
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
        <div className="p-8 space-y-3 border-2 border-white rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <img src="/gif/analis.gif" alt="..." className="w-9 h-10 bg-black" />
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
        <div className="p-8 space-y-3 border-2 border-white rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
            <img src="/gif/decrease.gif" alt="..." className="w-9 h-10 bg-black" />   
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
        <div className="p-8 space-y-3 border-2 border-white rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
                <img src="/gif/increase.gif" alt="..." className="w-9 h-10 bg-black" />   
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
        <div className="p-8 space-y-3 border-2 border-white rounded-xl">
            <span className="inline-block text-blue-500 dark:text-blue-400">
            <img src="/gif/wallet.gif" alt="..." className="w-9 h-10 bg-black"/>
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