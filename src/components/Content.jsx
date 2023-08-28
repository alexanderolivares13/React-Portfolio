import Button from "./UI/Buttons/Buttons";
import Card from "./Card/Card";
import About from "./About";
import buttonsArray from "./jsxArrays/arrays";
import projectsArray from "./jsxArrays/projects";
import contactsArray from "./jsxArrays/contacts";
import { useState } from "react";

import "./Content.css";

const Content = () => {
  const [displayedContent, setDisplayedContent] = useState(0);

  const projects = (
    <div className='content-cards'>
      {projectsArray.map((projects) => (
        <Card key={projects.id} projectsArray={projects} />
      ))}
    </div>
  );

  const links = (
    <>
      <div className='links'>
        <h2>Contact Me:</h2>
        <ul>
          {contactsArray.map((contact) => (
            <li key={contact.name}>
              <a href={contact.link}>
                <img src={contact.logo} alt={contact.alt} />
                {contact.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

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
          projects
        ) : (
          links
        )}
      </div>
    </div>
  );
};

export default Content;
