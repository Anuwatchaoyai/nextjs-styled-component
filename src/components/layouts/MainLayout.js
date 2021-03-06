import Head from 'next/head'
import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"


const MainLayout = ({ children }) => {
	return (
		<>
			<Head>
				<meta name="description" content="Generated by Thebackdoor" />
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export default MainLayout
