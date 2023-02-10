import React from 'react'
import {GrInstagram, GrGithub, GrFacebookOption} from 'react-icons/gr'
import {FaTiktok} from 'react-icons/fa'

const Team = () => {
  return (
    // <div>Team</div>
    <>
    <section className="bg-white dark:bg-gray-900 select-none">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-5xl dark:text-white"><span className="text-blue-500">Team Experience</span></h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            {/* function goes here! */}
            {ryan()}
            {heru()}
            {/* end function section */}
        </div>
    </div>
</section>
</>
  )
}

export default Team

function ryan(){
    return(
        <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
                    <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                    <div className="mt-4 sm:mx-4 sm:mt-0">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">xct666</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">CEO</p>
                    </div>
                </div>

                <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.</p>

                <div className="flex mt-6 -mx-2">

                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                        <GrInstagram className='w-6 h-6 fill-current'/>
                    </a>

                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                        <GrGithub className='w-6 h-6 fill-current'/>
                    </a>

                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                        <FaTiktok className='w-6 h-6 fill-current'/>
                    </a>
            </div>
        </div>
    )
}

function heru(){
    return(
        <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                    <img className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                    <div className="mt-4 sm:mx-4 sm:mt-0">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">Heru 69</h1>

                        <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">CEO</p>
                    </div>
                </div>

                <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nesciunt officia aliquam neque optio? Cumque facere numquam est.</p>

                <div className="flex mt-6 -mx-2">
                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                        <GrInstagram className='w-6 h-6 fill-current'/>
                    </a>

                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                        <GrFacebookOption className='w-6 h-6 fill-current'/>
                    </a>

                    <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                        <FaTiktok className='w-6 h-6 fill-current'/>
                    </a>

                    
                </div>
            </div>
    )
}