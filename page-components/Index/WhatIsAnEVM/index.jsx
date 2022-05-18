import React from 'react';
// import WhatIsAnEVMVideo from '../../../assets/Videos/03.mp4';

const WhatIsAnEVM = () => {
	return (
		<>
			<section class='text-gray-400 body-font min-h-screen'>
				<div class='container px-5 py-24 mx-auto'>
					<div class='flex flex-col text-center w-full mb-4'>
						<h1 className=' section_title text-[#eff2a6] title-font text-5xl s:text-4xl text-3xl mb-8 font-medium'>
							WHAT IS AN EVM
						</h1>
						<p class='lg:w-2/3 mx-auto leading-relaxed text-base'>
							Ethereum Virtual Machine (EVM) is a computation engine which acts like a decentralized
							computer that has millions of executable projects. It acts as the virtual machine which is
							the bedrock of Ethereum's entire operating structure.
						</p>
					</div>
					<div class='flex flex-wrap -m-4 text-center'>
						<video autoPlay muted width='100%' height=''>
							<source src='assets/Videos/03.mp4' type='video/mp4' />
						</video>
					</div>
				</div>
			</section>
		</>
	);
};

export default WhatIsAnEVM;