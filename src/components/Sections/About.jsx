import "./About.css";
import profilePicture from "../../assets/profile-picture.png";
import { skills, biography } from "../jsxArrays/aboutMe";

const About = () => {
  return (
    <div className='about-me'>
      <h2>Greetings!</h2>
      <img src={profilePicture} className='profile-img' />
      {biography}
      <h3>Skills:</h3>
      <ul>
        {skills.map((element, i) => (
          <li key={i}>{element}</li>
        ))}
      </ul>
      {/* <h3>Experience:</h3>
      {experience} */}
    </div>
  );
};

export default About;
