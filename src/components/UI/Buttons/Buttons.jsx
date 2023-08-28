/* eslint-disable react/prop-types */
import "./Buttons.css";

const Button = ({ title, onDisplayContent, link, logo, className, alt }) => {
  const clickHandler = () => {
    if (title === "About Me") {
      onDisplayContent(0);
    } else if (title === "Projects") {
      onDisplayContent(1);
    } else if (title === "Contact Me") {
      onDisplayContent(2);
    } else {
      window.location.replace(link);
    }
  };
  return (
    <button onClick={clickHandler}>
      {<img src={logo} className={className} alt={alt} />}
      {title}
    </button>
  );
};

export default Button;
