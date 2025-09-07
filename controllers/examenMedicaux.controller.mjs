import { MongoConnected } from "../db/db.mjs"
import { ExamenMedicalModel } from "../models/examenMedical.model.mjs"

export const CreateExamenMedicaux = async (req, res) => {
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Création d'un examen médical
            const examen = new ExamenMedicalModel(req.body)
            await examen.save()

            if (examen) {
                res.status(201).json({ message: "Examen médical crée avec succès !", data: examen })
            } else {
                res.status(400).json({ message: "Echec de la création de l'examen médical !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}

export const GetAllExamens = async (req, res) => {
    try {
        const db = await MongoConnected();
        if (db === "ok") {
            const examens = await ExamenMedicalModel.find().populate("patientId");

            if (examens && examens.length > 0) {
                res.status(200).json({
                    message: "Examens médicaux récupérés avec succès !",
                    examens: examens,
                });
            } else {
                res.status(404).json({
                    message: "Aucun examen médical trouvé !",
                });
            }
        } else {
            return res.status(500).json({
                message: "Erreur de connexion à la base de données",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Erreur lors de la récupération des examens médicaux",
        });
    }
};

// Récupérer les examens d'un patient spécifique
export const GetExamensByPatient = async (req, res) => {
    const { patientId } = req.params;
    try {
        const db = await MongoConnected();
        if (db === "ok") {
            const examens = await ExamenMedicalModel.find({ patientId }).populate("patientId");

            if (examens && examens.length > 0) {
                res.status(200).json({
                    message: "Examens médicaux du patient récupérés avec succès !",
                    examens: examens,
                });
            } else {
                res.status(404).json({
                    message: "Aucun examen médical trouvé pour ce patient !",
                });
            }
        } else {
            return res.status(500).json({
                message: "Erreur de connexion à la base de données",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Erreur lors de la récupération des examens médicaux du patient",
        });
    }
};

export const GetExamenMedicaux = async (req, res) => {
    const { _id } = req.params
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récupérons l' examen médical
            const examen = await ExamenMedicalModel.findById(_id).populate("patientId")

            if (examen) {
                res.status(201).json({ message: "Examen médical récupéré avec succès !", data: examen })
            } else {
                res.status(400).json({ message: "Examen médical non trouvé !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const UpdateExamenMedicaux = async (req, res) => {
    const { _id } = req.params
    const updateData = req.body
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Modifions l' examen médical
            const examen = await ExamenMedicalModel.findByIdAndUpdate(_id, updateData, { new: true, runValidators: true }).populate("patientId")

            if (examen) {
                res.status(201).json({ message: "Examen médical modifié avec succès !", data: examen })
            } else {
                res.status(400).json({ message: "Examen médical non modifié !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}




export const DeleteExamenMedicaux = async (req, res) => {
    const { _id } = req.params
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Modifions l' examen médical
            const examen = await ExamenMedicalModel.findByIdAndDelete(_id)
            if (examen) {
                res.status(201).json({ message: "Examen médical supprimé avec succès !" })
            } else {
                res.status(400).json({ message: "Erreur survenue lors de la suppression de l'examen médical !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}

