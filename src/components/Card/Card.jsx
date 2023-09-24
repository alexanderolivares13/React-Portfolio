/* eslint-disable react/prop-types */
import Button from "../UI/Buttons/Buttons";
import "./Card.css";
import githubLogo from "../../assets/github-mark-white.svg";

const Card = ({ projectsArray }) => {
  return (
    <div className='wrapper'>
      {/* renders the projects card and github button based on a separate projects object array */}
      <h3>{projectsArray.projectTitle}</h3>
      <a href={projectsArray.link}>
        <div className='card'>
          {/* displays a short description of the project on hover, and is initially hidden */}
          <div className='top-layer'>
            <p>{projectsArray.shortDescription}</p>
          </div>
          <img
            src={projectsArray.image}
            alt={`Image of ${projectsArray.projectTitle} project`}
          />
        </div>
      </a>
      {/* creates a github button to each respective repo */}
      <Button
        title={"Github"}
        link={projectsArray.github}
        logo={githubLogo}
        className={"githubBtn"}
        alt={"Small image of the Github logo on the button"}
      />
    </div>
  );
};

export default Card;
