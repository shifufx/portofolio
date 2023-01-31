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

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('#ffffff');
                setTextColor('#000000');
            } else {
                setColor('transparent');
                setTextColor('#ffffff');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);
    
  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center md:p-2 sm:p-2 text-white'>
            <Link href="/">
                <h1 style={{color: `${textColor}`}} className=' font-extrabold lg:text-3xl md:ml-5 md:text-xl font-montserrat'>SFX</h1>
            </Link>
                <ul style={{color: `${textColor}`}} className='hidden sm:flex text-gray-400 hover:text-black'>
                    <li className='p-4 '>
                        <Link href='/'>{t.home}
                        </Link>
                    </li>
                    <li className='p-4 '>
                        <Link href='/course'>{t.course}
                        </Link>
                    </li>
                    <li className='p-4 '>
                        <Link href='/contact'>{t.contact}
                        </Link>
                    </li>
                    <li className='p-4 '>
                        <Link href='/about'>{t.about}
                        </Link>
                    </li>
                    {/* <li className='p-4 text-gray-400 hover:text-gray-600'>
                        <Link href='https://shifufx.github.io/'>Trading Result
                        </Link>
                    </li> */}

                    <select
                    style={{color: `${textColor}`}}
                        onChange={changeLanguage}
                        defaultValue={locale}
                        className="p-4 cursor-pointer "
                        >                                         
                        <option disabled selected value="">Language
                        </option>
                        <option className="text-black" value="en">English</option>
                        <option className="text-black" value="id">Bahasa</option>
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
            >
                    <ul>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/'>Home
                            </Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/course'>Course
                            </Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/contact'>Contact
                            </Link>
                        </li>
                        <li className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/about'>About
                            </Link>
                        </li>
                        <li className='p-4 text-4xl text-gray-400 hover:text-gray-600'>
                            <Link href='https://shifufx.github.io/'>Trading Result
                            </Link>
                        </li>
                        <select
                    style={{color: `${textColor}`}}
                        onChange={changeLanguage}
                        defaultValue={locale}
                        className="p-4 cursor-pointer "
                        >                                         
                        <option disabled selected value="">Language
                        </option>
                        <option className="text-black" value="en">English</option>
                        <option className="text-black" value="id">Bahasa</option>
                    </select>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Navbar;