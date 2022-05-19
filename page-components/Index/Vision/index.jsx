import React from 'react';
// import VisionVideo from '../../../assets/Videos/04.mp4';
const Vision = () => {
	return (
		<>
			<section className=' text-gray-400 body-font min-h-screen'>
				<div className='container mx-auto flex px-5  md:flex-row flex-col items-center min-h-screen'>
					<div className='lg:w-1/2 md:w-1/2 lg:flex-grow lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className=' section_title text-[#eff2a6] title-font lg:text-5xl text-3xl mb-8 font-medium'>
							OUR VISION
						</h1>
						<button className='flex gap-2 items-center border-none py-2 px-5 border rounded-full text-black bg-[#eff2a6] mb-4'>
							WE WANT TO SEE A LIMITLESS WORLD
							<svg
								className='fill-[#000] w-6 h-6'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width='24'
								height='24'
							>
								<path fill='none' d='M0 0h24v24H0z' />
								<path d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z' />
							</svg>
						</button>
						<p className='mb-8 font-light text-gray-300 '>
							A world that connects people and machines to exchange value with no limitations and at full
							efficiency A world where communities can experience borderless success
						</p>
					</div>
					<div className='lg:w-1/2 md:w-1/2 '>
						<video autoPlay muted width='100%' height=''>
							<source src='assets/Videos/04.mp4' type='video/mp4' />
						</video>
					</div>
				</div>
			</section>
		</>
	);
};

export default Vision;
