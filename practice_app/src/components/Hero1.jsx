import React from "react";

function Hero1() {
  return (
    <div className="bg-red-50">
      <div className="flex flex-row  justify-center">
        <div className="flex flex-col py-16 justify-center">
          <p className="drop-shadow-2xl py-8 text-2xl font-semibold text-black">
            SUPPORT FOR ALL TYPES OF OUTLET/TEXHNOLOGY/PEOPLE
          </p>
          <h1 className="font-bold text-5xl md:text-6xl drop-shadow-2xl text-orange-500">
            Build from inputs
          </h1>
        </div>
      </div>
      <div className="max-w-[1500px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 ">
        <div>
          <img
            className="rounded-xl"
            src="https://cubik.in/wp-content/uploads/2023/12/pexels-kindel-media-7688170-1.jpg"
            alt="/"
          />
        </div>

        <div className="flex flex-col h-full justify-center pl-8">
        <p className="max-w-[900px] font-semibold drop-shadow-2xl  text-2xl text-black">
            A PARTNER IN YOUR SUCCESS
          </p>
          <h1 className="font-bold text-5xl md:text-6xl py-8 drop-shadow-2xl text-orange-500">
            Not just software. Our team is ready to help you succeed in the
            long-term.
          </h1>
          <p className="max-w-[900px] drop-shadow-2xl py-7 text-2xl text-gray-800">
            At Cubik, we’re about building great food businesses, not selling
            software. We work with every one of our customers to deliver
            success: whatever it takes.
          </p>
          <p className="max-w-[900px] drop-shadow-2xl py-7 text-2xl text-gray-800">
            Our team works tirelessly to help Cubik’s customers innovate and
            excel, and our Managed Marketing team brings new customers to your
            door.
          </p>
          <div className="pt-8">
          <button className=" text-black text-2xl border-black px-20 py-4  hover:shadow-xl font-bold">
            Know more about us
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
