import { StatistiquePatientModel } from "../models/statistique.model.mjs"

export const CreateStatistiquePatient = async (req, res) => {
    try {
        //Creation de statistque du patient
        const statistic = StatistiquePatientModel(req.body)
        await statistic.save()

        if (statistic) {
            res.status(200).json({ message: "Statistique patient créé avec succès !", data: statistic })
        } else {
            res.status(400).json({ message: "Echec de la création du statistique patient !" })
        }

    } catch (error) {
        console.log(error)
    }
}


export const GetStatistiquePatient = async (req, res) => {
    try {
        //Récuperation du statistque du patient
        const { id } = req.params
        const statistic = await StatistiquePatientModel.findById(id).populate("patientID")

        if (statistic) {
            res.status(200).json({ message: "Statistique patient recupéré avec succès !", data: statistic })
        } else {
            res.status(404).json({ message: "Echec de la récupération du statistique patient !" })
        }

    } catch (error) {
        console.log(error)
    }
}


export const UpdateStatistiquePatient = async (req, res) => {
    try {
        //Modificaion du statistque du patient
        const { id } = req.params
        const updateData = req.body
        const statistic = await StatistiquePatientModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }).populate("patientID")

        if (statistic) {
            res.status(200).json({ message: "Statistique patient modifié avec succès !", data: statistic })
        } else {
            res.status(404).json({ message: "Echec de la modification du statistique patient !" })
        }

    } catch (error) {
        console.log(error)
    }
}