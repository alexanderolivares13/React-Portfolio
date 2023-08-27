import './Header.css'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

const Header = () => {
    return (
        <header>
            <h1>Built with</h1>
            <div className='logos'>
                <img src={reactLogo}/>
                <span> + </span>
                <img src={viteLogo}/>
            </div>
            <h1 className='name-header'>Alexander <span id="last-name">Olivares</span></h1>
        </header>
    )
}

export default Header