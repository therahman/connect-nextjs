import Image from 'next/image'

const StandAloneChains = () => {
  return (
    <>
      <section class="text-gray-400 body-font min-h-screen" id='Stand-Alone-Chains'>
        <div className="container mx-auto flex lg:px-32 px-5 py-24  md:flex-row flex-col items-center min-h-screen ">
          <div className="lg:w-1/2 md:w-1/2 w-full p-5">
            <div className="flex">
              <h1 className=" section_title text-[#fff] title-font text-3xl lg:text-4xl mb-8 font-medium">
                STAND ALONE CHAINS
              </h1>
            </div>

            <p className="mb-8 font-light text-gray-300">
              Completely localized Ethereum compatible blockchain networks These
              networks have full control of their own security, such as their
              own group of authorizers Stand alone chains tradeoff the
              authorizers’ validity for a high level of independence and
              flexibility
            </p>
            <div className="flex gap-3 w-full flex-col md:flex-row ">
              <div className=" flex gap-3 items-start md:w-1/2 w-full  ">
                <Image
                  src="/assets/images/SVG/tick.svg"
                  alt="tick"
                  width={25}
                  height={25}
                />

                <p className="font-light text-gray-300">Enterprise Networks</p>
              </div>
              <div className=" flex gap-3 items-start md:w-1/2 w-full  ">
                <Image
                  src="/assets/images/SVG/tick.svg"
                  alt="tick"
                  width={25}
                  height={25}
                />
                <p className="font-light text-gray-300">
                  Established projects with strong communities
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full md:mt-0 mt-10">
            <div className="flex items-center justify-center md:p-0 p-8  ">
              <Image
                src="/assets/images/SVG/Stand-Alone-Chains.svg"
                width={500}
                height={500}
                alt="Stand-Alone-Chains"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StandAloneChains
