import Image from 'next/image';
import styles from './framework.module.scss';
const FrameworkProtocol = () => {
	return (
		<>
			<section className='text-gray-400 body-font min-h-screen ' id='framework-protocol'>
				<div className='container mx-auto flex lg:px-32 px-5 flex-col py-24 items-center justify-center min-h-screen '>
					<div className=' w-full flex flex-col md:flex-row items-center '>
						<div className=' md:w-1/2 w-full '>
							<div className='flex flex-col'>
								<div className='flex'>
									<h1 className=' section_title text-[#eff2a6] title-font lg:text-5xl text-3xl mb-8 font-medium'>
										FRAMEWORK
									</h1>
								</div>
							</div>

							<div className='flex gap-5 flex-col w-full md:pr-12'>
								<div className=' flex gap-4 w-full '>
									<img
										className='h-8 rounded w-8 object-cover object-center '
										src='/assets/images/SVG/tick.svg'
										alt='tick'
									/>
									<p className='font-light text-gray-300'>
										One click deployment of Ethereum compatible blockchain templates.
									</p>
								</div>
								<div className=' flex gap-4 w-full '>
									<img
										className='h-8 rounded w-8 object-cover object-center '
										src='/assets/images/SVG/tick.svg'
										alt='tick'
									/>
									<p className='font-light text-gray-300'>
										Increasing module sets (pluggable consensus, staking, governance, EVM/ Evasm
										execution environments, dispute resolvers, etc for developers to create custom
										blockchains
									</p>
								</div>
							</div>
						</div>
						<div className='   p-4'>
							<div className={`${styles.framework} `}>
								<div className={`${styles.framework_item1}`}>
									<Image src='/assets/images/SVG/framework-icon-01.svg' width={200} height={400} />
								</div>
								<div className={`${styles.framework_item2}`}>
									<Image src='/assets/images/SVG/framework-icon-02.svg' width={200} height={400} />
								</div>
							</div>
						</div>
					</div>
					<div className=' w-full p-5 flex px-5 flex-col md:flex-row items-center justify-end '>
						<div className='md:w-1/2 w-full '>
							<div className='flex flex-col'>
								<div className='flex'>
									<h1 className=' section_title text-[#eff2a6] title-font lg:text-5xl text-3xl mb-8 font-medium'>
										PROTOCOL
									</h1>
								</div>
							</div>

							<div className='flex gap-5 flex-col w-full md:pr-12'>
								<div className=' flex gap-4 w-full '>
									<img
										className='h-8 rounded w-8 object-cover object-center '
										src='/assets/images/SVG/tick.svg'
										alt='tick'
									/>
									<p className='font-light text-gray-300'>
										Interconnectivity of activities between blockchains in Connect, as well as
										between blockchains in Connect and Ethereum
									</p>
								</div>
								<div className=' flex gap-4 w-full '>
									<img
										className='h-8 rounded w-8 object-cover object-center '
										src='/assets/images/SVG/tick.svg'
										alt='tick'
									/>
									<p className='font-light text-gray-300'>
										Bespoke security service as available on Ethereum or by various trusted
										validators
									</p>
								</div>
							</div>
						</div>
						<div className='   p-4'>
							<div className={`${styles.protocol} `}>
								<div className={`${styles.protocol_item1}`}>
									<Image src='/assets/images/SVG/protocol-icon-01.svg' width={200} height={400} />
								</div>
								<div className={`${styles.protocol_item2}`}>
									<Image src='/assets/images/SVG/protocol-icon-02.svg' width={200} height={400} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FrameworkProtocol;
