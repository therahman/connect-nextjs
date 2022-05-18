import Nero from './Hero/index';
import WhatIsConnect from './WhatIsConnect/index';
import WhatIsAnEVM from './WhatIsAnEVM/index';
import Vision from './Vision/index';
import ConnectNetwork from './ConnectNetwork/index';
import Features from './Features';
import Technology from './Technology';
import ConnectFoundation from './ConnectFoundation';
import StandAloneChains from './StandAloneChains';
import SecuredChains from './SecuredChains';

const Index = () => {
	return (
		<>
			<Nero />
			<WhatIsConnect />
			<WhatIsAnEVM />
			<Vision />
			<ConnectNetwork />
			<Features/>
			<Technology/>
			
			<StandAloneChains/>
			<SecuredChains/>
			<ConnectFoundation/>
			<Footer/>

		</>
	);
};

export default Index;
