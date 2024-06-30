"use client";
import React, { useState, useRef, ReactNode } from "react";
import About from "@/app/(content)/(sections)/(about)/About";
import Experience from "@/app/(content)/(sections)/(experience)/Experience";
import WhatsNext from "@/app/(content)/(sections)/(projects)/WhatsNext";

const Content: React.FC = () => {
  const [index, setIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = (index: number) => {
    setIndex(index);
    scrollToSection(index);
  };

  const scrollToSection = (index: number) => {
    if (contentRef.current) {
      const container = contentRef.current;
      const sectionWidth = container.scrollWidth / 3; // Assuming 3 sections horizontally

      container.scrollTo({
        left: index * sectionWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex-grow bg-slate-400">
      <div className="flex flex-row justify-evenly p-5">
        <div className="w-4"></div>
        <ContentButton
          label="About"
          index={0}
          onClick={() => handleButtonClick(0)}
        />
        <ContentButton
          label="Experience"
          index={1}
          onClick={() => handleButtonClick(1)}
        />
        <ContentButton
          label="Projects"
          index={2}
          onClick={() => handleButtonClick(2)}
        />
        <div className="w-4"></div>
      </div>
      <div ref={contentRef} className="flex overflow-x-hidden">
        <div className="flex" style={{ width: "300%" }}>
          {" "}
          {/* Assuming 3 sections horizontally */}
          <ContentSection>
            <About />
          </ContentSection>
          <ContentSection>
            <Experience />
          </ContentSection>
          <ContentSection>
            <WhatsNext />
          </ContentSection>
        </div>
      </div>
    </div>
  );
};

interface ContentButtonProps {
  label: string;
  index: number;
  onClick: () => void;
}

const ContentButton: React.FC<ContentButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-white hover:bg-gray-300 text-black font-bold py-3 px-4 rounded-lg"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

interface ContentSectionProps {
  children: ReactNode;
}

const ContentSection: React.FC<ContentSectionProps> = ({ children }) => {
  return (
    <div className="w-full flex-shrink-0">
      <div className="w-full p-4 m-2">{children}</div>
    </div>
  );
};

export default Content;
