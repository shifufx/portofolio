import React from 'react'
import { useRouter } from 'next/router';
import en from 'locales/en'
import id from 'locales/id'

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
    
<section className="bg-black">
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
                <button className={"flex items-center justify-center px-3 py-2 font-medium text-white uppercase transition-colors duration-300 transform rounded-lg  focus:outline-none" +
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
                <button className={"flex items-center justify-center px-3 py-2 font-medium text-white uppercase transition-colors duration-300 transform bg-transparent rounded-lg focus:outline-none dark:text-gray-200" +
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
                    {price1()}
                    {price1()}
                </div>
            </div>
            {/* end section basic */}
            
            {/* start section pro */}
            <div className={openTab === 2 ? 'block' : 'hidden'} id='link2'>
                <div className="flex flex-col items-center justify-center mt-16 space-y-6 md:items-end md:-mx-5 md:space-y-0 md:flex-row" >
                    {price2()}
                    {price2()}
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

function price1(){
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
                    
            <div className="mt-8 space-y-8">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span className="mx-4 text-gray-700 dark:text-gray-300">Access all features</span>
                </div>

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span className="mx-4 text-gray-700 dark:text-gray-300">5 wathclists included</span>
                </div>

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                </div>

                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                </div>
                        
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">5 exclusive widgets</span>
                </div>                  
            </div>
            <button className="w-full px-4 py-2 mt-10 mb-5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Download
            </button>  
        </div>
                    
    )
}

function price2(){
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Access all features</span>
                    </div>
                    
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited wathclists</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Access all features</span>
                    </div>
                    
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited wathclists</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                    </div>

                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
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