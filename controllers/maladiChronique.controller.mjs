import { MaladieChronicModel } from "../models/maladieChronic.model.mjs"

export const CreateMaladieChronic = async (req, res) => {
    try {
        //Ajout de maladie chrononique
        const maladie = new MaladieChronicModel(req.body)
        await maladie.save()

        if (maladie) {
            res.status(201).json({ message: "Maladie chronique ajoutée avec succès !", data: maladie })
        } else {
            res.status(400).json({ message: "Echec lors de l'ajout de la maladie chronique !" })
        }
    } catch (error) {
        console.log(error)
    }
}

export const GetMaladieChronic = async (req, res) => {
    try {
        //Récupérons une maladie chrononique
        const { id } = req.params
        const maladie = await MaladieChronicModel.findById(id).populate("patientID")

        if (maladie) {
            res.status(201).json({ message: "Maladie chronique récuperée avec succès !", data: maladie })
        } else {
            res.status(400).json({ message: "Echec de la récupération de la maladie chronique !" })
        }
    } catch (error) {
        console.log(error)
    }
}



export const UpdateMaladieChronic = async (req, res) => {
    try {
        //Modification de la maladie chrononique
        const { id } = req.params
        const updateData = req.body
        const maladie = await MaladieChronicModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }).populate("patientID")

        if (maladie) {
            res.status(201).json({ message: "Maladie chronique modifiée avec succès !", data: maladie })
        } else {
            res.status(400).json({ message: "Echec de la modification de la maladie chronique !" })
        }
    } catch (error) {
        console.log(error)
    }
}
