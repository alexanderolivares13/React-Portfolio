/* eslint-disable react/prop-types */
import "./Buttons.css";

const Button = ({ title, onDisplayContent}) => {
  const clickHandler = () => {
    if (title === "About Me") {
      onDisplayContent(0);
    } else if (title === "Projects") {
      onDisplayContent(1);
    } else if (title === "Links") {
      onDisplayContent(2);
    } else {
      onDisplayContent(3);
    }
  };
  return <button onClick={clickHandler}>{title}</button>;
};

export default Button;
