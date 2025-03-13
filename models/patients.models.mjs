import mongoose from "mongoose"
import { type } from "os"
const { models, model, Schema } = mongoose

const InfosPatientsSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    dateNaissance: { type: Date, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    sexe: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() }
})

export const InfosPatientsModel = models.Patients || model("Patients", InfosPatientsSchema)