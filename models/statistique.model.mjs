import mongoose from "mongoose"
const { model, Schema } = mongoose

const StatistiquePatientSchema = new Schema({
    patientID: { type: String, unique: true, required: true },
    date: { type: Date, default: Date.now() },
    tensionArterielle: { type: String, required: true },
    tauxGlycemie: { type: Number },
    poids: { type: Number },
    temperature: { type: Number },
    notes: { type: String }
})

export const StatistiquePatientModel = model.StatistiquePatients || model("StatistiquePatients", StatistiquePatientSchema)