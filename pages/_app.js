import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps, router }) {
  return( 
  <>
  <motion.div key={router.route} 
  transition={{type: 'spring', stiffness:20}}
  initial="initial"  
  animate="animate"
  variants={{
    initial: {
      opacity: 0,
    },
    animate: {
      opacity:1
    },
  }}>
    <Navbar />

    <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
    <Component {...pageProps} />
    </AnimatePresence>
  </motion.div>
  </>
  
  )
}
