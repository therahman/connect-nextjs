import Image from 'next/image';

const SecuredChains = () => {
	return (
		<>
			<section class='text-gray-400 body-font min-h-screen'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center min-h-screen '>
					<div className='lg:w-1/2 md:w-1/2 w-full p-5'>
						<div className='flex'>
							<h1 className=' section_title text-[#fff] title-font text-3xl lg:text-4xl mb-8 font-medium'>
								SECURED CHAINS
							</h1>
						</div>

						<p className='mb-8 font-light text-gray-300'>
							Blockchain networks that use “security as a service” instead of their own pool of
							authorizers. The security service can be provided directly by Ethereum or by professional
							validators. Secured chains tradeoff a portion of independence and flexibility for a high
							level of security.
						</p>
						<div className='flex gap-3 w-full '>
							<div className=' flex gap-3 w-1/2 '>
								<img
									className='h-8 rounded w-8 object-cover object-center '
									src='/assets/images/SVG/tick.svg'
									alt='tick'
								/>
								<p className='font-light text-gray-300'>Startups</p>
							</div>
							<div className=' flex gap-3 w-1/2 '>
								<img
									className='h-8 rounded w-8 object-cover object-center '
									src='/assets/images/SVG/tick.svg'
									alt='tick'
								/>
								<p className='font-light text-gray-300'>Security focused projects</p>
							</div>
						</div>
					</div>
					<div className='lg:w-1/2 md:w-1/2 w-full md:mt-0 mt-10'>
						<div className='flex items-center justify-center md:p-0 p-8  '>
							<Image
								src='/assets/images/SVG/Secured-Chains.svg'
								alt='Secured-Chains'
								width={600}
								height={600}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SecuredChains;
