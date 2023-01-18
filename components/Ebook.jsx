import { exportPathMap } from 'next.config'
import React from 'react'

const Ebook = () => {
  return (

    <section className="bg-white dark:bg-gray-900 w-full">
        <div className="container px-6 py-4 mx-auto">
            <h1 className="text-3xl sm:text-xl font-semibold md:mt-20 sm:mt-10 text-gray-800 capitalize lg:text-4xl dark:text-white">Beginner To Intermediate Course</h1>
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                {intermediate()}
                {intermediate()}
                {intermediate()}
                {intermediate()}
                {intermediate()}
            </div>
        </div>

        {/* intermediate to adance */}
        <div className="container px-6 py-4 mx-auto">
            <h1 className="md:text-3xl sm:text-xl font-semibold md:mt-20 sm:mt-10 text-gray-800 capitalize lg:text-4xl dark:text-white">Intermediate to Advanced Course</h1>
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 lg:mb-16 md:mb-13  ">
                {intermediate()}
                {intermediate()}
                {intermediate()}
                {intermediate()}
            </div>
        </div>
</section>
  )
}

function intermediate(){
    return (
        <div className="lg:flex">
            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="..."/>
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        How to use sticky note for problem solving
                    </a>  
                    <span className="text-sm text-gray-500 dark:text-gray-300">On: 20 October 2019</span>
            </div>
        </div>
    )
}

export default Ebook