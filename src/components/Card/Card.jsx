/* eslint-disable react/prop-types */
import Button from "../UI/Buttons/Buttons";
import "./Card.css";

const Card = ({ projectsArray }) => {
  return (
    <div className='wrapper'>
      <h3>{projectsArray.projectTitle}</h3>
      <a href={projectsArray.link}>
        <div className='card'>
          <div className='top-layer'>
            <p>{projectsArray.shortDescription}</p>
          </div>
          <img
            src={projectsArray.image}
            alt={`Image of ${projectsArray.projectTitle} project`}
          />
        </div>
      </a>
      <Button title={"Github"} link={projectsArray.github} />
    </div>
  );
};

export default Card;
