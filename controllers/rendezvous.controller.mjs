import { MongoConnected } from "../db/db.mjs"
import { RendezVousModel } from "../models/rendezvous.models.mjs"

export const CreateRendezvous = async (req, res) => {
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //pendre un rendez vous 
            const rdv = new RendezVousModel(req.body)
            await rdv.save()
            if (rdv) {
                res.status(201).json({ message: "rendez-vous prise en compte !", data: rdv })
            } else {
                res.status(400).json({ message: "erreur lors de la pris de rdv !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}

export const GetRendezvous = async (req, res) => {
    const { _id } = req.params // id du rdv

    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récupérons un rendez vous
            const rdv = await RendezVousModel.findById(_id)
            if (rdv) {
                res.status(201).json({ message: "rendez-vous trouvé avec succès !", data: rdv })
            } else {
                res.status(400).json({ message: "rendez-vous non trouvé !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}

export const UpdateRendezvous = async (req, res) => {
    const { _id } = req.params // id du rdv
    const updateData = req.body
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récupérons un rendez vous
            const rdv = await RendezVousModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true })
            if (rdv) {
                res.status(201).json({ message: "rendez-vous modifié avec succès !", data: rdv })
            } else {
                res.status(400).json({ message: "rendez-vous non modifié !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const DeleteRendezvous = async (req, res) => {
    const { _id } = req.params // id du rdv

    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récupérons un rendez vous
            const rdv = await RendezVousModel.findByIdAndDelete(_id)
            if (rdv) {
                res.status(201).json({ message: "rendez-vous supprimé avec succès !" })
            } else {
                res.status(400).json({ message: "Erreur survenue lors de la suppression du rendez-vous !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}