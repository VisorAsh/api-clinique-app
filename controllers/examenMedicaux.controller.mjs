import { MongoConnected } from "../db/db.mjs"
import { ExamenMedicalModel } from "../models/examenMedical.model.mjs"

export const CreateExamenMedicaux = async (req, res) => {
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Création d'un examen médical
            const examen = new ExamenMedicalModel(req.body)
            await examen.save()

            if (examen) {
                res.status(201).json({ message: "Examen médical crée avec succès !", data: examen })
            } else {
                res.status(400).json({ message: "Echec de la création de l'examen médical !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}

export const GetExamenMedicaux = async (req, res) => {
    const { _id } = req.params
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récupérons l' examen médical
            const examen = await ExamenMedicalModel.findById(_id)

            if (examen) {
                res.status(201).json({ message: "Examen médical récupéré avec succès !", data: examen })
            } else {
                res.status(400).json({ message: "Examen médical non trouvé !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const UpdateExamenMedicaux = async (req, res) => {
    const { _id } = req.params
    const updateData = req.body
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Modifions l' examen médical
            const examen = await ExamenMedicalModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true })

            if (examen) {
                res.status(201).json({ message: "Examen médical modifié avec succès !", data: examen })
            } else {
                res.status(400).json({ message: "Examen médical non modifié !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}




export const DeleteExamenMedicaux = async (req, res) => {
    const { _id } = req.params
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Modifions l' examen médical
            const examen = await ExamenMedicalModel.findByIdAndDelete(_id)
            if (examen) {
                res.status(201).json({ message: "Examen médical supprimé avec succès !" })
            } else {
                res.status(400).json({ message: "Erreur survenue lors de la suppression de l'examen médical !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}

