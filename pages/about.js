import Head from 'next/head'
import MainLayout from '../src/components/layouts/MainLayout'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function About() {
	return (
		<MainLayout>
			<Head>
				<title>About</title>
			</Head>
			<h1>About page</h1>
		</MainLayout>
	)
}
