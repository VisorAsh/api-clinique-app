import mongoose from "mongoose"
const { models, model, Schema } = mongoose

export const MaladieChronicSchema = new Schema({
    patientID: { type: String, unique: true, required: true },
    maladie: { type: String, required: true },
    dateDebut: { type: Date, default: Date.now(), required: true },
    dateFin: { type: Date, required: true },
    misesAJourEtatDeSante: [{
        date: { type: Date, required: true, default: Date.now() },
        status: { type: String, enum: ["Stable", "Amelioration", "Aggravation"], required: true }
    }]
})

export const MaladieChronicModel = models.MaladieChronic || model("MaladieChronic", MaladieChronicSchema)