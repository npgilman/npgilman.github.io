import React from "react";
import PhotoGallery from "./PhotoGallery";

const About = () => {
  return (
    <div className={""} style={{ height: "100%" }}>
      <div className={""} style={{ padding: "5%", width: "55%" }}>
        <div style={{ fontSize: "16pt" }}>
          {" "}
          <u> Who am I? </u>{" "}
        </div>
        <div style={{ fontSize: "14pt" }}>
          A Junior at the University of Florida majoring in Computer Science and
          minoring in statistics. Currently interning in Boston in the Summer of
          2024 at General Dynamics Mission Systems.
          <br />
          <b>Ready to lock in this summer.</b>{" "}
        </div>
        <br />
        <div style={{ fontSize: "16pt" }}>
          <u> Interests</u>{" "}
        </div>
        <div style={{ fontSize: "14pt" }}> Soccer, Hiking, Bioinformatics </div>
      </div>
    </div>
  );
};

export default About;
