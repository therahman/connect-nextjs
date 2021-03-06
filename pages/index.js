import Head from 'next/head';
import Navbar from '../components/Navbar';
import Index from '../page-components/Index';

export default function Home() {
	return (
		<>
			<Head>
				<title>Connect</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<Navbar />
				<Index />
			</main>
		</>
	);
}
