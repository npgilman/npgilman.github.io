import React from "react";

const Info = () => {
  return (
    <div className={"flex flex-row"} style={{ height: "100%" }}>
      <div className={""} style={{padding: "5%", paddingTop: "1%" }}>
        <div style={{ fontSize: "16pt" }}>
          <u> About Me</u>{" "}
        </div>
        <div style={{ fontSize: "14pt" }}>
          A senior at the University of Florida studying computer science.
        </div>
        <br />
        <div style={{ fontSize: "16pt" }}>
          <u> Education </u>{" "}
        </div>
        <div style={{ fontSize: "14pt" }}>
        University of Florida
        <div style={{ fontSize: "12pt"}}>

        <li> B.S. Computer Science, Minor in Statistics</li>
        <li> Gainesville, FL (<i>August 2022 - May 2025</i>)</li> 
        <li> Favorite Courses: Programming Language Concepts, Operating Systems </li>
        <li> Officer in Software Engineering Club (<i>September 2022 - Present</i>)</li>
        </div>
        </div>
        <br />
        <div style={{ fontSize: "14pt" }}>
        University of Central Florida
        <div style={{ fontSize: "12pt"}}>

        <li> Associate of Arts </li>
        <li> Orlando, FL (<i>August 2021 - May 2022</i>)</li> 
        <li> Favorite Courses: Introduction to Anthropology, Discrete Structures </li>
        </div>
        </div>
        <br />
        <div style={{ fontSize: "16pt" }}>
          <u> Interests</u>
        </div>
        <div style={{ fontSize: "14pt" }}> Soccer, Hiking, Bioinformatics </div>
      </div>
      <div className={""} style={{ padding: "5%", paddingTop: "1%" }}>
        <div style={{fontSize: "16pt" }}>
          <u> Experience </u>{" "}
        </div>
        <div style={{ fontSize: "14pt" }}>

          DevSecOps Intern - General Dynamics Missions Systems
          <div style={{ fontSize: "12pt" }}>
            <li> Boston, MA (<i>May 2024 - August 2024</i>) </li>
            <li> Skills: </li>
            <li> Highlight: </li>
            <br/>
          </div>

          Software Engineering Intern - Lockheed Martin
          <div style={{ fontSize: "12pt" }}>
            <li> Orlando, FL (<i>June 2023 - May 2024</i>) </li>
            <li> Skills: </li>
            <li> Highlight: </li>
            <br/>
          </div>
          
          Software Engineering Intern - Lockheed Martin
          <div style={{ fontSize: "12pt" }}>
            <li> Orlando, FL (<i>May 2022 - August 2022</i>) </li>
            <li> Skills: </li>
            <li> Highlight: </li>
            <br/>
          </div>
          
          Test Engineer Intern - Dignitas Technologies
          <div style={{ fontSize: "12pt" }}>
            <li> Orlando, FL (<i>January 2021 - August 2021</i>) </li>
            <li> Skills: </li>
            <li> Highlight: </li>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
