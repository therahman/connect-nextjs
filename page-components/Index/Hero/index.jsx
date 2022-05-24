import gsap from 'gsap';
import styles from './hero.module.scss';
import { useScroll } from 'react-use';

const Hero = () => {
	return (
		<>
			<section className={`${styles.hero} hero text-gray-400 body-font min-h-screen `} id='hero'>
				<div className=' overflow-hidden relative container mx-auto flex lg:px-32 px-5 md:pt-0 py-32 md:flex-row flex-col items-center min-h-screen'>
					<div className='lg:flex-grow md:w-1/2 w-full lg:pr-10 md:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className={`${styles.hero__title} title-font lg:text-6xl text-4xl mb-6 font-medium`}>
							A <span>DECENTRALIZED</span> ETHEREUM SCALING PLATFORM
						</h1>
						<p className='mb-8 font-light text-[#E6E6E6]'>
							Loreum ipsum is dummy text that should be go here to create balance between hero text and
							subtext.
						</p>
						<div className='flex gap-4 justify-center'>
							<button className={`${styles.button} `}>
								<span>Button</span>
							</button>
							<button className={`${styles.button} `}>
								<span>Button</span>
							</button>
						</div>
					</div>
					<div className=' md:w-1/2 w-full flex relative items-center justify-center md:min-h-screen min-h-[70vh]  overflow-hidden'>
						<video className='scale-[1] md:scale-[1.3]  absolute' autoPlay muted width='500px' height=''>
							<source src='/assets/Videos/01.mp4' type='video/mp4' />
						</video>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
