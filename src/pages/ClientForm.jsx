import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { apiPriseRdv } from "../services/Api"
import { Link } from "react-router-dom"
import '../assets/css/components/ClientForm.css'

function ClientForm() {
    let {rdvDate, rdvHour} = useParams()
    const [formStatus, setFormStatus] = useState(null)
    const [formData, setFormData] = useState({
        prenom: "", nom: "", 
        email: "", telephone: "", 
        entrepriseNom: "", entrepristatusseAdresse: "",
        marque: "", modele: "", 
        immatriculation: "", cgv: 1,
        rdvDate: rdvDate, rdvHour: rdvHour});    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        apiPriseRdv(formData).then((data) => {
            setFormStatus(data["status"])
        })
    };

    function ClientFormStatus({formStatus}) {
        if(formStatus == "ok") {
            return (
                <div className="clientForm__status ok"><p className="clientForm__status__msg">Votre rendez-vous a bien été enregistré.<br />Une confirmation vous a été envoyée par e-mail.<br /><Link className="clientForm__status__link" to="/">Retour à l'accueil</Link></p></div>
            )
        }
        else if(formStatus == "pb") {
            return (
                <div className="clientForm__status ok"><p className="clientForm__status__msg">Votre rendez-vous n'a pas pu être enregistré.<br />Le créneau a été pris entretemps.<br /><Link className="clientForm__status__link" to="/">Retour à l'accueil</Link></p></div>
            )
        }
        else {
            return (
                <></>
            )
        }
    }

    return (
        <>
        <div className="clientForm">
            <form onSubmit={handleSubmit}>
                <fieldset className="clientForm__client">
                    <legend>Vos coordonnées</legend>
                    <p className="clientForm__input_wrapper">
                        <label className="clientForm__label" htmlFor="prenom">Prénom</label>
                        <input required className="clientForm__input" type="text" name="prenom" id="prenom" placeholder="Prénom du conducteur" value={formData.prenom} onChange={handleChange} />
                    </p>
                    <p className="clientForm__input_wrapper">
                        <label className="clientForm__label" htmlFor="nom">Nom</label>
                        <input required className="clientForm__input" type="text" name="nom" id="nom" placeholder="Nom du conducteur" value={formData.nom} onChange={handleChange} />
                    </p>
                    <p className="clientForm__input_wrapper">
                        <label className="clientForm__label" htmlFor="email">E-mail</label>
                        <input required className="clientForm__input" type="email" name="email" id="email" placeholder="Adresse e-mail du conducteur" value={formData.email} onChange={handleChange} />
                    </p>
                    <p className="clientForm__input_wrapper">
                        <label className="clientForm__label" htmlFor="telephone">Téléphone portable</label>
                        <input required className="clientForm__input" type="tel" name="telephone" id="telephone" placeholder="Téléphone du conducteur" pattern="(?:\+33|0)[6-7][0-9]{8}" value={formData.telephone} onChange={handleChange} />
                    </p>
                    <p className="clientForm__input_wrapper">
                        <label className="clientForm__label" htmlFor="entrepriseNom">Nom de l'entreprise</label>
                        <input required className="clientForm__input" type="text" name="entrepriseNom" id="entrepriseNom" placeholder="Nom de l'entreprise" value={formData.entrepriseNom} onChange={handleChange} />
                    </p>
                    <p className="clientForm__input_wrapper">
                        <label className="clientForm__label" htmlFor="entrepriseAdresse">Adresse de l'entreprise</label>
                        <input required className="clientForm__input" type="text" name="entrepriseAdresse" id="entrepriseAdresse" placeholder="Adresse de l'entreprise" value={formData.entrepriseAdresse} onChange={handleChange} />
                    </p>
                </fieldset>
                <fieldset className="clientForm__truck">
                    <legend>Votre véhicule</legend>
                    <p className="clientForm__input_wrapper">
                        <label className="clientForm__label" htmlFor="marque">Marque</label>
                        <input required className="clientForm__input" type="text" name="marque" id="marque" placeholder="Marque du véhicule" value={formData.marque} onChange={handleChange} />
                    </p>
                    <p className="clientForm__input_wrapper">
                        <label className="clientForm__label" htmlFor="modele">Modèle</label>
                        <input required className="clientForm__input" type="text" name="modele" id="modele" placeholder="Modèle du véhicule" value={formData.modele} onChange={handleChange} />
                    </p>
                    <p className="clientForm__input_wrapper">
                        <label className="clientForm__label" htmlFor="immatriculation">Immatriculation</label>
                        <input required className="clientForm__input" type="text" name="immatriculation" id="immatriculation" placeholder="Immatriculation du véhicule" value={formData.immatriculation} onChange={handleChange} />
                    </p>
                </fieldset>
                <fieldset className="clientForm__recap">
                    <legend>Votre rendez-vous</legend>
                    <p className="clientForm__input_wrapper">
                        <span className="clientForm__label">Date du contrôle</span>
                        <span className="clientForm__input">{rdvDate} à {rdvHour}h</span>
                    </p>
                    <p className="clientForm__input_wrapper">
                        <span className="clientForm__label">Tarif du contrôle</span>
                        <span className="clientForm__input">100€</span>
                    </p>
                    <p className="clientForm__input_wrapper">
                        <input required type="checkbox" className="clientForm__input" name="cgv" id="cgv" value={formData.cgv} onChange={handleChange} />
                        <label className="clientForm__label" htmlFor="cgv">J'ai lu et j'accepte les conditions générales de vente</label>
                    </p>
                    <p className="clientForm__input_wrapper clientForm__submit_wrapper">
                    <input type="hidden" name="rdvDate" id="rdvDate" value={formData.rdvDate} />
                    <input type="hidden" name="rdvHour" id="rdvHour" value={formData.rdvHour} />
                        <button type="submit">Valider le rendez-vous</button>
                    </p>
                </fieldset>
            </form>
        </div>
        <ClientFormStatus formStatus={formStatus} />
        </>
    )
}

export default ClientForm
