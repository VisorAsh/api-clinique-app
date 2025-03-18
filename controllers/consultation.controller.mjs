import { MongoConnected } from "../db/db.mjs"
import { ConsultationModel } from "../models/consultationModel.model.mjs"

export const CreateConsultaion = async (req, res) => {
    try {
        //connexion à la base de donnée
        const db = await MongoConnected()
        if (db === "ok") {
            const consultation = new ConsultationModel(req.body)
            await consultation.save()

            if (consultation) {
                res.status(200).json({ message: "Consultation ajoutée avec succès !", data: consultation })
            } else {
                res.status(404).json({ message: "Echec de création de la consultation !" })
            }

        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const GetConsultaion = async (req, res) => {
    const { _id } = req.params
    try {
        //connexion à la base de donnée
        const db = await MongoConnected()
        if (db === "ok") {
            const consultation = await ConsultationModel.findById(_id).populate("patientId")

            if (consultation) {
                res.status(200).json({ message: "Consultation récupérée avec succès !", data: consultation })
            } else {
                res.status(404).json({ message: "Echec de récupération de la consultation !" })
            }

        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}

export const UpdateConsultaion = async (req, res) => {
    const { _id } = req.params
    const updateData = req.body
    try {
        //connexion à la base de donnée
        const db = await MongoConnected()
        if (db === "ok") {
            const consultation = await ConsultationModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true }).populate("patientId")

            if (consultation) {
                res.status(200).json({ message: "Consultation modifiée avec succès !", data: consultation })
            } else {
                res.status(404).json({ message: "Echec de modification de la consultation !" })
            }

        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}

export const DeleteConsultaion = async (req, res) => {
    const { _id } = req.params
    try {
        //connexion à la base de donnée
        const db = await MongoConnected()
        if (db === "ok") {
            const consultation = await ConsultationModel.findByIdAndDelete(_id)

            if (consultation) {
                res.status(200).json({ message: "Consultation supprimée avec succès !", data: consultation })
            } else {
                res.status(404).json({ message: "Echec de suppression de la consultation !" })
            }

        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}