import React, { useEffect, useState, useRef, useMemo } from 'react';

import Nero from './Hero/index';
import WhatIsConnect from './WhatIsConnect/index';
import WhatIsAnEVM from './WhatIsAnEVM/index';
import Vision from './Vision/index';
import ConnectNetwork from './ConnectNetwork/index';
import Features from './Features';
import Technology from './Technology';
import ConnectFoundation from './ConnectFoundation';
import FrameworkProtocol from './FrameworkProtocol';
import StandAloneChains from './StandAloneChains';
import SecuredChains from './SecuredChains';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';
import PaginationSection from '../../components/PaginationSection';

const Index = () => {
	const targetRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	const callbackFuntion = (entries) => {
		const [entry] = entries;
		setIsVisible(entry.isIntersecting);
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
		const currentTarget = targetRef.current;
		if (currentTarget) observer.observe(currentTarget);
		return () => {
			if (currentTarget) observer.unobserve(currentTarget);
		};
	}, [targetRef, options]);

	return (
		<>
			<PaginationSection className={!isVisible ? '' : 'PaginationSection'} />
			<Nero />
			<div className=' bg-shep'>
				<WhatIsConnect />
				<WhatIsAnEVM />
				<ScrollToTop />
			</div>
			<Vision />
			<div className=' bg-shep'>
				<ConnectNetwork />
				<Features />
			</div>
			<Technology />
			<div className='framework-bg bg-fixed'>
				<FrameworkProtocol />
				<StandAloneChains />
				<SecuredChains />
			</div>
			<ConnectFoundation />

			<Footer item={targetRef} />
		</>
	);
};

export default Index;
