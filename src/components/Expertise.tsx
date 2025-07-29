import { useState } from "react";

import "./Expertise.css";
import LanguagesCard from "./skills/LanguagesCard";
import { FullStackCard } from "./skills/FullStackCard";
import Leetcode from "./Leetcode";
import DatabasesCard from "./Databases";
import DevOpsCloudCard from "./DevOps&Cloud";
const Expertise = () => {
  // const [active, setActive] = useState([true, false, false, false, false]);

  // const clickHandler = (index: number) => {
  //   // Toggle the clicked tab and deactivate others
  //   const newActive = active.map((item, i) => (i === index ? !item : false));
  //   setActive(newActive);
  // };

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const clickHandler = (index: number) => setActiveIndex(index);

  const tabs = [
    "Languages",
    "Full Stack Development",
    "Leetcode",
    "Databases",
    "DevOps & Cloud",
  ];

  return (
    <div
      className="relative bg-transparent w-full h-full text-[#e7e5e4]  flex flex-col 
    justify-center items-center gap-4 p-4 space-y-20 "
    >
      {/* <div className="absolute top-10 w-full flex justify-evenly items-center">
        <h2 className="text-4xl font-bold mb-2">My Expertise</h2>

        <div className="mb-5 flex flex-row font-bold justify-between items-center px-3 max-w-5/10 overflow-y-scroll ">
          <div
            // to={`languages`}
            onClick={() => clickHandler(0)}
            className={`border-red-500 border-b-4 py-4 px-4  ${
              active[0] ? "active" : ""
            }`}
          >
            Languages
          </div>
          <div
            // to={"#"}
            onClick={() => clickHandler(1)}
            className={`border-red-500 border-b-4  px-4 py-4 ${
              active[1] ? "active" : ""
            }`}
          >
            Full Stack Development
          </div>
          <div
            // to={"#"}
            onClick={() => clickHandler(4)}
            className={`border-red-500 border-b-4  px-4 py-4 ${
              active[4] ? "active" : ""
            }`}
          >
            Leetcode
          </div>

          <div
            // to={"#"}
            onClick={() => clickHandler(2)}
            className={`border-red-500 border-b-4 px-4  py-4 ${
              active[2] ? "active" : ""
            }`}
          >
            Databases
          </div>
          <div
            // to={"#"}
            onClick={() => clickHandler(3)}
            className={`border-red-500 border-b-4  px-4 py-4 ${
              active[3] ? "active" : ""
            }`}
          >
            DevOps & Cloud
          </div>
        </div>
      </div> */}
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-2xl font-bold mb-4">My Expertise</h3>

        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => clickHandler(index)}
              className={`cursor-pointer px-4 py-2 border-b-4 transition-all duration-300 ${
                activeIndex === index
                  ? "border-red-500 text-red-600 font-bold"
                  : "border-transparent text-gray-600"
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="border-2 border-white rounded-lg p-4 shadow-lg ">
        {active[0] && <LanguagesCard />}
        {active[1] && <FullStackCard />}
        {active[2] && (
          <ExpertiseCard
            title={"Databases"}
            description={
              "Designing and managing databases for efficient data storage and retrieval."
            }
          />
        )}
        {active[3] && (
          <ExpertiseCard
            title={"DevOps & Cloud"}
            description={
              "Implementing CI/CD pipelines and managing cloud infrastructure for scalable applications."
            }
          />
        )}
        {active[4] && <Leetcode />}
      </div> */}
      <div className="border-2 border-white rounded-lg p-4 shadow-lg">
        {(() => {
          switch (activeIndex) {
            case 0:
              return <LanguagesCard />;
            case 1:
              return <FullStackCard />;
            case 2:
              return (
               <Leetcode />
              );
            case 3:
              return (
                <DatabasesCard />
              );
            case 4:
              return (
                <DevOpsCloudCard />
              );
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
};

export default Expertise;
