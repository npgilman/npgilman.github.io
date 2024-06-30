"use client";
import React, { useState } from "react";

const Title: React.FC = () => {
  const words = [
    "Nathan Gilman",
    "Developer",
    "Creator",
    "Taco Bell Superfan",
    "Rizzly Bear",
  ];
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const displayTime = 3000;
  const typeTime = 2000 / words[index].length;

  React.useEffect(() => {
    let timeoutIds: NodeJS.Timeout[] = [];

    const typeAndBackspace = () => {
      for (let i = 0; i <= words[index].length; i++) {
        const timeoutId = setTimeout(() => {
          setTypedText(words[index].slice(0, i));
        }, typeTime * i);
        timeoutIds.push(timeoutId);
      }

      setTimeout(() => {
        for (let i = 0; i <= words[index].length; i++) {
          const timeoutId = setTimeout(() => {
            setTypedText(words[index].slice(0, words[index].length - 1 - i));
          }, typeTime * i);
          timeoutIds.push(timeoutId);
        }

        setTimeout(() => {
          setTypedText("");
          setIndex((index + 1) % words.length);
        }, typeTime * words[index].length);
      }, displayTime);
    };

    typeAndBackspace();

    const intervalId = setInterval(
      typeAndBackspace,
      typeTime * words[index].length * 2 + displayTime
    );

    return () => {
      clearInterval(intervalId);
      clearTimeouts();
    };

    function clearTimeouts() {
      timeoutIds.forEach((id) => clearTimeout(id));
    }
  }, [index]);

  return (
    <div className="text-white text-center min-h-14">
      <h1 className="text-5xl">{typedText}</h1>
    </div>
  );
};
export default Title;
