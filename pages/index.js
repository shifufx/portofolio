import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '@/components/Hero'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import Courses from '@/components/Courses'

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <>
      <Head>
        <title>Home | Shifu FX</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero />
        <Courses />
        <Testimonials />
        <Footer />
    </>
  )
}

export default Home
