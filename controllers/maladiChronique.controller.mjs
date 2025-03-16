import { MongoConnected } from "../db/db.mjs"
import { MaladieChronicModel } from "../models/maladieChronic.model.mjs"

export const CreateMaladieChronic = async (req, res) => {
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Ajout de maladie chrononique
            const maladie = new MaladieChronicModel(req.body)
            await maladie.save()

            if (maladie) {
                res.status(201).json({ message: "Maladie chronique ajoutée avec succès !", data: maladie })
            } else {
                res.status(400).json({ message: "Echec lors de l'ajout de la maladie chronique !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}

export const GetMaladieChronic = async (req, res) => {
    const { _id } = req.params
    try {
        //Récupérons une maladie chrononique
        const db = await MongoConnected()
        if (db === "ok") {
            const maladie = await MaladieChronicModel.findById(_id)

            if (maladie) {
                res.status(201).json({ message: "Maladie chronique récuperée avec succès !", data: maladie })
            } else {
                res.status(400).json({ message: "Echec de la récupération de la maladie chronique !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}



export const UpdateMaladieChronic = async (req, res) => {
    const { _id } = req.params
    const updateData = req.body
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Modification de la maladie chrononique
            const maladie = await MaladieChronicModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true })

            if (maladie) {
                res.status(201).json({ message: "Maladie chronique modifiée avec succès !", data: maladie })
            } else {
                res.status(400).json({ message: "Echec de la modification de la maladie chronique !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}



export const DeleteMaladieChronic = async (req, res) => {
    const { _id } = req.params
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Modification de la maladie chrononique
            const maladie = await MaladieChronicModel.findByIdAndDelete(_id)

            if (maladie) {
                res.status(201).json({ message: "Maladie chronique supprimé avec succès !" })
            } else {
                res.status(400).json({ message: "Echec de la suppression de la maladie chronique !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}