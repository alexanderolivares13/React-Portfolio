import "./Header.css";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import headingArray from "./jsxArrays/arrays";

const Header = ({ onDisplayContent, displayedContent }) => {
  const clickHandler = (e) => {
    if (e.target.innerHTML === "About Me") {
      onDisplayContent(0);
    } else if (e.target.innerHTML === "Projects") {
      onDisplayContent(1);
    } else if (e.target.innerHTML === "Contact Me") {
      onDisplayContent(2);
    } else if (e.target.innerHTML === "Resume") {
      onDisplayContent(3);
    }
  };

  return (
    <header>
      <h1>Built with</h1>
      <div className='logos'>
        <a href='https://react.dev'>
          <img
            src={reactLogo}
            alt='Small image of the React logo'
            aria-label='React Logo'
          />
        </a>
        <span> + </span>
        <a href='https://vitejs.dev'>
          <img
            src={viteLogo}
            alt='Small image of the Vite logo'
            aria-label='Vite Logo'
          />
        </a>
      </div>
      <div className='section-links'>
        {headingArray.map((item, index) => (
          <a
            key={item.id}
            onClick={clickHandler}
            className={displayedContent === index ? "active-link" : ""}
          >
            {item.heading}
          </a>
        ))}
      </div>
      <h1 className='name-header'>
        Alexander <span id='last-name'>Olivares</span>
      </h1>
    </header>
  );
};

export default Header;
