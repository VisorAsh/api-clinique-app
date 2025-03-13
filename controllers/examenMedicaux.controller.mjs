import { ExamenMedicalModel } from "../models/examenMedical.model.mjs"

export const CreateExamenMedicaux = async (req, res) => {
    try {
        //Création d'un examen médical
        const examen = new ExamenMedicalModel(req.body)
        await examen.save()

        if (examen) {
            res.status(201).json({ message: "Examen médical crée avec succès !", data: examen })
        } else {
            res.status(400).json({ message: "Echec de la création de l'examen médical !" })
        }
    } catch (error) {
        console.log(error)
    }
}

export const GetExamenMedicaux = async (req, res) => {
    try {
        //Récupérons l' examen médical
        const { id } = req.params
        const examen = await ExamenMedicalModel.findById(id).populate("patientID")

        if (examen) {
            res.status(201).json({ message: "Examen médical récupéré avec succès !", data: examen })
        } else {
            res.status(400).json({ message: "Examen médical non trouvé !" })
        }
    } catch (error) {
        console.log(error)
    }
}


export const UpdateExamenMedicaux = async (req, res) => {
    try {
        //Modifions l' examen médical
        const { id } = req.params
        const updateData = req.body
        const examen = await ExamenMedicalModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }).populate("patientID")

        if (examen) {
            res.status(201).json({ message: "Examen médical modifié avec succès !", data: examen })
        } else {
            res.status(400).json({ message: "Examen médical non modifié !" })
        }
    } catch (error) {
        console.log(error)
    }
}

