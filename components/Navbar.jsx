import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useRouter } from 'next/router';
import en from 'locales/en'
import id from 'locales/id'

const Navbar = () => {

    const router = useRouter();
    const { locale } = router;
    const t = locale === 'en' ? en : id;
    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push(router.pathname, router.asPath, { locale });
      };

    const [nav, setNav] = useState(false)

    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')

    const handleNav = () => {
        setNav(!nav)
    };

  return (

    <div className='sticky top-0 w-full z-10 ease-in duration-300 bg-black'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center md:p-2 text-white '>
            <Link href="/" className=' px-3 py-5 mt-1'>
                <img src="/shifu.png" alt="" className='w-[8rem] h-[1.5rem] lg:w-[12rem] lg:h-[2rem]' />
                {/* <h1 style={{color: `${textColor}`}} className=' lg:mt-3 md:mt-0 px-6 font-extrabold lg:text-3xl md:text-xl sm:px-2 font-montserrat'>SFX</h1> */}
            </Link>
                <ul className='hidden sm:flex text-gray-50'>
                    <li className='px-4 py-6 '>
                        <Link href='/'>{t.home}
                        </Link>
                    </li>
                    <li className='px-4 py-6'>
                        <Link href='/course'>{t.course}
                        </Link>
                    </li>
                    <li className='px-4 py-6'>
                        <Link href='/about'>{t.about}
                        </Link>
                    </li>
                    
                    <select
                        onChange={changeLanguage}
                        defaultValue={locale}
                        className="px-4 py-5 cursor-pointer bg-black"
                        >                                         
                        <option disabled selected value="#" className=' text-sm'>Language
                        </option>
                        <option className="text-black" value="en">en</option>
                        <option className="text-black" value="id">id</option>
                    </select>
                </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10 p-5'>
                {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}} /> : <AiOutlineMenu size={20} style={{color: `${textColor}`}} />}
                {/* <AiOutlineMenu size={20} />
                 */}
            </div>

            {/* Mobile Menu */}
                <div className={nav 
                ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
            } 
            onClick={()=>handleNav()}
            >
                    <ul>
                        <li className='p-4 text-4xl'>
                            <Link href='/'>Home
                            </Link>
                        </li>
                        <li className='p-4 text-4xl'>
                            <Link href='/course'>Course
                            </Link>
                        </li>
                        <li className='p-4 text-4xl'>
                            <Link href='/about'>About
                            </Link>
                        </li>
                        <select
                        onChange={changeLanguage}
                        defaultValue={locale}
                        className="p-4 cursor-pointer bg-black"
                        >                                         
                        <option disabled selected value="#">Language
                        </option>
                        <option className="text-black" value="en">en</option>
                        <option className="text-black" value="id">id</option>
                    </select>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Navbar;