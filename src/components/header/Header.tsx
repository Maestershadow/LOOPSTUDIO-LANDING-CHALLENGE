import './Header.css'

export default function Header() {
    return <header className="header">
        <div className='header-container'>
            <div className='header-head'>
                <div>
                    <img src="images/logo.svg" alt="main logo" />
                </div>
                <nav className='nav-list'>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </nav>
            </div>
            <div className='header-tail'>
                <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
            </div>
        </div>

    </header>
}