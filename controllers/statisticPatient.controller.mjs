import { MongoConnected } from "../db/db.mjs"
import { StatistiquePatientModel } from "../models/statistique.model.mjs"

export const CreateStatistiquePatient = async (req, res) => {
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Creation de statistque du patient
            const statistic = StatistiquePatientModel(req.body)
            await statistic.save()

            if (statistic) {
                res.status(200).json({ message: "Statistique patient créé avec succès !", data: statistic })
            } else {
                res.status(400).json({ message: "Echec de la création du statistique patient !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const GetStatistiquePatient = async (req, res) => {
    const { _id } = req.params
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récuperation du statistque du patient
            const statistic = await StatistiquePatientModel.findById(_id)

            if (statistic) {
                res.status(200).json({ message: "Statistique patient recupéré avec succès !", data: statistic })
            } else {
                res.status(404).json({ message: "Echec de la récupération du statistique patient !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })


    } catch (error) {
        console.log(error)
    }
}


export const UpdateStatistiquePatient = async (req, res) => {
    const { _id } = req.params
    const updateData = req.body
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Modificaion du statistque du patient
            const statistic = await StatistiquePatientModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true })
            if (statistic) {
                res.status(200).json({ message: "Statistique patient modifié avec succès !", data: statistic })
            } else res.status(404).json({ message: "Echec de la modification du statistique patient !" })

        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const DeleteStatistiquePatient = async (req, res) => {
    const { _id } = req.params
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Modificaion du statistque du patient
            const statistic = await StatistiquePatientModel.findByIdAndDelete(_id)
            if (statistic) {
                res.status(200).json({ message: "Statistique patient supprimé avec succès !" })
            } else {
                res.status(404).json({ message: "Echec de la suppression du statistique patient !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}