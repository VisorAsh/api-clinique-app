import { ContactUrgenceModel } from "../models/contactUrgence.model.mjs"

export const CreateContactUrgence = async (req, res) => {
    try {

        const { patientID, nom, relation, telephone } = req.body

        //testons voir si le patient a déjà un contact urgence
        const contactExist = await ContactUrgenceModel.findOne({ patientID })
        if (contactExist) {
            return res.status(400).json({ message: "Ce patient a déjà un contact urgence !" })
        }

        //Création d'un contact urgence
        const contact = new ContactUrgenceModel({ patientID, nom, relation, telephone })
        await contact.save()

        if (contact) {
            res.status(200).json({ message: "Contact urgence créé avec succès !", data: contact })
        } else {
            res.status(400).json({ message: "Erreur , contact urgence non créé !" })
        }
    } catch (error) {
        console.log(error)
    }
}

export const GetContactUrgence = async (req, res) => {
    try {
        //Récupérons le contact urgence
        const { patientID } = req.params
        const contact = await ContactUrgenceModel.findOne({ patientID })

        if (contact) {
            res.status(200).json({ message: "Contact urgence récupéré avec succès !", data: contact })
        } else {
            res.status(400).json({ message: "Contact urgence inexistant !" })
        }
    } catch (error) {
        console.log(error)
    }
}


export const UpdateContactUrgence = async (req, res) => {
    try {
        //Modifions le contact urgence
        const { patientID } = req.params
        const updateData = req.body

        const contact = await ContactUrgenceModel.findOneAndUpdate({ patientID }, { $set: updateData }, { new: true, runValidators: true })

        if (contact) {
            res.status(200).json({ message: "Contact urgence modifié avec succès !", data: contact })
        } else {
            res.status(400).json({ message: "Erreur lors de la modification du contact urgence !" })
        }
    } catch (error) {
        console.log(error)
    }
}

