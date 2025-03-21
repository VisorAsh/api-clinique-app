import mongoose from "mongoose"
const { model, Schema } = mongoose

const ContactUrgenceSchema = new Schema({
    patientId: { type: String, required: true },
    nom: { type: String, required: true },
    relation: { type: String, required: true },
    telephone: { type: String, required: true },
    adresse: { type: String, required: false }
})

export const ContactUrgenceModel = model.ContactUrgence || model("ContactUrgence", ContactUrgenceSchema)