const Technology = () => {
  return (
    <>
      <section class="text-gray-400 body-font min-h-screen" id="technology">
        <div className="container lg:px-32 px-5 py-24 mx-auto flex md:flex-row flex-col items-center min-h-screen ">
          <div className="lg:w-2/5 md:w-1/2 w-full p-5 md:text-left text-center">
            <div className="flex md:justify-start justify-center">             
              <h1 className=" section_title text-[#eff2a6] title-font lg:text-5xl text-3xl mb-8 font-medium">
              TECHNOLOGY
              </h1>
            </div>

            <p className="mb-8 font-light text-gray-300">
              Providing a firm base for the people of the internet Connect
              brings you the necessary components and tools to be part of an
              unlimited economy and society Connect is a platform where any
              project can have its dedicated, optimized instance of Ethereum
              which combines the best of independent blockchains (scalability,
              and flexibility) and Ethereum (interconnectivity, and developer
              experience) 
            </p>
            <p className="font-light text-gray-300">These blockchains are also in compliance with the
              existing Ethereum tools such as Metamask MyCrypto Remix and
              others, and can make various transactions between themselves using
              Ethereum</p>
          </div>
          <div className="md:w-1/2 w-full flex relative items-center justify-center md:min-h-screen min-h-[50vh] overflow-hidden">
            <video className='scale-[1] md:scale-[1.4]  absolute' autoPlay muted width="100%" height="">
              <source src="assets/Videos/06.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  )
}

export default Technology
