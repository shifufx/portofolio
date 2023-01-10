import React from "react";

const info = () => {
    return(
        <div className="flex items-center justify-start h-screen mb-[10rem] bg-fixed bg-center bg-cover custom-img">
           <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]">
                <div className="p-5 text-white z-[2] mt-[10rem] ml-[6rem]">
                    <h2 className="text-5xl font-bold"> About </h2>
                    <p className="py-5 text-xl"> This is About</p>
                    <button className="px-8 py-2 border"> Book </button>
                </div>
            </div>
        </div>
    )
}

export default info;