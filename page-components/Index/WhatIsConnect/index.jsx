import React, { useEffect, useState, useRef, useMemo } from 'react';

const WhatIsConnect = () => {
	const animationRef = useRef(null);
	const [animation, setAnimation] = useState(false);

	const callbackFuntion = (entries) => {
		const [entry] = entries;
		setAnimation(entry.isIntersecting);
	};
	const options = useMemo(() => {
		return {
			root: null,
			rootMargin: '0px',
			threshold: 0,
		};
	}, []);
	useEffect(() => {
		const observer = new IntersectionObserver(callbackFuntion, options);
		const currentTarget = animationRef.current;
		if (currentTarget) observer.observe(currentTarget);
		return () => {
			if (currentTarget) observer.unobserve(currentTarget);
		};
	}, [animationRef, options]);
	return (
		<>
			<section className=' body-font min-h-screen' id='what-connect' ref={animationRef}>
				<div className='container overflow-hidden relative mx-auto flex lg:px-32 px-5  md:flex-row flex-col items-center min-h-screen'>
					<div className=' md:w-1/2 w-full mb-14 md:mb-0 flex items-center justify-center'>
						<video className='' autoPlay muted width='400px' height=''>
							<source src='assets/Videos/02.mp4' type='video/mp4' />
						</video>
					</div>
					<div className='lg:flex-grow md:w-1/2 w-full lg:pl-20 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className=' section_title text-[#eff2a6] title-font lg:text-5xl text-3xl mb-8 font-medium'>
							WHAT IS CONNECT
						</h1>
						<p className='mb-8 font-light text-gray-300 '>
							Connect is an Ethereum compatible blockchain network in its own framework. Connect Chan
							operates as a layer 2 scaling network on EVM. The network enables developers to build
							scalable user friendly Apps with high performance speeds and low transaction costs. As the
							ecosystem matures over a period of time, the number is users will increase and provide a
							maximum potential to grow for the early adopters
						</p>
					</div>
					<h1 className={`${!animation ? '' : 'left-right'} moveing_text`}>
						Connect Connect Connect Connect Connect Connect Connect Connect Connect Connect Connect Connect
						Connect Connect Connect Connect Connect Connect
					</h1>
				</div>
			</section>
		</>
	);
};

export default WhatIsConnect;
