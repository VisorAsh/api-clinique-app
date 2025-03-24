import { MongoConnected } from "../db/db.mjs"
import { ContactUrgenceModel } from "../models/contactUrgence.model.mjs"
import { InfosPatientsModel } from "../models/patients.models.mjs"

export const CreatePatient = async (req, res) => {
   const { nom, prenom, birthDate, telephone, email, gender, emergencyContacts } = req.body

    try {

        const db = await MongoConnected()
        if (db === "ok") {

            //On verifie si les contacts d'urgence existe
            if(emergencyContacts && emergencyContacts.length > 0) {
                //Vérifions si l'id du patient existe déjà dans la base de donnée
                const patientExist = await InfosPatientsModel.findOne({ email: email })
                if (patientExist) {
                    return res.status(500).json({ message: "Adresse email est déjà utilisé ,veillez renseigner un autre email !" })
                }
                
                //On créé une ref pour le patient
                // const ref = new Date().getTime()+Math.random()

                const patient = new InfosPatientsModel({ nom, prenom, birthDate, telephone, email, gender, emergencycontact: emergencyContacts})
                await patient.save()

                if (patient && patient._id) {
                    
                    
                    res.status(201).json({ message: "ok", data: patient })
                } else {
                    res.status(500).json({ message: "Patient non crée !" })
                }
            } else {
                res.json({message: "Contacts d'urgence obligatoire"})
            }

        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
        return res.json({message: "Erreur inconnue, verifier vos données ou votre connexion internet"})
    }
}


export const GetAllPatients = async (req, res) => {
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récupérons le patient à travers son id : patientID
            const data = await InfosPatientsModel.find()
            if (data) {
                res.status(200).json({ message: "ok", patient: data })
            } else {
                res.status(404).json({ message: "Utilisateur Inexistant !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })
    } catch (error) {
        console.log(error)
    }
}


export const GetPatient = async (req, res) => {
    const { _id } = req.params
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récupérons le patient à travers son id : patientID
            const data = await InfosPatientsModel.findById(_id)
            if (data) {
                res.status(200).json({ message: "ok", patient: data })
            } else {
                res.status(404).json({ message: "Utilisateur Inexistant !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })
    } catch (error) {
        console.log(error)
    }
}

export const UpdatePatient = async (req, res) => {
    const { _id } = req.params; // Récupération de l'ID du patient dans l'URL
    const updateData = req.body; // Données envoyées par le client
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            const data = await InfosPatientsModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true })
            if (data) {
                res.status(200).json({ message: "Utilisateur mis à jour avec succès ", patient: data })
            } else {
                res.status(400).json({ message: "Echec de la mise à jour !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erreur survenue lors de la modification du patient", error: error.message })
    }
}

export const DeletePatient = async (req, res) => {
    const { _id } = req.params; // Récupération de l'ID du patient dans l'URL
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            const data = await InfosPatientsModel.findByIdAndDelete(_id)

            if (data) {
                res.status(200).json({ message: "Utilisateur supprimé avec succès " })
            } else {
                res.status(400).json({ message: "Echec de la suppression" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erreur survenue lors de la suppression du patient", error: error.message })
    }
}
