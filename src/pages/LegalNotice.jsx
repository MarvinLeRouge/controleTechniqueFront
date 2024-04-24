import { useState } from 'react'
import '../assets/css/pages/LegalNotice.css'

function LegalNotice() {
    document.title = "Contrôle technique Truckbuster | Mentions légales"
    return (
        <>
            <h2 className="main_content__title">Mentions Légales</h2>

            <h2>Éditeur du Site</h2>
            <p>Ce site est édité par [Nom de l'entreprise], une société enregistrée au registre du commerce et des sociétés sous le numéro [Numéro RCS]. Le siège social est situé à [Adresse], et l'adresse e-mail de contact est [Adresse e-mail].</p>
            <p>Directeur de la publication : [Nom du Directeur]</p>

            <h2>Hébergement</h2>
            <p>Ce site est hébergé par [Nom de l'hébergeur], dont le siège social est situé à [Adresse].</p>

            <h2>Propriété Intellectuelle</h2>
            <p>L'ensemble des contenus présents sur ce site, incluant, mais sans s'y limiter, les textes, graphiques, logos, images, ainsi que leur mise en forme, sont la propriété exclusive de [Nom de l'entreprise] ou de ses partenaires. Toute reproduction, distribution, modification, ou utilisation de ces éléments sans autorisation expresse est interdite et pourrait donner lieu à des poursuites judiciaires.</p>

            <h2>Données Personnelles</h2>
            <p>Les données personnelles collectées sur ce site sont destinées à un usage interne. En aucun cas ces données ne seront cédées ou vendues à des tiers. Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de modification et de suppression de vos données. Pour exercer ce droit, veuillez nous contacter à l'adresse suivante : [Adresse postale] ou par e-mail à [Adresse e-mail].</p>

            <h2>Cookies</h2>
            <p>Ce site utilise des cookies à des fins de mesure d'audience et d'amélioration de l'expérience utilisateur. Vous pouvez désactiver l'utilisation des cookies dans les paramètres de votre navigateur.</p>

            <h2>Responsabilité</h2>
            <p>L'éditeur du site s'efforce de fournir des informations précises et à jour, mais ne peut garantir l'exactitude et l'exhaustivité des informations fournies. En conséquence, l'éditeur décline toute responsabilité quant à l'utilisation qui pourrait être faite des informations fournies sur ce site.</p>

            <h2>Liens Hypertextes</h2>
            <p>Ce site peut contenir des liens vers des sites tiers. Ces liens sont fournis uniquement pour votre commodité, et l'éditeur du site n'exerce aucun contrôle sur le contenu de ces sites. En conséquence, l'éditeur décline toute responsabilité quant au contenu, à la véracité ou aux pratiques de ces sites tiers.</p>

            <h2>Droit Applicable</h2>
            <p>Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>

            <h2>Licences</h2>
            <p>L'image utilisée en fond de page est sous licence Creatives Commons Attributions. Il s'agit de <a href="https://commons.wikimedia.org/wiki/File:Ghostbusters_Firehouse.jpg">https://commons.wikimedia.org/wiki/File:Ghostbusters_Firehouse.jpg</a> de l'auteur <em>Phillip Ritz from New York, NY, USA</em>.</p>

        </>
    )
}

export default LegalNotice
