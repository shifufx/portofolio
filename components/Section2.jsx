import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Section2 = () => {
  return (

    <section className='container mx-auto md:px20 py-1'>
        <h1 className='font-bold text-4xl py-12 text-center'> Course </h1>

        {/* grid */}
        {/* <div className="grid md:grid-cols2 lg:grid-cols-3 gap-14"> */}
        <div className="grid grid-flow-row gap-10 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            { Post() }
            { Post() }
            { Post() }
            { Post() }
            { Post() }
            { Post() }
        </div>
    </section>

    )
}

function Post(){
    return (
        <div className="item mt-5 my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
            <div className="images">
                {/* <Link href={"/"}><a> src={""} width={600} height={600} /></a> */}
                <Link href={"/"}>
                    <Image src={"/Batch/post-1.jpg"} width={310} height={280} className="rounded-t h-72 w-full object-cover"/>
                </Link>
            </div>

            <div className="info flex justify-center flex-col py-4 p-4">
                <div className="title text-lg mb-4 font-bold leading-relaxed text-white dark:text-gray-300">
                    <Link href={"/"}><h1>Batch Panda</h1></Link>
                </div>
            </div>
        
        <Link href={"/contact"}>
            <p className='p-4 text-white font-bold'>Download</p>
        </Link>
        </div>
        
    )
}

export default Section2