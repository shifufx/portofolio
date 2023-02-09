import React from 'react'
import { useRouter } from 'next/router';
import en from 'locales/en'
import id from 'locales/id'
import {BiDollarCircle} from 'react-icons/bi'

const courses1 = () => {

    const[openTab, setOpenTab] = React.useState(1);
    const[active, setActive] = React.useState(false);
    
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;

    const animations = [
        `fade-up`,
        `fade-left`,
        `fade-right`,
      ];

    function handleClick(){
        setActive(active => !active);
    }

    let toggleCheck = active ? 'active' : '';

  return (
    
<section className="bg-black" id='offer'>
    <div className="container px-6 pb-10 mx-auto" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
        <h1 className='text-center text-white font-bold capitalize sm:py-3 md:text-4xl sm:text-xl'>{t.titleOffer} <span className='text-cyan-300'>{t.offer}</span> </h1>
        <h3 className='text-white leading-5 text-center md:mb-10 sm:mb-5 md:text-2xl'>{t.descriptionOffer} <span className='text-cyan-300'>{t.free}</span></h3>
        <div className="max-w-2xl p-1.5 mx-auto overflow-hidden bg-gray-100 rounded-lg dark:bg-gray-800">
            <div className="grid gap-3 md:grid-cols-3 ">
                {/* button 1 */}
                <button className={" px-3 py-2 font-medium text-white uppercase transition-colors duration-300 transform bg-transparent rounded-lg focus:outline-none" +
                    (openTab === 1
                        ? "text-white bg-blue-600"
                        : "text-white bg-gray-600")
                    }
                    onClick = { e =>{
                        e.preventDefault();
                        setOpenTab(1);  
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                >
                    {t.t1}
                </button>
                {/* button 2 */}
                <button className={"px-3 py-2 font-medium text-white uppercase transition-colors duration-300 transform rounded-lg  focus:outline-none" +
                    // (openTab === 2 )
                    (openTab === 2
                        ? "text-white bg-blue-600"
                        : "text-white bg-gray-600")
                    }
                    onClick = { e => {
                        e.preventDefault();
                        setOpenTab(2)
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist">
                    {t.t2}  
                    <span className="text-xs mx-1 ml-2 font-normal text-white bg-blue-500 rounded-full py-0.5 px-1.5">{t.new}</span>
                </button>
                {/* button 3 */}
                <button className={"px-3 py-2 font-medium text-white uppercase transition-colors duration-300 transform bg-transparent rounded-lg focus:outline-none dark:text-gray-200" +
                    // (openTab === 3)
                    (openTab === 3
                        ? "text-white bg-blue-600"
                        : "text-white bg-gray-600")
                    }
                    onClick = { e => {
                        e.preventDefault();
                        setOpenTab(3)
                    }}>
                    <span className="mx-1">{t.t3}</span>
                </button>
            </div>
        </div>
            {/* start basic section */}
            <div className={openTab === 1 ? 'block' : 'hidden'} id='link1' >
                <div className="flex flex-col items-center justify-center mt-16 space-y-6 md:items-end md:-mx-5 md:space-y-0 md:flex-row">
                    {pricePanda()}
                    {mantis2()}
                </div>
            </div>
            {/* end section basic */}
            {/* start section pro */}
            <div className={openTab === 2 ? 'block' : 'hidden'} id='link2'>
                <div className="flex flex-col items-center justify-center mt-16 space-y-6 md:items-end md:-mx-5 md:space-y-0 md:flex-row" >
                    {Tiger()}
                    {Snake()}
                </div>
            </div>
            {/* end section pro */}
            {/* start section indicator */}
            <div className={openTab === 3 ? 'block' : 'hidden'} id='link2'>
                <div className="flex flex-col items-center justify-center mt-16 space-y-6 md:items-end md:-mx-5 md:space-y-0 md:flex-row">
                    {indicator()}
                    {indicator()}
                </div>
            </div>
            {/* end section indicator */}
        </div>
</section>
  )
}

function pricePanda(){
    return(
        <div className="w-full px-6 py-4 transition-colors duration-300 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-800" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            {/* call fucntion */}
            <div className="text-center">
                <p className="text-4xl font-semibold text-gray-800 dark:text-gray-100">Batch Panda</p>
                {/* <p className="mt-4 text-gray-500 dark:text-gray-300">Essentail Features</p>
                <h4 className="mt-2 text-gray-600 line-through dark:text-gray-400">$59.99</h4>
                <h4 className="mt-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">$53.99</h4>
                <p className="mt-4 text-gray-500 dark:text-gray-300">/per month</p>
                <p className="mt-4 text-gray-500 dark:text-gray-300">Bill all 6 months</p> */}
            </div>
            <div className="mt-8 space-y-5">
                <div className="flex items-center">
                    {/* <BiDollarCircle className='w-8 h-8 text-blue-600' /> */}
                    <span className="mx-4 text-gray-700 dark:text-gray-300">able to understand support and resistance</span>
                </div>
                <div className="flex items-center">
                    <span className="mx-4 text-gray-700 dark:text-gray-300">5 able to identify support and resistance</span>
                </div>

                <div className="flex items-center">
                    <span className="mx-4 text-gray-700 dark:text-gray-300">able to use the breakout technique</span>
                </div>

                <div className="flex items-center">
                    <span className="mx-4 text-gray-700 dark:text-gray-300">understand how to execute when breakout happen</span>
                </div>
                        
                <div className="flex items-center">
                    <span className="mx-4 text-gray-700 dark:text-gray-300">identify take profit and stop loss using support and resistance</span>
                </div>                  
            </div>
            <button className="w-full px-4 py-2 mt-10 mb-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Download
            </button>  
        </div>
    )
}

function mantis2(){
    return(
        <div className="w-full px-6 py-4 transition-colors duration-300 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-800" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            {/* call fucntion */}
            <div className="text-center">
                <p className="text-4xl font-semibold text-gray-800 dark:text-gray-100">Batch Mantis</p>
                {/* <p className="mt-4 text-gray-500 dark:text-gray-300">Essentail Features</p>
                <h4 className="mt-2 text-gray-600 line-through dark:text-gray-400">$59.99</h4>
                <h4 className="mt-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">$53.99</h4>
                <p className="mt-4 text-gray-500 dark:text-gray-300">/per month</p>
                <p className="mt-4 text-gray-500 dark:text-gray-300">Bill all 6 months</p> */}
            </div>
            <div className="mt-8 space-y-5">
                <div className="flex items-center">
                    {/* <BiDollarCircle className='w-8 h-8 text-blue-600' /> */}
                    <span className="mx-4 text-gray-700 dark:text-gray-300">able to understand support and resistance</span>
                </div>
                <div className="flex items-center">
                    <span className="mx-4 text-gray-700 dark:text-gray-300">5 able to identify support and resistance</span>
                </div>

                <div className="flex items-center">
                    <span className="mx-4 text-gray-700 dark:text-gray-300">able to use the breakout technique</span>
                </div>

                <div className="flex items-center">
                    <span className="mx-4 text-gray-700 dark:text-gray-300">understand how to execute when breakout happen</span>
                </div>
                        
                <div className="flex items-center">
                    <span className="mx-4 text-gray-700 dark:text-gray-300">identify take profit and stop loss using support and resistance</span>
                </div>                  
            </div>
            <button className="w-full px-4 py-2 mt-10 mb-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Download
            </button>  
        </div>
    )
}

function Tiger(){
    return(
        <div className="w-full px-6 py-4 transition-colors duration-300 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-800" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            {/* call fucntion */}
            <div className="text-center">
                <p className="text-4xl font-semibold text-gray-800 dark:text-gray-100">Batch Mantis</p>
                {/* <p className="mt-4 text-gray-500 dark:text-gray-300">Essentail Features</p>
                <h4 className="mt-2 text-gray-600 line-through dark:text-gray-400">$59.99</h4>
                <h4 className="mt-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">$53.99</h4>
                <p className="mt-4 text-gray-500 dark:text-gray-300">/per month</p>
                <p className="mt-4 text-gray-500 dark:text-gray-300">Bill all 6 months</p> */}
            </div>
            <div className="mt-8 space-y-5">
                <div className="flex items-center">
                    {/* <BiDollarCircle className='w-8 h-8 text-blue-600' /> */}
                    <span className="mx-4 text-gray-700 dark:text-gray-300">able to understand support and resistance</span>
                </div>
                <div className="flex items-center">
                    <span className="mx-4 text-gray-700 dark:text-gray-300">5 able to identify support and resistance</span>
                </div>

                <div className="flex items-center">
                    <span className="mx-4 text-gray-700 dark:text-gray-300">able to use the breakout technique</span>
                </div>

                <div className="flex items-center">
                    <span className="mx-4 text-gray-700 dark:text-gray-300">understand how to execute when breakout happen</span>
                </div>
                        
                <div className="flex items-center">
                    <span className="mx-4 text-gray-700 dark:text-gray-300">identify take profit and stop loss using support and resistance</span>
                </div>                  
            </div>
            <button className="w-full px-4 py-2 mt-10 mb-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Download
            </button>  
        </div>
    )
}

function Snake(){
    return(
        <div className="w-full overflow-hidden transition-colors duration-300 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-800" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000" > 
            <p className="py-2 text-sm text-center text-white uppercase bg-blue-500">Recommended by experts</p>
            <div className="px-6 py-4">
                <div className="text-center">
                    <p className="text-4xl font-semibold text-gray-800 dark:text-gray-100">Pro</p>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">Advanced Features</p>
                    <h4 className="mt-2 text-gray-600 line-through dark:text-gray-400">$89.99</h4>
                    <h4 className="mt-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">$80.99</h4>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">/per month</p>                            
                    <p className="mt-4 text-gray-500 dark:text-gray-300">Bill all 6 months</p>
                </div>
                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Access all features</span>
                    </div>
                    
                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited wathclists</span>
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                    </div>

                    <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">10+ exclusive pro widgets</span>
                    </div>
                    <button className="w-full mb-5 px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Choose Pro
                    </button>
                </div>
            </div>
        </div>
    )
}

function indicator(){
    return(
        <div className="w-full overflow-hidden transition-colors duration-300 transform rounded-lg md:mx-5 md:w-96 bg-gray-50 dark:bg-gray-800" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">
            <p className="py-2 text-sm text-center text-white uppercase bg-blue-500">Recommended by experts</p>
            <div className="px-6 py-4">
                <div className="text-center">
                    <p className="text-4xl font-semibold text-gray-800 dark:text-gray-100">Moving Average</p>
                    <p className="mt-4 text-gray-500 dark:text-gray-300">Advanced Features</p>
                    {/* <h4 className="mt-2 text-gray-600 line-through dark:text-gray-400">$89.99</h4> */}
                    {/* <h4 className="mt-2 text-5xl font-semibold text-gray-800 dark:text-gray-100">$80.99</h4> */}
                    {/* <p className="mt-4 text-gray-500 dark:text-gray-300">/per month</p>                             */}
                    <p className="mt-4 text-gray-500 dark:text-gray-300">Bill all 6 months</p>
                </div>

                <div className="mt-8 space-y-8">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Access all features</span>
                    </div>
                    
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited wathclists</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>

                        <span className="mx-4 text-gray-700 dark:text-gray-300">10+ exclusive pro widgets</span>
                    </div>
                    <button className="w-full mb-5 px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                        Choose Pro
                    </button>
                </div>
            </div>
        </div>
    )
}

export default courses1