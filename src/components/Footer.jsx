import { useState } from 'react'
import '../assets/css/components/Footer.css'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className="main_footer">
            <nav className="main_footer__nav">
                <ul className="main_footer__nav__list">
                    <li className="main_footer__nav__item">
                        <NavLink className="main_footer__nav__link" to="/">Accueil</NavLink>
                    </li>
                    <li className="main_footer__nav__item">
                        <NavLink className="main_footer__nav__link" to="/mentions-legales">Mentions légales</NavLink>
                        </li>
                    <li className="main_footer__nav__item">
                        <NavLink className="main_footer__nav__link" to="/cookies">Cookies</NavLink>
                        </li>
                    <li className="main_footer__nav__item">
                        <NavLink className="main_footer__nav__link" to="/sitemap">Plan du site</NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer
