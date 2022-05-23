import Nero from './Hero/index'
import WhatIsConnect from './WhatIsConnect/index'
import WhatIsAnEVM from './WhatIsAnEVM/index'
import Vision from './Vision/index'
import ConnectNetwork from './ConnectNetwork/index'
import Features from './Features'
import Technology from './Technology'
import ConnectFoundation from './ConnectFoundation'
import FrameworkProtocol from './FrameworkProtocol'
import StandAloneChains from './StandAloneChains'
import SecuredChains from './SecuredChains'
import Footer from '../../components/Footer'
import { Link } from 'react-scroll'

// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  return (
    <>
      <div className=" flex flex-col gap-2 fixed top-[50%] z-[100] left-[8%] translate-y-[-50%] ">
        <Link
          activeClass="active"
          className="w-3 h-3 bg-gray-800 rounded-[50%] hover:bg-gray-200 "
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        ></Link>
        <Link
          activeClass="active"
          className="w-3 h-3 bg-gray-800 rounded-[50%] hover:bg-gray-200"
          to="what-connect"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        ></Link>
        <Link
          className="w-3 h-3 bg-gray-800 rounded-[50%] hover:bg-gray-200"
          to="what-EVM"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        ></Link>
        <Link
          activeClass="active"
          className="w-3 h-3 bg-gray-800 rounded-[50%] hover:bg-gray-200"
          to="vision"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        ></Link>
        <Link
          activeClass="active"
          className="w-3 h-3 bg-gray-800 rounded-[50%] hover:bg-gray-200"
          to="connect-network"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        ></Link>
        <Link
          activeClass="active"
          className="w-3 h-3 bg-gray-800 rounded-[50%] hover:bg-gray-200"
          to="features"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        ></Link>
        <Link
          activeClass="active"
          className="w-3 h-3 bg-gray-800 rounded-[50%] hover:bg-gray-200"
          to="technology"
          spy={true}
          smooth={true}
          offset={150}
          duration={800}
        ></Link>
        <Link
          activeClass="active"
          className="w-3 h-3 bg-gray-800 rounded-[50%] hover:bg-gray-200"
          to="framework-protocol"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        ></Link>
        <Link
          activeClass="active"
          className="w-3 h-3 bg-gray-800 rounded-[50%] hover:bg-gray-200"
          to="Stand-Alone-Chains"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        ></Link>
        <Link
          activeClass="active"
          className="w-3 h-3 bg-gray-800 rounded-[50%] hover:bg-gray-200"
          to="Secured-Chains"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        ></Link>
        <Link
          activeClass="active"
          className="w-3 h-3 bg-gray-800 rounded-[50%] hover:bg-gray-200"
          to="Connect-Foundation"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        ></Link>
      </div>
      <Nero />
      <div className=" bg-shep">
        <WhatIsConnect />
        <WhatIsAnEVM />
      </div>
      <Vision />
      <div className=" bg-shep">
        <ConnectNetwork />
        <Features />
      </div>
      <Technology />
      <div className="framework-bg bg-fixed">
        <FrameworkProtocol />
        <StandAloneChains />
        <SecuredChains />
      </div>

      <ConnectFoundation />
      <Footer />
    </>
  )
}

export default Index
