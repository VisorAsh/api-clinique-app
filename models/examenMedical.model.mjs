import mongoose from "mongoose"
const { model, Schema } = mongoose

export const ExamenMedicalSchema = new Schema({
    typeExamen: { type: String, required: true },
    dateExamen: { type: Date, required: true },
    resulatExamen: { type: String },
    fichierUrl: { type: String }

})

export const ExamenMedicalModel = model.ExamenMedical || model("ExamenMedical", ExamenMedicalSchema)