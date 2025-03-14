import mongoose from "mongoose"
const { model, Schema } = mongoose

export const ExamenMedicalSchema = new Schema({
    patientID: { type: String, unique: true, required: true },
    typeExaman: { type: String, required: true }, // Type de l'examen ,ex: Scanner,IRM,Prise de sang
    dateExamen: { type: Date, required: true },
    resulatExamen: { type: String }, //Peut contenir une description
    fichierUrl: { type: String }, //Url du fichier stocké
})

export const ExamenMedicalModel = model.ExamenMedical || model("ExamenMedical", ExamenMedicalSchema)