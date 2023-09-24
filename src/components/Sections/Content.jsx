import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";

import "./Content.css";
import Contact from "./Contact";

const Content = ({ displayedContent }) => {
  //the content compontent returns the view that is appropriate for the current state that is passed from the app component.
  return (
    <div className='content-body'>
      <div className='content-box'>
        {displayedContent === 0 ? (
          <About />
        ) : displayedContent === 1 ? (
          <Projects />
        ) : displayedContent === 2 ? (
          <Contact />
        ) : (
          <Resume />
        )}
      </div>
    </div>
  );
};

export default Content;
