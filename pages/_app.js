import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return( 
  <>
  <motion.div key={router.route} initial='initial' animate="animate" variants={{
    initial: {
      opacity: 0,
    },
    animate: {
      opacity:1
    },
  }}>
    <Navbar />
    <Component {...pageProps} />
  </motion.div>
  </>
  )
}
