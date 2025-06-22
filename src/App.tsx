

import "./App.css";
import Header from "./components/Header";

import Expertise from "./components/Expertise";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import LanguagesCard from "./components/skills/LanguagesCard";
import Experience from "./components/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Education from "./components/Education";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { ContactForm } from "./components/Talk";

function App() {
  return (
    <>
      <div
        className="relative w-[100vw] h-screen 
     bg-linear-to-r from-amber-500 via-orange-500 to-red-500
        text-white p-4 flex flex-col
       justify-evenly items-center shadow-md"
      >
        <div className="w-4/5 absolute bottom-19   ">
          <Header />
        </div>

        <div className=" z-25 rounded-r-3xl  absolute left-0 bg-black p-4 flex flex-col justify-center items-center space-y-4">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faCode} size="2x" />
          </a>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/expertise/*" element={<Expertise />}>
            <Route path="languages" element={<LanguagesCard />} />
          </Route>
          <Route path="/talk" element={<ContactForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
