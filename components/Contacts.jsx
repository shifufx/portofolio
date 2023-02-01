import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import en from 'locales/en'
import id from 'locales/id'

const Contacts = () => {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;

    const animations = [
        `fade-up`,
        `fade-left`,
        `fade-right`,
      ];

    return(
        <section className="bg-white dark:bg-black h-screen">
            <div className="container px-6 lg:py-16 md:py-6 sm:py-6 mx-auto">
                <h1 className="text-5xl font-semibold text-center lg:py-28 md:py-28 capitalize md:text-4xl bg-clip-text text-transparent bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="1000">{t.titleContact}</h1>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                    {/* whatsapp */}
                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                        {/* isi icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        </span>
                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Location</h1>
                        <p className="text-gray-500 dark:text-gray-300">{t.p1}</p>
                        <a href="https://whatsapp.me/62873052028" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <span className="mx-1">Whatsapp me</span>
                        </a>
                    </div>
                    {/* email */}
                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                            {/* isi icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
                                <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
                            </svg>
                        </span>

                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">e-Mail</h1>
                        <p className="text-gray-500 dark:text-gray-300">{t.p2}</p>

                        <a href="mailto:ryan@shifufx.education" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <span className="mx-1">email me</span>
                        </a>
                    </div>
                    <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800" data-aos="fade-up" data-aos-delay="230" data-aos-easing="ease-in-out" data-aos-duration="2000">
                        <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                            <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                        </svg>
                        </span>
                        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Telegram</h1>
                        <p className="text-gray-500 dark:text-gray-300">{t.p3}</p>
                        <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                            <span className="mx-1">Text me on telegram</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contacts;