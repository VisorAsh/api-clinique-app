import mongoose from "mongoose"
const { model, Schema } = mongoose

const InfosPatientsSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    dateNaissance: { type: Date, required: true },
    contact: { type: String, required: true },
    email: { type: String },
    sexe: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
})

export const InfosPatientsModel = model.Patients || model("Patients", InfosPatientsSchema)