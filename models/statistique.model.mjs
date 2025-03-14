import mongoose from "mongoose"
const { models, model, Schema } = mongoose

const StatistiquePatientSchema = new Schema({
    patientID: { type: String, unique: true, required: true },
    date: { type: Date, default: Date.now() },
    tensionArterielle: { type: String, required: true },
    tauxGlycemie: { type: Number },
    poids: { type: Number },
    temperature: { type: Number },
    notes: { type: String }
})

export const StatistiquePatientModel = models.StatistiquePatients || model("StatistiquePatients", StatistiquePatientSchema)