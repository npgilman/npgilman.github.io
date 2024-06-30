import React, { useState } from "react";
//import resume from '@/public/nathangilman_resume.pdf';
import { industryData, personalData } from "./data";

const buttonStyle = {
  width: "200px",
  height: "40px",
  margin: "10px",
  backgroundColor: "#EDEEEB",
};

const Experience = () => {
  const [selectedContent, setSelectedContent] = useState(1);
  const sectionHeader =
    selectedContent === 1
      ? "Industry"
      : selectedContent === 2
      ? "Personal"
      : "Resume";

  return (
    <div className="d-flex flex-row" style={{ height: "100%" }}>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ width: "30%" }}
      >
        <button style={buttonStyle} onClick={() => setSelectedContent(1)}>
          Industry
        </button>
        <button style={buttonStyle} onClick={() => setSelectedContent(2)}>
          Personal
        </button>
        <button style={buttonStyle} onClick={() => setSelectedContent(3)}>
          Resume
        </button>
      </div>
      <div className="d-flex flex-column" style={{ width: "70%" }}>
        <h2 style={{ marginLeft: "50px", marginTop: "40px" }}>
          {sectionHeader}
        </h2>
        <div
          style={{
            margin: "50px",
            marginRight: "75px",
            marginTop: "15px",
            marginBottom: "0px",
            backgroundColor: "#EDEEEB",
            overflow: "scroll",
            height: "425px",
          }}
        >
          {selectedContent === 1 && formExperience(industryData)}
          {selectedContent === 2 && formExperience(personalData)}
          {selectedContent === 3 && ResumeExperience()}
        </div>
      </div>
    </div>
  );
};

const formExperience = (data) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h4> {item.header} </h4>
            <h6> {item.subheader} </h6>
            <p> {item.text} </p>
            <ul>
              {item.bullets &&
                item.bullets.length > 0 &&
                item.bullets.map((item, index) => {
                  return <li key={index}> {item} </li>;
                })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const ResumeExperience = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      {/* <embed src={resume} style={{ width: '100%', height: '100%'}}/>  */}
    </div>
  );
};

export default Experience;
