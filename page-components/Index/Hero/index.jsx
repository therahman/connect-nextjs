import styles from './hero.module.scss';

const Hero = () => {
	return (
		<>
			<section className={`${styles.hero} hero text-gray-400 body-font min-h-screen `}>
				<div className='container mx-auto flex px-5  md:flex-row flex-col items-center min-h-screen'>
					<div className='lg:flex-grow w-1/2 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className={`${styles.hero__title} title-font sm:text-4xl text-3xl mb-6 font-medium`}>
							A <span>DECENTRALIZED</span> ETHEREUM SCALING PLATFORM
						</h1>
						<p className='mb-8 leading-relaxed'>
							Loreum ipsum is dummy text that should be go here to create balance between hero text and
							subtext.
						</p>
						<div className='flex justify-center'>
							<button className='inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg'>
								Button
							</button>
							<button className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>
								Button
							</button>
						</div>
					</div>
					<div className=' w-1/2  md:w-1/2 flex items-center justify-center'>
						<video autoPlay muted width='500px' height=''>
							<source src='/assets/Videos/01.mp4' type='video/mp4' />
						</video>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
