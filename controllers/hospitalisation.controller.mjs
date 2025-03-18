import { MongoConnected } from "../db/db.mjs"
import { HospitalisationsModel } from "../models/hospitalisations.model.mjs"

export const CreateHospitalisations = async (req, res) => {
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Création d'une hospitalisation
            const hospitalisation = new HospitalisationsModel(req.body)
            await hospitalisation.save()

            if (hospitalisation) {
                res.status(201).json({ message: "Hospitalisation ajoutée avec succès !", data: hospitalisation })
            } else {
                res.status(400).json({ message: "Hospitalisation non ajoutée !" })
            }

        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}

export const GetHospitalisations = async (req, res) => {
    const { _id } = req.params
    try {

        const db = await MongoConnected()
        if (db === "ok") {
            //Récupération des données de l'hospitalisation
            const hospitalisation = await HospitalisationsModel.findById(_id).populate("patientId")

            if (hospitalisation) {
                res.status(201).json({ message: "Hospitalisation récupérée avec succès !", data: hospitalisation })
            } else {
                res.status(400).json({ message: "Hospitalisation non récupérée !" })
            }

        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const UpdateHospitalisations = async (req, res) => {
    const { _id } = req.params
    const updateData = req.body
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récupération des données de l'hospitalisation
            const hospitalisation = await HospitalisationsModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true }).populate("patientId")

            if (hospitalisation) {
                res.status(201).json({ message: "Hospitalisation modifiée avec succès !", data: hospitalisation })
            } else {
                res.status(400).json({ message: "Hospitalisation non modifiée !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const DeleteHospitalisations = async (req, res) => {
    const { _id } = req.params
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récupération des données de l'hospitalisation
            const hospitalisation = await HospitalisationsModel.findByIdAndDelete(_id)

            if (hospitalisation) {
                res.status(201).json({ message: "Hospitalisation supprimée avec succès !" })
            } else {
                res.status(400).json({ message: "Erreur survenue lors de la suppression de l'hospitalisation !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}
