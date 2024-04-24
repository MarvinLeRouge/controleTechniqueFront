import { useEffect, useState } from 'react'
import '../assets/css/components/Header.css'

function Header() {
    const [titleParts, setTitleParts] = useState([,])
    useEffect(() => {
        setTitleParts(document.title.split(" | "))
    })

    return (
        <header className="main_header">
            <h1>{titleParts[0]}<br />{titleParts[1]}</h1>
            <p className="main_header__address">14 N Moore St, New York, NY 10013, États-Unis</p>
        </header>
    )
}

export default Header
