
function Hero() {
  return (
    // Step1:First create the box.
    <section className="relative min-h-screen">

      {/* Step2: Fill the box with image. */}
      <img src="/Avengers.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />

      {/* Step3:Add Dark Overlay like Putting sunglasses on the image. */}
      <div className="border absolute inset-0 bg-linear-to-r from-black/80 to-black/30">
        {/* Step4:Content */}
        <div className="relative z-10 ">
          <div className=" max-w-6xl mx-auto  min-h-screen flex items-center justify-between">
            <div className="max-w-2xl ">
              {/* badge */}
              <p className="shadow-sm px-2 py-1 font-semibold bg-white/10 w-fit rounded-full">Professional and Skilled</p>

              {/* heading */}
              <h1 className="text-shadow-sm text-6xl text-white font-bold leading-tight">Develop's Websites
                <br /><span> For businesses</span><br />
                <span>At Low Prices</span>
              </h1>

              {/* buttons */}
              <div className=" mt-7 flex gap-5">
                <button className="shadow-sm px-4 py-1 bg-blue-500 rounded-full">Call</button>
                <button className="shadow-sm px-4 py-1 bg-blue-500 rounded-full">Email</button>
              </div>
            </div>
            <img src="/Avengers.jpg" alt="" className="w-70 h-fit border-2 border-amber-500 rounded-2xl " />

          </div>

          {/* image */}


        </div>


      </div>

    </section>
  )
}

export default Hero
