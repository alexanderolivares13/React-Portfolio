import "./About.css";
import profilePicture from '../assets/profile-placeholder.png'
const About = () => {
  return (
    <div className='about-me'>
      <h2>Greetings!</h2>
      <img src={profilePicture} className="profile-img"/>
      <p>My name is Alexander Olivares</p>
    </div>
  );
};

export default About;
