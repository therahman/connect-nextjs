import Image from 'next/image';

const ConnectFoundation = () => {
	return (
		<>
			<section className='text-gray-400 body-font min-h-screen' id='Connect-Foundation'>
				<div className='container mx-auto flex lg:px-32 px-5  md:flex-row flex-col items-center min-h-screen '>
					<div className='lg:w-3/5 md:w-1/2 w-full '>
						<div className='flex items-center md:justify-start justify-center'>
							<h1 className=' section_title text-[#eff2a6] title-font lg:text-5xl text-3xl mb-8 font-medium'>
								CONNECT FOUNDATION
							</h1>
						</div>

						<p className='mb-8 font-light text-gray-300 md:text-left text-center'>
							We believe that Connect Network will drive social, political and economic innovation on a
							global scale. The Connect Foundation is one among many other entities in the Connect
							ecosystem and stands as part of the community in support of the Connect Network and
							ecosystem. To do so, the Connect Foundation deploys resources to entities and initiatives
							that will help to ensure the long-term success of Connect Network.
						</p>
						<p className='font-light text-gray-300  md:text-left text-center'>
							We view Connect as a long-term project – where a solid technical foundation is imperative in
							this crowded space of Layer 2 scaling networks and its global adoption. The role of the
							Connect Foundation is to sustainably deploy the resources that are under control to support
							the long-term success of Connect Network. This long-term success will only be possible with
							a vibrant ecentralized ecosystem. Our goal is to ensure that the independent organizations
							in this ecosystem have what they need to solve the challenges that lay ahead.
						</p>
					</div>
					<div className='lg:w-2/5 md:w-1/2 w-full md:mt-0 mt-10'>
						<Image
							className='h-full rounded w-full object-cover object-center '
							src='/assets/images/SVG/connect-foundation2.png'
							alt='connect-foundation'
							width={500}
							height={500}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default ConnectFoundation;
