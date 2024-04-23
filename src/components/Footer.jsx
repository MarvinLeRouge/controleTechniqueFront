import { useState } from 'react'
import '../assets/css/components/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="main_footer">
            <nav className="main_footer__nav">
                <ul className="main_footer__nav__list">
                    <li className="main_footer__nav__item">
                        <Link to="/">Accueil</Link>
                    </li>
                    <li className="main_footer__nav__item">
                        <Link to="/mentions-legales">Mentions légales</Link>
                        </li>
                    <li className="main_footer__nav__item">
                        <Link to="/cookies">Cookies</Link>
                        </li>
                    <li className="main_footer__nav__item">
                        <Link to="/sitemap">Plan du site</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
