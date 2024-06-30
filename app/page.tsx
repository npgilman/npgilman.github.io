"use client";
import React, { useState } from "react";
import Title from "./(splashscreen)/title";
import Enter from "./(splashscreen)/enter";
import Container from "./(content)/container";

const Page: React.FC = () => {
  const [entered, setEntered] = useState(false);

  const toggleEnter = () => {
    setTimeout(() => {
      setEntered(!entered);
    }, 100);
  };

  return (
    <main className="relative h-screen overflow-hidden">
      <div
        className={`absolute inset-0 transition-transform duration-500 ${
          entered ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <img src="osman-rana-xhpMNieqBwA-unsplash.jpg" alt="Photo by Osman Rana on Unsplash"/>
        {/* <video
          className="absolute inset-0 object-cover"
          autoPlay
          muted
          loop
          id="myVideo"
        >
          <source src="fight.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video> */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Title />
          <Enter setEntered={toggleEnter} />
        </div>
      </div>
      <div
        className={`absolute inset-0 flex justify-center bg-gray-900 text-white transition-transform duration-500 ${
          !entered ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <Container setEntered={toggleEnter} />
      </div>
    </main>
  );
};

export default Page;
