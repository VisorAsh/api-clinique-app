import mongoose from "mongoose"
const { Schema, model } = mongoose

const StatistiqueSchema = new Schema({
    taille: { type: Number },
    poids: { type: Number },
    tension: { type: Number },
    temperature: { type: Number },
    consultationsTotal: { type: Number, default: 0 },
    hospitalisationsTotal: { type: Number, default: 0 },
    traitementsActuels: [String],
    antecedentsMedicaux: [{ type: String }],
    allergies: [{ type: String }],
    dateDerniereConsultation: { type: Date },
    statutSante: { type: String, enum: ["Stable", "Critique", "En amélioration"] }
})

export const StatistiqueModel = model.Statistiques || model("Statistiques", StatistiqueSchema)
