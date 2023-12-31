import './Footer.css'
import NavListing from '../common/navListing'

export default function Footer() {
    return <footer>
        <div className='footer-container'>
            <div className='footer-head'>
                <div>
                    <img src="images/logo.svg" alt="main logo" />
                </div>
                <nav className='footer-nav'>
                    <NavListing />
                </nav>
            </div>

            <div className="footer-tail">
                <div className="media-icons">
                    <a href="#"> <img src="images/icon-facebook.svg" alt="facebook"  /></a>
                    <a href="#"><img src="images/icon-twitter.svg" alt="twitter"  /></a>
                    <a href="#"><img src="images/icon-pinterest.svg" alt="pinterest"  /></a>
                    <a href="#"><img src="images/icon-instagram.svg" alt="instagram"  /></a>
                </div>
                <p>2021 Loopstudios. All rights reserved.</p>
            </div>
        </div>
    </footer>
}