import React from "react";

const Contacts = () => {
    return(
        <div className="flex items-center justify-start h-screen bg-fixed bg-center bg-cover custom-img">
           <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]">
                <div className="p-1 text-white align-middle text-center mt-[17rem]">
                    <h2 className="text-5xl font-bold py-1 bg-clip-text text-transparent bg-gradient-to-l from-rose-400 via-fuchsia-500 to-cyan-400" > Let's Talk About The Business.</h2>
                    <p className="py-5 text-xl text-gray-400"> Feel free to ask me any question or let's do to talk about our future collaboration</p>
                </div>
            </div>
        </div>
    )
}

export default Contacts;