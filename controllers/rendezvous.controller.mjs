import { RendezVousModel } from "../models/rendezvous.models.mjs"

export const CreateRendezvous = async (req, res) => {
    try {
        //pendre un rendez vous 
        const rdv = new RendezVousModel(req.body)
        await rdv.save()
        if (rdv) {
            res.status(201).json({ message: "rendez-vous prise en compte !", data: rdv })
        } else {
            res.status(400).json({ message: "erreur lors de la pris de rdv !" })
        }
    } catch (error) {
        console.log(error)
    }
}

export const GetRendezvous = async (req, res) => {
    try {
        const { patientID } = req.params // id du rdv
        //Récupérons un rendez vous
        const rdv = await RendezVousModel.findOne({ patientID })
        if (rdv) {
            res.status(201).json({ message: "rendez-vous trouvé avec succès !", data: rdv })
        } else {
            res.status(400).json({ message: "rendez-vous non trouvé !" })
        }
    } catch (error) {
        console.log(error)
    }
}

export const UpdateRendezvous = async (req, res) => {
    try {
        const { patientID } = req.params // id du rdv
        const updateData = req.body

        //Récupérons un rendez vous
        const rdv = await RendezVousModel.findOneAndUpdate({ patientID }, { $set: updateData }, { new: true, runValidators: true })
        if (rdv) {
            res.status(201).json({ message: "rendez-vous modifié avec succès !", data: rdv })
        } else {
            res.status(400).json({ message: "rendez-vous non modifié !" })
        }
    } catch (error) {
        console.log(error)
    }
}

