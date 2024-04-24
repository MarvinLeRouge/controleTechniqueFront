import { useState } from 'react'
import '../assets/css/pages/Page404.css'

function Page404() {
    return (
        <>
            <h1>Oops! Erreur 404</h1>
            <p>Il semble que le camion soit parti faire un contrôle technique dans les nuages et ait oublié de laisser une adresse.</p>
            <p>Pendant que nous recherchons activement le camion égaré, vous pouvez retourner à la <Link to="/">page d'accueil</Link> et explorer nos autres services.</p>

        </>
    )
}

export default Page404
