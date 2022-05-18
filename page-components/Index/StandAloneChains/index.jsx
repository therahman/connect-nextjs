const StandAloneChains = () => {
  return (
    <>
      <section class="text-gray-400 body-font min-h-screen">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center min-h-screen ">
          <div className="lg:w-1/2 md:w-1/2 w-full p-5">
            <div className="flex">
              <h1 className=" section_title text-[#fff] title-font text-4xl s:text-4xl mb-8 font-medium">
                STAND ALONE CHAINS
              </h1>
            </div>

            <p className="mb-8 leading-relaxed">
              Completely localized Ethereum compatible blockchain networks These
              networks have full control of their own security, such as their
              own group of authorizers Stand alone chains tradeoff the
              authorizers’ validity for a high level of independence and
              flexibility
            </p>
            <div className="flex gap-3 w-full ">
              <div className=" flex gap-3 w-1/2 ">
                <img
                  class="h-10 rounded w-10 object-cover object-center "
                  src="/assets/images/SVG/tick.svg"
                  alt="tick"
                />
                <p>Enterprise Networks</p>
              </div>
              <div className=" flex gap-3 w-1/2 ">
                <img
                  class="h-10 rounded w-10 object-cover object-center "
                  src="/assets/images/SVG/tick.svg"
                  alt="tick"
                />
                <p>Established projects with strong communities</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full md:mt-0 mt-10">
            <img
              class="h-full rounded w-full object-cover object-center "
              src="/assets/images/SVG/Stand-Alone-Chains.svg"
              alt="connect-foundation"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default StandAloneChains
