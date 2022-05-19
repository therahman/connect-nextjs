const FrameworkProtocol = () => {
  return (
    <>
      <section class="text-gray-400 body-font min-h-screen">
        <div className="container mx-auto flex px-5 flex-col py-24 items-center justify-center min-h-screen ">
          <div className=" w-full p-5 flex px-5 flex-col md:flex-row items-center ">
            <div className=" md:w-1/2 w-full border">
              <div className="flex flex-col">
                <div className="flex">
                  <h1 className=" section_title text-[#eff2a6] title-font lg:text-5xl text-3xl mb-8 font-medium">
                    FRAMEWORK
                  </h1>
                </div>
              </div>

              <div className="flex gap-5 flex-col w-full ">
                <div className=" flex gap-4 w-full ">
                  <img
                    className="h-8 rounded w-8 object-cover object-center "
                    src="/assets/images/SVG/tick.svg"
                    alt="tick"
                  />
                  <p className="font-light text-gray-300">
                    One click deployment of Ethereum compatible blockchain
                    templates.
                  </p>
                </div>
                <div className=" flex gap-4 w-full ">
                  <img
                    className="h-8 rounded w-8 object-cover object-center "
                    src="/assets/images/SVG/tick.svg"
                    alt="tick"
                  />
                  <p className="font-light text-gray-300">
                    Increasing module sets (pluggable consensus, staking,
                    governance, EVM/ Evasm execution environments, dispute
                    resolvers, etc for developers to create custom blockchains
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full  border p-4">
              <div className="border relative">
              <img className="" src='/assets/images/SVG/Framework-Icon-01.svg' alt='white-logo' />

              <img className="absolute bottom-0 " src='/assets/images/SVG/Framework-Icon-02.svg' alt='white-logo' />
              </div>
            </div>
          </div>
          <div className=" w-full p-5 flex px-5 flex-col md:flex-row items-center ">
            <div className="md:w-1/2 w-full border">
              <div className="flex flex-col">
                <div className="flex">
                  <h1 className=" section_title text-[#eff2a6] title-font lg:text-5xl text-3xl mb-8 font-medium">
                  PROTOCOL
                  </h1>
                </div>
              </div>

              <div className="flex gap-5 flex-col w-full ">
                <div className=" flex gap-4 w-full ">
                  <img
                    className="h-8 rounded w-8 object-cover object-center "
                    src="/assets/images/SVG/tick.svg"
                    alt="tick"
                  />
                  <p className="font-light text-gray-300">
                  Interconnectivity of activities between blockchains in Connect, as well as between blockchains in Connect and Ethereum
                  </p>
                </div>
                <div className=" flex gap-4 w-full ">
                  <img
                    className="h-8 rounded w-8 object-cover object-center "
                    src="/assets/images/SVG/tick.svg"
                    alt="tick"
                  />
                  <p className="font-light text-gray-300">
                  Bespoke security service as available on Ethereum or by various trusted validators
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full  border p-4">
            
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FrameworkProtocol
