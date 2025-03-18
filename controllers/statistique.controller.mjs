import { MongoConnected } from "../db/db.mjs"
import { StatistiqueModel } from "../models/statistiqueModel.mjs"

export const CreateStatistique = async (req, res) => {
    const { patientId } = req.body
    try {
        //Connexion à la base de donnée
        const db = await MongoConnected()
        if (db === "ok") {

            // Vérifier si la statistique du patient existe déjà
            const statisticExist = await StatistiqueModel.findById(patientId)
            if (statisticExist) {
                return res.status(400).json({ message: "Statistique patient déjà créé !" })
            }
            const statistic = new StatistiqueModel(req.body)
            await statistic.save()

            if (statistic) {
                res.status(201).json({ message: "Statistique patient ajouté avec succès !", data: statistic })
            } else {
                res.status(400).json({ message: "Erreur de l'ajout du statistique patient !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const GetStatistique = async (req, res) => {
    const { _id } = req.params
    try {
        //Connexion à la base de donnée
        const db = await MongoConnected()
        if (db === "ok") {
            // Vérifier si la statistique du patient existe déjà
            const statistic = await StatistiqueModel.findById(_id).populate("patientId")

            if (statistic) {
                res.status(201).json({ message: "Statistique patient récupéré avec succès !", data: statistic })
            } else {
                res.status(400).json({ message: "Erreur de récupération du statistique patient !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const UpdateStatistique = async (req, res) => {
    const { _id } = req.params
    const updateData = req.body
    try {
        //Connexion à la base de donnée
        const db = await MongoConnected()
        if (db === "ok") {

            // Vérifier si la statistique du patient existe déjà
            const statistic = await StatistiqueModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true }).populate("patientId")

            if (statistic) {
                res.status(201).json({ message: "Statistique patient modifié avec succès !", data: statistic })
            } else {
                res.status(400).json({ message: "Erreur de modification du statistique patient !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const DeleteStatistique = async (req, res) => {
    const { _id } = req.params
    try {
        //Connexion à la base de donnée
        const db = await MongoConnected()
        if (db === "ok") {

            // Vérifier si la statistique du patient existe déjà
            const statistic = await StatistiqueModel.findByIdAndDelete(_id)

            if (statistic) {
                res.status(201).json({ message: "Statistique patient supprimé avec succès !" })
            } else {
                res.status(400).json({ message: "Erreur de suppression du statistique patient !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}