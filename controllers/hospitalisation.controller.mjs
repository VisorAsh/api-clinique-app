import { HospitalisationsModel } from "../models/hospitalisations.model.mjs"

export const CreateHospitalisations = async (req, res) => {
    try {

        //Création d'une hospitalisation
        const hospitalisation = new HospitalisationsModel(req.body)
        await hospitalisation.save()

        if (hospitalisation) {
            res.status(201).json({ message: "Hospitalisation ajoutée avec succès !", data: hospitalisation })
        } else {
            res.status(400).json({ message: "Hospitalisation non ajoutée !" })
        }

    } catch (error) {
        console.log(error)
    }
}

export const GetHospitalisations = async (req, res) => {
    try {

        //Récupération des données de l'hospitalisation
        const { id } = req.params
        const hospitalisation = await HospitalisationsModel.findById(id).populate("patientID")

        if (hospitalisation) {
            res.status(201).json({ message: "Hospitalisation récupérée avec succès !", data: hospitalisation })
        } else {
            res.status(400).json({ message: "Hospitalisation non récupérée !" })
        }

    } catch (error) {
        console.log(error)
    }
}


export const UpdateHospitalisations = async (req, res) => {
    try {
        //Récupération des données de l'hospitalisation
        const { id } = req.params
        const updateData = req.body
        const hospitalisation = await HospitalisationsModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }).populate("patientID")

        if (hospitalisation) {
            res.status(201).json({ message: "Hospitalisation modifiée avec succès !", data: hospitalisation })
        } else {
            res.status(400).json({ message: "Hospitalisation non modifiée !" })
        }

    } catch (error) {
        console.log(error)
    }
}

