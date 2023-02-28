import cx from 'clsx'
import Head from 'next/head'
import { Quicksand } from '@next/font/google'

import styles from 'src/styles/Home.module.scss'
import MainComponent from 'src/components/main'
import Navbar from 'src/components/navbar'

const quickSand = Quicksand({ subsets: ['latin'], display: 'swap' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Foodiny</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={cx(styles.main, quickSand.className)}>
        <Navbar />
        <MainComponent />
      </main>
    </>
  )
}
