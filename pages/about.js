import Head from 'next/head'
import { Inter } from '@next/font/google'
import Abouts from '@/components/Abouts'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>About | Shifu FX</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Abouts />
    </>
  )
}
