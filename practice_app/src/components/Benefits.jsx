import React from "react";

const skillsData = [
  {
    name: "Owners",
    icon: "https://cubik.in/wp-content/uploads/2023/12/pexels-cottonbro-studio-5971244-1-1024x682.jpg",
    link: "#",
    description1: "– Notice a real-time increase in the revenue numbers",
    description2: "– Access real-time data",
    description3: "– Increase Bottomline efficiency and improve Topline",
    aosDelay: "0",
  },
  {
    name: "Staff",
    icon: "https://cubik.in/wp-content/uploads/2023/12/pexels-andrea-piacquadio-3801426-768x512.jpg",
    link: "#",
    description1: "– Improved Work Life and Reduce stress",
    description2: "– Increased efficiency & Productivity ",
    description3: "– Reconciliation and day-end process made super easy ",
    aosDelay: "500",
  },
  {
    name: "Customers",
    icon: "https://cubik.in/wp-content/uploads/2023/12/pexels-lisa-fotios-1833399-768x512.jpg",
    link: "#",
    description1:  "– Empower customer to order at their convenience using Web App",
    description2: "– Faster Service than before ",
    description3: "– Customer delight with Re-engagement tool",
    aosDelay: "1000",
  },
];

function Benefits() {
  return (
    <div className="py-14 bg-red-50 flex flex-col sm:place-items-center">
      <div className="container">
        <div className="pb-16 pt-12">
          <p className="text-center drop-shadow-2xl text-2xl py-5  font-semibold text-black ">
            BENEFITS FOR EVERYONE INVOLVED
          </p>
          <h1 className="text-center font-bold text-5xl md:text-6xl drop-shadow-2xl mb-3  text-orange-500">
            Solving Fundamental Problems
          </h1>
        </div>
        <div className="grid  sm:max-md:grid-cols-1 md:grid-cols-3 gap-16 ">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              className="card text-center p-4 sm:py-16 bg-white shadow-xl rounded-2xl group sm:space-y-6 space-y-3 hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              <div className="grid place-items-center ">
                <img className="rounded-2xl" src={skill.icon} alt="/" />
              </div>
              <h1 className="font-semibold text-black text-3xl md:text-4xl">
                {skill.name}
              </h1>
              <p className="text-2xl text-gray-600">{skill.description1}</p>
              <p className="text-2xl text-gray-600">{skill.description2}</p>
              <p className="text-2xl text-gray-600">{skill.description3}</p>
              <a className="text-orange-600 text-3xl pt-20" href={skill.link}>Learn more &#8594; </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits;
