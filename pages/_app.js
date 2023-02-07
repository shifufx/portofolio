import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import { easeInOut, motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import Router from 'next/router'
import { useEffect } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    // here you can add your aos options
    Aos.init({
      offset: 100,
    });
  }, []);
  
  return( 
  <>  
  
    <Navbar />
    
    {/* <motion.div
      key={router.route}
      initial="initial"
      animate="inactive"
      exit="out"
      variants={{
        initial: {
          opacity: 0,
          y: 100,
        },
        transition: {
          duration: 1,
          ease: easeInOut,
        },
        animate: {
          opacity: 1,
        },
      }}
    > */}
      <Component {...pageProps} key={router.route} />
    {/* </motion.div> */}
  </>
  
  )
}

