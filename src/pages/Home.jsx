import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import '../assets/css/pages/Home.css'
import Calendar from '../components/Calendar'

function Home() {
    document.title = "Contrôle technique Truckbuster | Prise de rendez-vous"
    const [searchParams, setSearchParams] = useSearchParams();
    const nbJours = searchParams.get("nbJours") || 7;

    return (
        <>
            <h2 className="main_content__title">Sélection d'un créneau</h2>
            <Calendar nbJours={nbJours} />
        </>
    )
}

export default Home
