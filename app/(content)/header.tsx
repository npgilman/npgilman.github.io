"useClient";
import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

interface HeaderProps {
  setEntered: () => void;
}

const Header: React.FC<HeaderProps> = ({ setEntered }) => {
  const [index, setIndex] = useState(0);

  const decrementIndex = () => {
    if (index > 0) setIndex(index - 1);
    if (index == 0) {
      setIndex(0);
      setEntered();
    }
  };

  const incrementIndex = () => {
    if (index < 5) setIndex(index + 1);
    if (index == 5) {
      setIndex(5);
    }
  };
  return (
    // <div className="flex flex-row justify-center items-center p-5 hover:p-10 transition-all duration-200">
     <div className="flex flex-row justify-center items-center p-5">
      <button
        className="mr-4 bg-gray-400 rounded-full p-2 hover:bg-gray-500 focus:outline-none "
        onClick={decrementIndex}
      >
        <FiArrowLeft />
      </button>
      <div className={"p-2 hover:text-blue-500"}>
        <a>
          {index == 0 ? (
            "Nathan Gilman"
          ) : (
            <FaUser style={{ fontSize: "2rem" }} />
          )}
        </a>{" "}
      </div>
      <div className={"p-2 hover:text-blue-500"}>
        <a
          href="mailto:ngilman@ufl.edu"
          rel="noopener noreferrer"
        >
          {index == 1 ? (
            "ngilman@ufl.edu"
          ) : (
            <FaEnvelope style={{ fontSize: "2rem" }} />
          )}
        </a>
      </div>
      <div className={"p-2 hover:text-blue-500"}>
        <a
          href="https://www.instagram.com/nathan.gilman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {index == 2 ? (
            "nathan.gilman"
          ) : (
            <FaInstagram style={{ fontSize: "2rem" }} />
          )}
        </a>
      </div>
      <div className={"p-2 hover:text-blue-500"}>
        <a
          href="https://www.github.com/npgilman"
          target="_blank"
          rel="noopener noreferrer"
        >
          {index == 3 ? "npgilman" : <FaGithub style={{ fontSize: "2rem" }} />}
        </a>{" "}
      </div>
      <div className={"p-2 hover:text-blue-500"}>
        <a
          href="https://www.linkedin.com/in/npgilman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {index == 4 ? (
            "/in/npgilman"
          ) : (
            <FaLinkedin style={{ fontSize: "2rem" }} />
          )}
        </a>{" "}
      </div>
      <div className={"p-2 hover:text-blue-500"}>
        <a
          href="https://leetcode.com/u/npgilman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {index == 5 ? "/u/npgilman" : <p style={{ fontSize: "2rem" }}>🤓</p>}
        </a>{" "}
      </div>
      <button
        className="ml-4 bg-gray-400 rounded-full p-2 hover:bg-gray-500 focus:outline-none "
        onClick={incrementIndex}
      >
        <FiArrowRight />
      </button>
    </div>
  );
};

export default Header;
