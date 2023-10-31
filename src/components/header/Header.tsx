import './Header.css'
import NavListing from '../common/navListing'
import { useState } from 'react'

export default function Header() {

    const [navOpened, setNavOpened] = useState(false);




    return <header className="header">
        <div className='header-container'>
            <div className='header-head'>
                <div>
                    <img src="images/logo.svg" alt="main logo" />
                </div>
                <nav className='nav-list' data-visible={`${navOpened}`}>
                    <div className='mobile-nav-head'>
                        <div>
                            <img src="images/logo.svg" alt="main logo" />
                        </div>
                        <button style={{padding:0}} onClick={() => setNavOpened(!navOpened)}>
                            <img src="images/icon-close.svg" alt="close" />
                        </button>
                    </div>
                    <NavListing />
                </nav>
                <button onClick={() => setNavOpened(!navOpened)} className="menu-btn" data-visible={`${navOpened}`}>
                    <img src="images/icon-hamburger.svg" alt="close" />
                </button>
            </div>

            <div className='header-tail'>
                <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
            </div>
        </div>

    </header>
}