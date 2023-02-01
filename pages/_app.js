import '../styles/globals.css'
import Navbar from '@/components/Navbar'
// import { motion } from 'framer-motion'
// import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // here you can add your aos options
    Aos.init({
      offset: 100,
    });
  }, []);
  
  return( 
  <>  
    <Navbar />
    <Component {...pageProps} />
  </>
  
  )
}
