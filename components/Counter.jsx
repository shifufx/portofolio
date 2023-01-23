 import React from "react";
 import CountUp from 'react-countup';
 
 const Statistic = () => {
    return (
        <section className="py-10 bg-black sm:py-6 lg:py-10">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8 lg:mb-16 md:mb-10">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Numbers tell our story</h2>
                {/* <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p> */}
            </div>
            <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                {Post()}
            </div>
        </div>
    </section>    
    );
  };


  function Post() {
    return(
        <>
        <div>
            <h3 className="font-bold text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"> 1+ </span>
            </h3>
                <p className="mt-4 text-xl font-medium text-white">Years in business</p>
                <p className="text-base mt-0.5 text-gray-500">Creating the successful path</p>
        </div>
    
        <div>
            <h3 className="font-bold text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"><CountUp start={1} end={1000} duration={2}/></span>
            </h3>
            <p className="mt-4 text-xl font-medium text-white">E-Book Downloads</p>
            <p className="text-base mt-0.5 text-gray-500">In last 6 years</p>
        </div>
    
        <div>
            <h3 className="font-bold text-7xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600"><CountUp start={1} end={2000} duration={3}/> </span>
            </h3>
            <p className="mt-4 text-xl font-medium text-white">Team members</p>
            <p className="text-base mt-0.5 text-gray-500">Working for your success</p>
        </div>
        </>
    )
  }
  export default Statistic