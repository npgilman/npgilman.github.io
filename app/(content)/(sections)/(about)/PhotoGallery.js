import React, { useState } from "react";

// photo gallery controls
import rightArrow from "@/public/pics/rightArrow.png";
import leftArrow from "@/public/pics/leftArrow.png";
//
//// import photos for gallery
//// todo: make them import via config.
////       i want to associate captions with them
import photo1 from "@/public/pics/portrait.jpeg";
import photo2 from "@/public/pics/photo2.jpg";
import photo3 from "@/public/pics/photo3.jpg";
import photo4 from "@/public/pics/photo4.jpg";
import photo5 from "@/public/pics/photo5.jpg";
import photo6 from "@/public/pics/photo6.jpg";
let photos = [photo1, photo2, photo3, photo4, photo5, photo6];

const captions = [
  "this is a photo 1",
  "this is a photo 2",
  "this is a photo 3",
  "this is a photo 4",
  "this is a photo 5",
  "this is a photo 6",
];

const PhotoGallery = () => {
  const [index, setIndex] = useState(0);
  const trueIndex = index < 0 ? photos.length - Math.abs(index) : index;

  return (
    <div style={{ width: "45%" }}>
      <div className={"d-flex flex-column align-items-center"}>
        <div className="">
          {/* Use the imported image */}
          <img
            src={photos[trueIndex]}
            style={{ height: "250px", width: "250px", margin: "5%" }}
            alt="Portrait"
          />
        </div>

        <div style={{ flexGrow: "1" }}>{captions[trueIndex]}</div>
        <div className={"d-flex flex-row flex-grow-1 align-items-center"}>
          <button
            style={{}}
            onClick={() => setIndex((index - 1) % photos.length)}
          >
            <img
              src={leftArrow}
              style={{ height: "43px", width: "128px" }}
              alt="Left Arrow"
            />
          </button>
          <p
            style={{
              margin: "10%",
              magrinTop: "2%",
              width: "250px",
              textAlign: "center",
            }}
          >
            <button>
              {/** turn this into a link that displays a splash screen of college photos */}
              See more!
            </button>
          </p>
          <button onClick={() => setIndex((index + 1) % photos.length)}>
            <img
              src={rightArrow}
              style={{ height: "43px", width: "128px" }}
              alt="Right Arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
