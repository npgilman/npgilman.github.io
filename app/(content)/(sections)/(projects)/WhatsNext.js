import { useNavigate, useParams } from "next/navigation.js";
import React from "react";
import PropTypes from "prop-types";

import data from "./data.js";
import img2 from "@/public/pics/photo2.jpg";

const WhatsNext = () => {
  const navigate = useNavigate;
  const img1 = img2;
  const img3 = img2;
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: "100%", height: "100%" }}
    >
      <h1 style={{ marginTop: "30px" }}>
        {" "}
        <u>What&apos;s Next?</u>
      </h1>
      <div className="d-flex flex-row flex-grow-1 justify-content-around">
        <ProjectCard
          title={data[0].title}
          img={img1}
          description={data[0].description}
          index={0}
        />
        <ProjectCard
          title={data[1].title}
          img={img2}
          description={data[1].description}
          index={1}
        />
        <ProjectCard
          title={data[2].title}
          img={img3}
          description={data[2].description}
          index={2}
        />
      </div>
      <button
        style={{ marginTop: "10px", marginBottom: "10px" }}
        onClick={() => navigate("/past-projects")}
      >
        See past projects
      </button>
    </div>
  );
};

export const PastProjects = () => {
  const navigate = useNavigate;
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: "100%", height: "100%" }}
    >
      <h1 style={{ marginTop: "30px" }}>
        {" "}
        <u>Past Projects</u>
      </h1>
      <div
        className="flex-grow-1 align-items-center"
        style={{ marginTop: "20px", width: "100%" }}
      >
        <div
          className="d-flex flex-row justify-content-around"
          style={{
            marginRight: "30px",
            marginLeft: "30px",
            overflowX: "auto",
            overflowY: "hidden",
            paddingBottom: "15px",
          }}
        >
          {data.map((item, index) => {
            return (
              <ProjectCard
                title={item.title}
                img={item.imgPath}
                description={item.description}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <button
        style={{ marginTop: "10px", marginBottom: "10px" }}
        onClick={() => navigate("/whats-next")}
      >
        Back to current
      </button>
    </div>
  );
};

const ProjectCardStyle = {
  padding: "20px",
  paddingTop: "10px",
  height: "100%",
  marginLeft: "20px",
  marginRight: "20px",
  backgroundColor: "#EDEEEB",
  alignItems: "center",
};

const ProjectCard = ({ title, img, description, index }) => {
  const navigate = useNavigate;

  return (
    <button
      style={ProjectCardStyle}
      onClick={() => navigate(`/projects/${index}`)}
    >
      <div className="d-flex flex-column" style={ProjectCardStyle}>
        <h4> {title}</h4>
        <img
          src={img}
          style={{ height: "150px", width: "150px" }}
          alt="Project"
        />
        <p> {description} </p>
      </div>
    </button>
  );
};

export const ProjectPage = () => {
  const params = useParams();
  const navigate = useNavigate;

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: "100%", height: "100%" }}
    >
      <div
        className={"d-flex flex-column flex-grow-1 align-items-center"}
        style={{ padding: "20px", width: "100%" }}
      >
        <h1>
          <u>{data[params.id].title}</u>
        </h1>
        <img src={data[params.id].img} alt="project" />
        <p>{data[params.id].description}</p>
        <a href={data[params.id].githubURL} target="_blank" rel="noreferrer">
          {" "}
          {data[params.id].githubURL}{" "}
        </a>
        <p>{data[params.id].content}</p>
      </div>
      <button
        style={{ marginTop: "10px", marginBottom: "10px" }}
        onClick={() => navigate("/past-projects")}
      >
        See past projects
      </button>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default WhatsNext;
