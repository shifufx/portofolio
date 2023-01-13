import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {BsInstagram, BsYoutube} from 'react-icons/bs'
import {GrFacebook} from 'react-icons/gr'
import {TbBrandTelegram} from 'react-icons/tb'
import {FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
				<div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
						<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
					</svg>
				</div>
				<span className="self-center text-2xl font-semibold">Shifu FX</span>
			</a>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-50">Product</h3>
				<ul className="space-y-1">
					<li className='flex'>
						<a rel="noopener noreferrer" href="#">Term Services</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Whatsapp</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="mailto:ryan@shifufx.education">Email</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">FAQ</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-wide uppercase dark:text-gray-50">Company Profile</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener noreferrer" href="https://shifufx.id/">Official Website</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Terms of Service</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="uppercase dark:text-gray-50">Developers</h3>
				<ul className="space-y-1">
					<li>
						<a rel="noopener" href="#">Public API</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Documentation</a>
					</li>
					<li>
						<a rel="noopener noreferrer" href="#">Guides</a>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase dark:text-gray-50">Keep in touch with us</div>
				<div className="flex justify-start space-x-3">
					
                    <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1 hover:bg-blue-500">
                            <GrFacebook className='text-xl '/>
					</a>
                    <a rel="noopener noreferrer" href="#" title="Youtube" className="flex items-center p-1 hover:bg-red-700 rounded-full">
						<BsYoutube className='text-xl '/>
					</a>
                    <a rel="noopener noreferrer" href="#" title="Telegram" className="flex items-center p-1 rounded-full hover:bg-blue-600">
						<TbBrandTelegram className='text-xl'/>
					</a>
                    <a rel="noopener noreferrer" href="#" title="Tiktok" className="flex items-center p-1 rounded-full hover:bg-black">
						<FaTiktok className='text-xl'/>
					</a>
                    <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1 rounded-full hover:bg-black">
						<BsInstagram className='text-xl'/>
					</a>
				</div>
			</div>
		</div>
	</div>
    <div className="disclaimer float-left text-xs object-left-bottom text-gray-500 py-5 mb-3 px-5">
        Disclaimer:
        Bertransaksi forex dan komoditi memiliki resiko yang tinggi dan mungkin tidak sesuai untuk semua orang. Banyak faktor bagi seorang investor yang harus dipertimbangkan sebelum bertransaksi, seperti obyektivitas, tingkat pengalaman dan keinginan berinvestasi dengan resiko untuk setiap investor.
        </div>
	<div className="py-6 text-sm text-center dark:text-gray-500">© 2023 Shifu FX. All rights reserved.</div>
</footer>
  )
}

export default Footer