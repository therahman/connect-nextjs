import React from 'react';
// import WhatIsAnEVMVideo from '../../../assets/Videos/03.mp4';

const WhatIsAnEVM = () => {
	return (
		<>
			<section className=' body-font min-h-screen' id='what-EVM'>
				<div className='container overflow-hidden relative px-5 py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-4'>
						<div className='flex items-center justify-center'>
							<h1 className=' section_title text-[#eff2a6] title-font lg:text-5xl text-3xl mb-8 font-medium'>
								WHAT IS AN EVM
							</h1>
						</div>
						<p className='lg:w-2/3 mx-auto font-light text-gray-300 '>
							Ethereum Virtual Machine (EVM) is a computation engine which acts like a decentralized
							computer that has millions of executable projects. It acts as the virtual machine which is
							the bedrock of Ethereum's entire operating structure.
						</p>
					</div>
					<div className='flex flex-wrap text-center justify-center mt-12 md:mt-0'>
						<video autoPlay muted width='1200' height=''>
							<source src='assets/Videos/03.mp4' type='video/mp4' />
						</video>
					</div>
					<h1 className='right-left moveing_text '>
						WHAT IS AN EVM WHAT IS AN EVM WHAT IS AN EVM WHAT IS AN EVM WHAT IS AN EVM WHAT IS AN EVM WHAT
						IS AN EVM WHAT IS AN EVM OUR VISION WHAT IS AN EVM
					</h1>
				</div>
			</section>
		</>
	);
};

export default WhatIsAnEVM;
