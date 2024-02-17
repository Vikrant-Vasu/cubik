import React from "react";

function WhyUs() {
  return (
    <div className="max-w--[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 bg-red-50">
      <div className="md:left-[7%] max-w-[800px] m-auto  p-5 py-10 px-10">
        <h2 className="font-semibold text-2xl px-1 py-8">WHY US</h2>
        <h1 className="font-bold text-5xl md:text-6xl  drop-shadow-2xl mb-3  text-orange-500 ">
          The most seamless service management
        </h1>
        <p className="max-w-[750px] text-3xl drop-shadow-2xl py-10  text-gray-700 mb-3 mr-4">
          Built keeping everyone's needs in mind.
        </p>
        <button className="bg-red-50 border-black text-black text-2xl px-12 py-6 font-bold hover:shadow-xl">
          Know more
        </button>
      </div>
    </div>
  );
}

export default WhyUs;
