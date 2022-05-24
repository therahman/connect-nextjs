import React from 'react';
import { Link } from 'react-scroll';

const PaginationSection = (porps) => {
	console.log(porps);

	return (
		<>
			<div
				className={`${porps.className} hidden md:flex flex-col gap-2 fixed top-[50%] z-[100] left-[8%] translate-y-[-50%] `}
			>
				<Link
					activeClass='active'
					className='w-3 h-3 bg-zinc-800 rounded-[50%] hover:bg-gray-200 '
					to='hero'
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
				></Link>
				<Link
					activeClass='active'
					className='w-3 h-3 bg-zinc-800 rounded-[50%] hover:bg-gray-200'
					to='what-connect'
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
				></Link>
				<Link
					className='w-3 h-3 bg-zinc-800 rounded-[50%] hover:bg-gray-200'
					to='what-EVM'
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
				></Link>
				<Link
					activeClass='active'
					className='w-3 h-3 bg-zinc-800 rounded-[50%] hover:bg-gray-200'
					to='vision'
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
				></Link>
				<Link
					activeClass='active'
					className='w-3 h-3 bg-zinc-800 rounded-[50%] hover:bg-gray-200'
					to='connect-network'
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
				></Link>
				<Link
					activeClass='active'
					className='w-3 h-3 bg-zinc-800 rounded-[50%] hover:bg-gray-200'
					to='features'
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
				></Link>
				<Link
					activeClass='active'
					className='w-3 h-3 bg-zinc-800 rounded-[50%] hover:bg-gray-200'
					to='technology'
					spy={true}
					smooth={true}
					offset={150}
					duration={800}
				></Link>
				<Link
					activeClass='active'
					className='w-3 h-3 bg-zinc-800 rounded-[50%] hover:bg-gray-200'
					to='framework-protocol'
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
				></Link>
				<Link
					activeClass='active'
					className='w-3 h-3 bg-zinc-800 rounded-[50%] hover:bg-gray-200'
					to='Stand-Alone-Chains'
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
				></Link>
				<Link
					activeClass='active'
					className='w-3 h-3 bg-zinc-800 rounded-[50%] hover:bg-gray-200'
					to='Secured-Chains'
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
				></Link>
				<Link
					activeClass='active'
					className='w-3 h-3 bg-zinc-800 rounded-[50%] hover:bg-gray-200'
					to='Connect-Foundation'
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
				></Link>
			</div>
		</>
	);
};

export default PaginationSection;
