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

const Index = () => {
	return (
		<>
			<Nero />
			<div className=' bg-shep'>
				<WhatIsConnect />
				<WhatIsAnEVM />
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
			<Footer />
		</>
	);
};

export default Index;
