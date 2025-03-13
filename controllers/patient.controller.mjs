import { InfosPatientsModel } from "../models/patients.models.mjs"

export const CreatePatient = async (req, res) => {
    try {
        const { nom, prenom, email, contact, dateNaissance, sexe, createdAt } = req.body

        //Ajoutons dans MongoDB
        const patient = new InfosPatientsModel({ email, nom, prenom, contact, dateNaissance, sexe, createdAt })
        await patient.save()

        if (patient) {
            res.status(201).json({ message: "Patient crée avec succès !" })
        } else {
            res.status(400).json({ message: "Patient non crée !" })
        }

    } catch (error) {
        console.log(error)
    }
}


export const GetPatient = async (req, res) => {
    try {
        const data = await InfosPatientsModel.findById(req.params.id)

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
        const { id } = req.params; // Récupération de l'ID du patient dans l'URL
        const updateData = req.body; // Données envoyées par le client
        console.log(id)
        const data = await InfosPatientsModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true })

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
        const { id } = req.params; // Récupération de l'ID du patient dans l'URL
        console.log(id)
        const data = await InfosPatientsModel.findByIdAndDelete(id)

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
