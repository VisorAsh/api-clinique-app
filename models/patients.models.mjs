import mongoose from "mongoose"
const { model, Schema } = mongoose

const InfosPatientsSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    birthDate: { type: Date, required: true },
    telephone: { type: String, required: true },
    email: { type: String },
    ref: {type: String},
    gender: { type: String, required: true },
    emergencycontact: [],
    createdAt: { type: Date, default: Date.now() }
})

export const InfosPatientsModel = model.Patients || model("Patients", InfosPatientsSchema)