import Button from "./UI/Buttons/Buttons";
// import Card from "./Card/Card";
import About from "./About";
import buttonsArray from "./js/arrays";
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
        {displayedContent === 0 ? <About /> : false}
      </div>
    </div>
  );
};

export default Content;
