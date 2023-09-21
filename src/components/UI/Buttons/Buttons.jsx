/* eslint-disable react/prop-types */
import "./Buttons.css";

const Button = ({ title, link, logo, className, alt }) => {
  const clickHandler = () => {
    window.location.replace(link);
  };
  return (
    <button onClick={clickHandler}>
      {<img src={logo} className={className} alt={alt} />}
      {title}
    </button>
  );
};

export default Button;
