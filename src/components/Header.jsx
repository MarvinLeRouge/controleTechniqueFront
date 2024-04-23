import { useState } from 'react'
import '../assets/css/components/Header.css'

function Header() {
    return (
        <header className="main_header">
            <h1>Truckbuster</h1>
            <p className="main_header__address">14 N Moore St, New York, NY 10013, États-Unis</p>
        </header>
    )
}

export default Header
