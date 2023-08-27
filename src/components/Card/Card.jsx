/* eslint-disable react/prop-types */
import "./Card.css";

const Card = ({ projectsArray }) => {
  return (
    <a href={projectsArray.link}>
      <div className='card'></div>
    </a>
  );
};

export default Card;
