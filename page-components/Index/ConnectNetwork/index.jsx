import Image from 'next/image';

// import ConnectNetworkVideo from '../../../assets/Videos/05.mp4';
const ConnectNetwork = () => {
	return (
		<>
			<section className='text-gray-400 body-font min-h-screen'>
				<div className='container px-5 py-24 mx-auto flex flex-wrap'>
					<div className='lg:w-1/2 md:w-1/2 lg:py-6 mb-10 lg:pl-12 lg:text-left border-1'>
						<div className='flex flex-col  mb-8'>
							<div className='flex'>
								<h1 className=' section_title text-[#eff2a6] title-font lg:text-5xl text-3xl mb-8 font-medium'>
									THE CONNECT NETWORK
								</h1>
							</div>
							<p className='font-bold text-white font-light'>
								Connect, like its namesake, connects Ethereum compatible blockchain networks in its own
								framework
							</p>
						</div>
						<div className='flex flex-col flex-wrap divide-y-[1px] divide-[#eff2a6]'>
							<div className='flex gap-4 items-center py-5'>
								<div className=' inline-flex items-center justify-center '>
									<Image
										src='/assets/images/SVG/network-icon-01.svg'
										alt='network-icon-01'
										width={40}
										height={40}
									/>
								</div>
								<p className='text-white text-md title-font font-light'>
									Availability of blockchain network templates for use
								</p>
							</div>
							<div className='flex gap-4 items-center py-5'>
								<div className=' inline-flex items-center justify-center '>
									<Image
										src='/assets/images/SVG/network-icon-02.svg'
										alt='network-icon-02'
										width={40}
										height={40}
									/>
								</div>
								<p className='text-white text-md title-font font-light'>
									Constant evolving modules for developing custom networks
								</p>
							</div>
							<div className='flex gap-4 items-center py-5'>
								<div className=' inline-flex items-center justify-center '>
									<Image
										src='/assets/images/SVG/network-icon-03.svg'
										alt='network-icon-03'
										width={40}
										height={40}
									/>
								</div>
								<p className='text-white text-md title-font font-light'>
									Interconnectivity of activities between Ethereum and other blockchains
								</p>
							</div>
							<div className='flex gap-4 items-center py-5'>
								<div className=' inline-flex items-center justify-center '>
									<Image
										src='/assets/images/SVG/network-icon-04.svg'
										alt='network-icon-04'
										width={40}
										height={40}
									/>
								</div>
								<p className='text-white text-md title-font font-light'>
									Evolving modules for enabling interconnectivity for existing blockchain networks
								</p>
							</div>
							<div className='flex gap-4 items-center py-5'>
								<div className=' inline-flex items-center justify-center '>
									<Image
										src='/assets/images/SVG/network-icon-05.svg'
										alt='network-icon-05'
										width={40}
										height={40}
									/>
								</div>
								<p className='text-white text-md title-font font-light'>Bespoke security service</p>
							</div>
						</div>
					</div>
					<div className='lg:w-1/2 md:w-1/2 mb-10 lg:mb-0 flex items-center'>
						<video autoPlay muted width='100%' height=''>
							<source src='assets/Videos/05.mp4' type='video/mp4' />
						</video>
					</div>
				</div>
			</section>
		</>
	);
};

export default ConnectNetwork;
