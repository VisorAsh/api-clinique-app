import { MongoConnected } from "../db/db.mjs"
import { ContactUrgenceModel } from "../models/contactUrgence.model.mjs"

export const CreateContactUrgence = async (req, res) => {
    const { _id, nom, relation, telephone } = req.body
    try {

        const db = await MongoConnected()
        if (db === "ok") {
            //testons voir si le patient a déjà un contact urgence
            const contactExist = await ContactUrgenceModel.findById(_id)
            if (contactExist) {
                return res.status(400).json({ message: "Ce patient a déjà un contact urgence !" })
            }

            //Création d'un contact urgence
            const contact = new ContactUrgenceModel({ _id, nom, relation, telephone })
            await contact.save()

            if (contact) {
                res.status(200).json({ message: "Contact urgence créé avec succès !", data: contact })
            } else {
                res.status(400).json({ message: "Erreur , contact urgence non créé !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })


    } catch (error) {
        console.log(error)
    }
}

export const GetContactUrgence = async (req, res) => {
    const { _id } = req.params
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récupérons le contact urgence
            const contact = await ContactUrgenceModel.findById(_id)
            if (contact) {
                res.status(200).json({ message: "Contact urgence récupéré avec succès !", data: contact })
            } else {
                res.status(400).json({ message: "Contact urgence inexistant !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const UpdateContactUrgence = async (req, res) => {
    const { _id } = req.params
    const updateData = req.body
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Modifions le contact urgence
            const contact = await ContactUrgenceModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true })

            if (contact) {
                res.status(200).json({ message: "Contact urgence modifié avec succès !", data: contact })
            } else {
                res.status(400).json({ message: "Erreur lors de la modification du contact urgence !" })
            }
            
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}

export const DeleteContactUrgence = async (req, res) => {
    const { _id } = req.params
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Supprimons le contact urgence
            const contact = await ContactUrgenceModel.findByIdAndDelete(_id)

            if (contact) {
                res.status(200).json({ message: "Contact urgence supprimé avec succès !", data: contact })
            } else {
                res.status(400).json({ message: "Erreur lors de la suppression du contact urgence !" })
            }

        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}
