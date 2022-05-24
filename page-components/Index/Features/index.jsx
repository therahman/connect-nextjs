import Image from 'next/image';

const Features = () => {
	return (
		<>
			<section className='text-gray-400 body-font min-h-screen' id='features'>
				<div className='container overflow-hidden relative lg:px-32 px-5  py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-4'>
						<div className='flex items-center justify-center'>
							<h1 className=' section_title text-[#eff2a6] title-font lg:text-5xl text-3xl mb-8 font-medium'>
								FEATURES
							</h1>
						</div>
						<p className='lg:w-2/3 mx-auto text-[#E6E6E6] font-light text-lg'>
							Connect utilizes the best of Ethereum and native blockchains for developers to optimize
						</p>
					</div>
					<div className='flex flex-wrap text-center pt-4'>
						<div className='flex flex-wrap  w-full'>
							<div className='lg:w-1/4 md:w-1/2 p-4'>
								<div className='h-full bg-gradient-to-b from-[#e0e39c17] flex flex-col items-center p-6 rounded-lg hover:-translate-y-4 hover:bg-[#e0e39c17] duration-300'>
									<div className='mb-6'>
										<Image
											src='/assets/images/SVG/features-icon-01.svg'
											width='80'
											height='80'
											alt='features-icon-01'
										/>
									</div>

									<div className='flex flex-col '>
										<h2 className="text-lg font-['Poppins'] text-white font-medium mb-4">
											ETH COMPATIBILITY
										</h2>
										<p className='font-extralight text-[#E6E6E6]'>
											Titan of Industry with available tech stacks, tools, languages, standards
											and enterprise adoption
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/4 md:w-1/2 p-4'>
								<div className='h-full bg-gradient-to-b from-[#e0e39c17] flex flex-col items-center p-6 rounded-lg hover:-translate-y-4 hover:bg-[#e0e39c17] duration-300'>
									<div className='mb-6'>
										<Image src='/assets/images/SVG/features-icon-02.svg' width='80' height='80' />
									</div>

									<div className='flex flex-col '>
										<h2 className="text-lg font-['Poppins'] text-white font-medium mb-4">
											CONFIGURABILITY
										</h2>
										<p className='font-extralight text-[#E6E6E6]'>
											Dedicated blockchains, adaptable consensus algorithms and Wasm execution
											ecosystems (WebAssembly (abbreviated Wasm) is a binary instruction format
											for a stack-based virtual machine.)
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/4 md:w-1/2 p-4'>
								<div className='h-full bg-gradient-to-b from-[#e0e39c17] flex flex-col items-center p-6 rounded-lg hover:-translate-y-4 hover:bg-[#e0e39c17] duration-300'>
									<div className='mb-6'>
										<Image src='/assets/images/SVG/features-icon-03.svg' width='80' height='80' />
									</div>

									<div className='flex flex-col '>
										<h2 className="text-lg font-['Poppins'] text-white font-medium mb-4">
											SECURITY
										</h2>
										<p className='font-extralight text-[#E6E6E6]'>
											Bespoke security service as available on Ethereum or by various trusted
											validators
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/4 md:w-1/2 p-4'>
								<div className='h-full bg-gradient-to-b from-[#e0e39c17] flex flex-col items-center p-6 rounded-lg hover:-translate-y-4 hover:bg-[#e0e39c17] duration-300'>
									<div className='mb-6'>
										<Image src='/assets/images/SVG/features-icon-04.svg' width='80' height='80' />
									</div>

									<div className='flex flex-col '>
										<h2 className="text-lg font-['Poppins'] text-white font-medium mb-4">
											SOVEREIGNTY
										</h2>
										<p className='font-extralight text-[#E6E6E6]'>
											Dedicated throughput and adaptable tech stack free from token deposits,
											fees, or permissions
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/4 md:w-1/2 p-4'>
								<div className='h-full bg-gradient-to-b from-[#e0e39c17] flex flex-col items-center p-6 rounded-lg hover:-translate-y-4 hover:bg-[#e0e39c17] duration-300'>
									<div className='mb-6'>
										<Image src='/assets/images/SVG/features-icon-05.svg' width='80' height='80' />
									</div>

									<div className='flex flex-col '>
										<h2 className="text-lg font-['Poppins'] text-white font-medium mb-4">
											INTERCONNECTIVITY
										</h2>
										<p className='font-extralight text-[#E6E6E6]'>
											Local support for internal transactions connecting to external systems
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/4 md:w-1/2 p-4'>
								<div className='h-full bg-gradient-to-b from-[#e0e39c17] flex flex-col items-center p-6 rounded-lg hover:-translate-y-4 hover:bg-[#e0e39c17] duration-300'>
									<div className='mb-6'>
										<Image src='/assets/images/SVG/features-icon-06.svg' width='80' height='80' />
									</div>

									<div className='flex flex-col '>
										<h2 className="text-lg font-['Poppins'] text-white font-medium mb-4">
											USER EXPERIENCE (UX)
										</h2>
										<p className='font-extralight text-[#E6E6E6]'>
											Akin to Web2, “zero gas” transactions, instant (deterministic) transaction
											finality
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/4 md:w-1/2 p-4'>
								<div className='h-full bg-gradient-to-b from-[#e0e39c17] flex flex-col items-center p-6 rounded-lg hover:-translate-y-4 hover:bg-[#e0e39c17] duration-300'>
									<div className='mb-6'>
										<Image src='/assets/images/SVG/features-icon-07.svg' width='80' height='80' />
									</div>

									<div className='flex flex-col '>
										<h2 className="text-lg font-['Poppins'] text-white font-medium mb-4">
											DEVELOPER EXPERIENCE
										</h2>
										<p className='font-extralight text-[#E6E6E6]'>
											Parallel to the Ethereum experience, protocol experience is not required,
											free from token deposits, fees, or permissions
										</p>
									</div>
								</div>
							</div>
							<div className='lg:w-1/4 md:w-1/2 p-4'>
								<div className=' h-full bg-gradient-to-b from-[#e0e39c17] flex flex-col items-center p-6 rounded-lg hover:-translate-y-4 hover:bg-[#e0e39c17] duration-300'>
									<div className='mb-6'>
										<Image src='/assets/images/SVG/features-icon-08.svg' width='80' height='80' />
									</div>

									<div className='flex flex-col '>
										<h2 className="text-lg font-['Poppins'] text-white font-medium mb-4">
											MODULARITY
										</h2>
										<p className='font-extralight text-[#E6E6E6]'>
											High adaptability and frequent updates, quick market introduction, and
											community networking
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<h1 className='right-left moveing_text '>
						FEATURES FEATURES FEATURES FEATURES FEATURES FEATURES FEATURES FEATURES FEATURES FEATURES
						FEATURES
					</h1>
				</div>
			</section>
		</>
	);
};

export default Features;
