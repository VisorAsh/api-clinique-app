import { MongoConnected } from "../db/db.mjs";
import { DossierMedicalModel } from "../models/DossierMedical.model.mjs";

export const CreateDossier = async (req, res) => {
    const { _id, antecedentsMedicaux, consultations, prescriptions, hospitalisations } = req.body
    try {

        const db = await MongoConnected()
        if (db === "ok") {
            //Testons voir si le patient à déjà un dossier
            const dossierExist = await DossierMedicalModel.findById(_id)
            if (dossierExist) {
                return res.status(400).json({ message: "Ce patient a déjà un dossier médical !" })
            }

            //créons un nouveau dossier patient
            const dossier = new DossierMedicalModel({ _id, antecedentsMedicaux, consultations, prescriptions, hospitalisations })
            await dossier.save()

            if (dossier) {
                res.status(201).json({ message: "Dossier crée avec succès !", data: dossier })
            } else {
                res.status(400).json({ message: "Dossier non crée !" })
            }

        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error);
    }
}

export const GetDossier = async (req, res) => {

    const { _id } = req.params // l'id du dossier
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récupérons le dossier patient
            const dossier = await DossierMedicalModel.findById(_id)

            if (dossier) {
                res.status(201).json({ message: "Dossier trouvé avec succès !", data: dossier })
            } else {
                res.status(400).json({ message: "Dossier non trouvé !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error);
    }
}

export const UpdateDossier = async (req, res) => {
    const { _id } = req.params // l'id du dossier
    const updateData = req.body
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Modifions le dossier medical
            const dossier = await DossierMedicalModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true })

            if (dossier) {
                res.status(201).json({ message: "Dossier modifié avec succès !", data: dossier })
            } else {
                res.status(400).json({ message: "Dossier non modifié !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error);
    }
}


export const DeleteDossier = async (req, res) => {
    const { _id } = req.params // l'id du dossier
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Modifions le dossier medical
            const dossier = await DossierMedicalModel.findByIdAndDelete(_id)

            if (dossier) {
                res.status(201).json({ message: "Dossier supprimé avec succès !" })
            } else {
                res.status(400).json({ message: "Erreur lors de la suppression du dossier !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error);
    }
}
