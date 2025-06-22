import ExpertiseCard from "./ExpertiseCard";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Expertise.css";
import LanguagesCard from "./skills/LanguagesCard";
import { FullStackCard } from "./skills/FullStackCard";
const Expertise = () => {
  const [active, setActive] = useState([true, false, false, false]);

  const clickHandler = (index: number) => {
    // Toggle the clicked tab and deactivate others
    const newActive = active.map((item, i) => (i === index ? !item : false));
    setActive(newActive);
    // const newActive = active.map((item, i) => (i === index ? !item : item));
    // setActive(newActive);
  };

  return (
    <div
      className="relative bg-transparent w-full h-full text-black  flex flex-col 
    justify-center items-center gap-4 p-4 space-y-20 "
    >
      <div className="absolute top-10 w-full flex justify-evenly items-center">
        <h2 className="text-4xl font-bold mb-2">My Expertise</h2>

        <div className="flex flex-row font-bold justify-between items-center px-3 ">
          <div
            // to={`languages`}
            onClick={() => clickHandler(0)}
            className={`border-white border-b-4 py-4 px-4  ${active[0] ? "active" : ""}`}
          >
            Languages
          </div>
          <div
            // to={"#"}
            onClick={() => clickHandler(1)}
            className={`border-white border-b-4  px-4 py-4 ${active[1] ? "active" : ""}`}
          >
            Full Stack Development
          </div>
          <div
            // to={"#"}
            onClick={() => clickHandler(2)}
            className={`border-white border-b-4 px-4  py-4 ${active[2] ? "active" : ""}`}
          >
            Databases
          </div>
          <div
            // to={"#"}
            onClick={() => clickHandler(3)}
            className={`border-white border-b-4  px-4 py-4 ${active[3] ? "active" : ""}`}
          >
            DevOps & Cloud
          </div>

         
        </div>
      </div>
   <div className="border-2 border-white rounded-lg p-4 shadow-lg ">

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

      </div>


    </div>
  );
};

export default Expertise;
