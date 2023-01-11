import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Section2 = () => {
  return (

    <section className='container mx-auto md:px20 py-1'>
        <h1 className='font-bold text-4xl py-12 text-center'> Course </h1>

        {/* grid */}
        <div className="grid md:grid-cols2 lg:grid-cols-3 gap-14">
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
        <div className="item ml-5 mt-5">
            <div className="images">
                {/* <Link href={"/"}><a> src={""} width={600} height={600} /></a> */}
                <Link href={"/"}>
                    <Image src={"/Batch/post-1.jpg"} width={310} height={280} className="rounded"/>
                </Link>
            </div>

            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"}></Link>
                </div>
                <div className="title text-left font-bold text-3xl">
                    <Link href={"/"}><h1>Batch Panda</h1></Link>
                </div>
                <p className='text-gray-500 py-3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi maiores repellat magnam. Rem deserunt sapiente nisi totam quo illum repudiandae iure reprehenderit ipsam excepturi. Possimus, sunt iure. Ea, similique asperiores.
                </p>
            </div>
        </div>
    )
}

export default Section2