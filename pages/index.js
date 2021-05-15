import Head from 'next/head'
import MainLayout from '../src/components/layouts/MainLayout'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Home page</h1>
    </MainLayout>
  )
}
