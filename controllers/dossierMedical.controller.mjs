import { DossierMedicalModel } from "../models/DossierMedical.model.mjs";

export const CreateDossier = async (req, res) => {
    try {
        //créons un nouveau dossier patient
        const dossier = new DossierMedicalModel(req.body)
        await dossier.save()

        if (dossier) {
            res.status(201).json({ message: "Dossier crée avec succès !", data: dossier })
        } else {
            res.status(400).json({ message: "Dossier non crée !" })
        }
    } catch (error) {
        console.log(error);
    }
}

export const GetDossier = async (req, res) => {
    try {
        //Récupérons le dossier patient
        const { patientID } = req.params // l'id du dossier
        const dossier = await DossierMedicalModel.findOne({ patientID })

        if (dossier) {
            res.status(201).json({ message: "Dossier trouvé avec succès !", data: dossier })
        } else {
            res.status(400).json({ message: "Dossier non trouvé !" })
        }
    } catch (error) {
        console.log(error);
    }
}

export const UpdateDossier = async (req, res) => {
    try {

        const { patientID } = req.params // l'id du dossier
        const updateData = req.body
        //Modifions le dossier medical
        const dossier = await DossierMedicalModel.findByIdAndUpdate({ patientID }, { $set: updateData }, { new: true, runValidators: true })

        if (dossier) {
            res.status(201).json({ message: "Dossier modifié avec succès !", data: dossier })
        } else {
            res.status(400).json({ message: "Dossier non modifié !" })
        }
    } catch (error) {
        console.log(error);
    }
}

