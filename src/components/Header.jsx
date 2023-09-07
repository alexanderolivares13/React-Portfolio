import "./Header.css";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";

const Header = () => {
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
      <h1 className='name-header'>
        Alexander <span id='last-name'>Olivares</span>
      </h1>
    </header>
  );
};

export default Header;
