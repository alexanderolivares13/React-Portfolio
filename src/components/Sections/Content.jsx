import Button from "../UI/Buttons/Buttons";
import About from "./About";
import Projects from "./Projects";
import Links from "./Links";
import buttonsArray from "../jsxArrays/arrays";
import { useState } from "react";

import "./Content.css";

const Content = () => {
  const [displayedContent, setDisplayedContent] = useState(0);

  return (
    <div className='content-body'>
      {buttonsArray.map((element) => (
        <Button
          key={element.id}
          title={element.heading}
          onDisplayContent={setDisplayedContent}
        />
      ))}
      <div className='line-break'></div>
      <div className='content-box'>
        {displayedContent === 0 ? (
          <About />
        ) : displayedContent === 1 ? (
          <Projects />
        ) : (
          <Links />
        )}
      </div>
    </div>
  );
};

export default Content;
