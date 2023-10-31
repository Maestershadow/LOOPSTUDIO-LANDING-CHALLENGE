import './Header.css'
import NavListing from '../common/navListing'

export default function Header() {
    return <header className="header">
        <div className='header-container'>
            <div className='header-head'>
                <div>
                    <img src="images/logo.svg" alt="main logo" />
                </div>
                <nav className='nav-list'>
                    <NavListing />
                </nav>
                <div className="menu-btn" data-visible="false">
                    <img src="images/icon-close.svg" alt="close" />
                    <img src="images/icon-hamburger.svg" alt="close" />
                </div>
            </div>

            <div className='header-tail'>
                <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
            </div>
        </div>

    </header>
}