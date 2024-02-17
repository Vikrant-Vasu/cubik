import React from "react";

function Hero() {
  return (
    <div className="w-full h-screen flex flex-row  ">
      <img
        className="top-0 left-0 w-full h-screen object-cover "
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp9049759.jpg&f=1&nofb=1&ipt=971bd28b61c290e765723e655516632d5472e3045621a2149d4c18ca73f9baec&ipo=images"
        alt="/"
      />

      <div className="absolute  w-full py-60  ">
        <div className="md:left-[7%] max-w-[800px] m-auto absolute p-5 px-10 space-y-5">
          <h1 className="font-bold text-5xl md:text-6xl drop-shadow-2xl text-orange-500">
            Crushing Complexity With Relentless Automation!
          </h1>
          <p className="max-w-[800px] drop-shadow-2xl py-10 text-3xl text-gray-800">
            A new era of service excellence. Have the power to transform the
            customer’s service experience, streamline operations, and enhance
            overall efficiency.
          </p>
          <button className="bg-black hover:shadow-xl text-white text-2xl px-12 py-4 font-bold">
            Take a free demo
          </button>
        </div>
      </div>
      {/* <div className='absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 px-80'>
        <img src="https://cubik.in/wp-content/uploads/2023/12/Mockup-1-1536x1163.png" alt="/" />
      </div> */}
    </div>
  );
}

export default Hero;
