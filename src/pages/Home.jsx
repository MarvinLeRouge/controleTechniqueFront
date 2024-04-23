import { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import '../assets/css/pages/Home.css'
import Calendar from '../components/Calendar'

function Home() {
    const [searchParams, setSearchParams] = useSearchParams();
    const nbJours = searchParams.get("nbJours") || 7;

    return (
        <>
            <Calendar nbJours={nbJours} />
        </>
    )
}

export default Home
