import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { useRouter } from "next/router";
import en from 'locales/en'
import id from 'locales/id'

export const Integrate = () => {
    const animations = [
        `fade-up`,
        `fade-left`,
        `fade-right`,
      ];

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;

  return (
    // <div>Integrate</div>
    <section className="py-10 bg-black sm:py-16 lg:py-24 select-none">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">{t.titleIntegration}</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-50" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">
            {LifeTime()}
            {Professional()}
            {Target()}
            {Flexible()}
            {Wallet()}
            {Broker()}
        </div>
    </div>
</section>

  )
}

function LifeTime(){
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;

    return(
        <div className="overflow-hidden bg-black rounded shadow">
            <div className="p-8">
                <div className="lg:w-[5rem] md:w-[5rem] sm:w-[3rem] lg:ml-[3.5rem] md:ml-[3.5rem]">
                    <Player className="flex-shrink-0 lg:w-[13rem] md:w-[13rem] sm:w-[5rem] h-auto" src={"/svg/free.json"} loop autoplay />
                </div>
                <p className='pt-5 my-2 font-bold text-white text-center mt-1'>{t.lifetime}</p>
                <p className="text-base leading-relaxed text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae pariatur optio! Labore, illum magni repudiandae saepe iste quae non ratione expedita accusantium facere vel odio minima nam impedit similique.</p>
            </div>
        </div>
    )
}

function Professional(){
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="overflow-hidden bg-black rounded shadow">
            <div className="p-8">
                <div className="lg:w-[5rem] md:w-[5rem] sm:w-[3rem] lg:ml-[5rem] md:ml-[5rem]">
                    <Player className="flex-shrink-0 xl:w-[8rem] md:w-[8rem] h-auto" src={"/svg/trading.json"} loop autoplay />
                </div>
                <p className=' pt-5 my-2 font-bold text-white text-center mt-4'>{t.become}</p>
                <p className="text-base leading-relaxed text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae pariatur optio! Labore, illum magni repudiandae saepe iste quae non ratione expedita accusantium facere vel odio minima nam impedit similique.</p>
            </div>
        </div>

    )
}

function Target(){
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="overflow-hidden bg-black rounded shadow">
            <div className="p-8">
                <div className="lg:w-[5rem] md:w-[5rem] sm:w-[3rem] lg:ml-[2.5rem]">
                    <Player className="flex-shrink-0 xl:w-[13.5rem] md:w-[20rem] h-auto" src={"/svg/target.json"} loop autoplay />                    </div>
                <p className='pt-5 my-2 font-bold text-white text-center mt-4'>{t.build}</p>
                <p className="text-base leading-relaxed text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae pariatur optio! Labore, illum magni repudiandae saepe iste quae non ratione expedita accusantium facere vel odio minima nam impedit similique.</p>
            </div>
        </div>
    )
}

function Flexible(){
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="overflow-hidden bg-black rounded shadow">
            <div className="p-8 ">
                <div className="">
                    <Player className="flex-shrink-0 xl:w-[9rem] md:w-[10.5rem] sm:w-[7rem] h-auto" src={"/svg/flexible.json"} loop autoplay />
                </div>
                <p className='pt-5 my-2 font-bold text-white text-center mt-0'>{t.flexible}</p>
                <p className="text-base leading-relaxed text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quasi rem facere minima dolorem maiores quae aliquam architecto aperiam, excepturi quis repudiandae esse rerum quod itaque voluptate, commodi placeat voluptas.</p>
            </div>
        </div>
    )
}

function Wallet(){
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="overflow-hidden bg-black rounded shadow">
            <div className="p-8 ">
                <div className="">
                    <Player className="flex-shrink-0 xl:w-[9.6rem] md:w-[10rem] h-auto" src={"/svg/wallet.json"} loop autoplay />
                </div>
                <p className='pt-5 my-2 font-bold text-white text-center sm:mt-0'>{t.money}</p>
                <p className="text-base leading-relaxed text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae pariatur optio! Labore, illum magni repudiandae saepe iste quae non ratione expedita accusantium facere vel odio minima nam impedit similique.</p>
                {/* <p className="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p> */}
            </div>
        </div>
    )
}

function Broker(){
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    return(
        <div className="overflow-hidden bg-black rounded shadow">
            <div className="p-8 ">
                <div className="">
                    <Player className="flex-shrink-0 xl:w-[9.6rem] md:w-[10rem] h-auto" src={"/svg/guarantee.json"} loop autoplay />
                </div>
                <p className='pt-5 my-2 font-bold text-white text-center sm:mt-0'>{t.broker}</p>
                <p className="text-base leading-relaxed text-white mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae pariatur optio! Labore, illum magni repudiandae saepe iste quae non ratione expedita accusantium facere vel odio minima nam impedit similique.</p>
                {/* <p className="text-base leading-relaxed text-gray-600 mt-7">Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p> */}
            </div>
        </div>
    )
}