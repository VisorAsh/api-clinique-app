import { InfosPatientsModel } from "../models/patients.models.mjs"

export const CreatePatient = async (req, res) => {
    try {

        //Vérifions si l'id du patient existe déjà dans la base de donnée
        const { patientID, nom, prenom, email, contact, dateNaissance, sexe, createdAt } = req.body

        const patientExist = await InfosPatientsModel.findOne({ patientID })
        if (patientExist) {
            return res.status(400).json({ message: "Cet identifaint est déjà utilisé ,veillez renseigner un autre identifiant !" })
        }

        //Enregistrons patientID si ça n'existe pas dans notre base de donnée

        const patient = new InfosPatientsModel({ patientID, email, nom, prenom, contact, dateNaissance, sexe, createdAt })
        await patient.save()

        if (patient) {
            res.status(201).json({ message: "Patient crée avec succès !", data: patient })
        } else {
            res.status(400).json({ message: "Patient non crée !" })
        }

    } catch (error) {
        console.log(error)
    }
}


export const GetPatient = async (req, res) => {
    try {
        //Récupérons le patient à travers son id : patientID
        const { patientID } = req.params
        console.log("ID du patient reçu :", patientID)
        const data = await InfosPatientsModel.findOne({ patientID })

        if (data) {
            res.status(200).json({ message: "Utilisateur trouvé ", patient: data })
        } else {
            res.status(404).json({ message: "Utilisateur Inexistant !" })
        }
    } catch (error) {
        console.log(error)
    }
}

export const UpdatePatient = async (req, res) => {
    try {
        const { patientID } = req.params; // Récupération de l'ID du patient dans l'URL
        const updateData = req.body; // Données envoyées par le client
        console.log(updateData)
        const data = await InfosPatientsModel.findOneAndUpdate({ patientID }, { $set: updateData }, { new: true, runValidators: true })

        if (data) {
            res.status(200).json({ message: "Utilisateur mis à jour avec succès ", patient: data })
        } else {
            res.status(400).json({ message: "Echec de la mise à jour !" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erreur survenue lors de la modification du patient", error: error.message })
    }
}

export const DeletePatient = async (req, res) => {
    try {
        const { patientID } = req.params; // Récupération de l'ID du patient dans l'URL
        console.log(patientID)
        const data = await InfosPatientsModel.findOneAndDelete({ patientID })

        if (data) {
            res.status(200).json({ message: "Utilisateur supprimé avec succès " })
        } else {
            res.status(400).json({ message: "Echec de la suppression" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erreur survenue lors de la suppression du patient", error: error.message })
    }
}
