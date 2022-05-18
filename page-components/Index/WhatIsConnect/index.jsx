import React from 'react';
// import WhatIsConnectVideo from '../../../assets/Videos/02.mp4';
const WhatIsConnect = () => {
	return (
		<>
			<section className=' text-gray-400 body-font min-h-screen'>
				<div className='container mx-auto flex px-5  md:flex-row flex-col items-center min-h-screen'>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<video autoPlay muted width='500px' height=''>
							<source src='assets/Videos/02.mp4' type='video/mp4' />
						</video>
					</div>
					<div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className=' section_title text-[#eff2a6] title-font text-5xl s:text-4xl text-3xl mb-8 font-medium'>
							WHAT IS CONNECT
						</h1>
						<p className='mb-8 leading-relaxed'>
							Connect is an Ethereum compatible blockchain network in its own framework. Connect Chan
							operates as a layer 2 scaling network on EVM. The network enables developers to build
							scalable user friendly Apps with high performance speeds and low transaction costs. As the
							ecosystem matures over a period of time, the number is users will increase and provide a
							maximum potential to grow for the early adopters
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default WhatIsConnect;
