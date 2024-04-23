export async function apiHoraires() {
    console.log("apiHoraires")
    let url = process.env.CTRDV_API_URL + '/static/horaires'
    try {
        const reqInfos = new Request(url,  {method: "get"})
        const req = await fetch(reqInfos)
        const result = await req.json()
        return result
    }
    catch(error) {
        console.error("apiHoraires error", error)
        throw new Error("apiHoraires")
    }
}

export async function apiSyntheseRdvs() {
    console.log("apiSyntheseRdvs")
    let url = process.env.CTRDV_API_URL + '/rdv/synthese'
    try {
        const reqInfos = new Request(url,  {method: "get"})
        const req = await fetch(reqInfos)

        const result = await req.json()
        return result
    }
    catch(error) {
        console.error("apiSyntheseRdvs error", error)
        throw new Error("apiSyntheseRdvs")
    }
}

export async function apiPriseRdv(formData) {
    console.log("apiPriseRdv")
    let urlClient = process.env.CTRDV_API_URL + '/client'
    let urlTruck = process.env.CTRDV_API_URL + '/truck'
    let urlBridge = process.env.CTRDV_API_URL + '/bridge/firstAvailable'
    let urlRdv = process.env.CTRDV_API_URL + '/rdv'
    let result = {
        "status": "pb",
    }
    try {
        // Date
        let rdvDate = new Date(formData["rdvDate"])
        rdvDate.setHours(formData["rdvHour"], 0, 0, 0)

        // Client
        let clientData = {
            "email": formData["email"],
            "nom": formData["nom"],
            "prenom": formData["prenom"],
            "telephone": formData["telephone"],
            "entrepriseNom": formData["entrepriseNom"],
            "entrepriseAdresse": formData["entrepriseAdresse"],
        }
        let reqInfos = new Request(urlClient,  {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(clientData)
        })
        let req = await fetch(reqInfos)
        let clientResult = await req.json()
        console.log("Création client", clientResult)
        // Test présence id
        if((clientResult["status"] != "ok") || (!clientResult["id"])) {
            result["msg"] = "Problème lors de la création du compte client"
        }
        let clientId = clientResult["id"]
        console.log("clientId", clientId)

        // Truck
        let truckData = {
            "marque": formData["marque"],
            "modele": formData["modele"],
            "immatriculation": formData["immatriculation"],
            "client": clientId,
        }
        console.log("truckData", truckData)
        reqInfos = new Request(urlTruck,  {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(truckData)
        })
        req = await fetch(reqInfos)
        let truckResult = await req.json()
        console.log("Création truck", truckResult)
        // Test présence id
        if((truckResult["status"] != "ok") || (!truckResult["id"])) {
            result["msg"] = "Problème lors de l'enregistrement du véhicule"
        }
        let truckId = truckResult["id"]
        console.log("truckId", truckId)

        // Bridge
        urlBridge+= "/" + rdvDate
        reqInfos = new Request(urlBridge,  {
            method: "get",
            headers: { 'Content-Type': 'application/json' },
        })
        req = await fetch(reqInfos)
        let bridgeResult = await req.json()
        console.log("Get available bridge", bridgeResult)
        // Test présence id
        if((bridgeResult["status"] != "ok") || (!bridgeResult["data"]) || (!bridgeResult["data"].length)) {
            result["msg"] = "Aucun pont disponible. Votre créneau a été réservé par une autre personne entretemps."
        }
        let bridgeId = bridgeResult["data"][0]

        // Rdv
        let rdvData = {
            "date": rdvDate,
            "truck": truckId,
            "bridge": bridgeId,
        }
        reqInfos = new Request(urlRdv,  {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rdvData)
        })
        req = await fetch(reqInfos)
        let rdvResult = await req.json()
        console.log("Création rdv", rdvResult)
        // Test présence id
        if((rdvResult["status"] != "ok") || (!rdvResult["id"])) {
            result["msg"] = "Problème lors de l'enregistrement du rendez-vous."
        }
        result = {
            "status": "ok"
        }
    }
    catch(error) {
        console.error("apiPriseRdv error", error)
        throw new Error("apiPriseRdv")
    }
    return result
}

