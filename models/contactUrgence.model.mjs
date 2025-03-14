import mongoose from "mongoose"
const { models, model, Schema } = mongoose

const ContactUrgenceSchema = new Schema({
    patientID: { type: String, unique: true, required: true },
    nom: { type: String, required: true },
    relation: { type: String, required: true },
    telephone: { type: String, required: true }
})

export const ContactUrgenceModel = models.ContactUrgence || model("ContactUrgence", ContactUrgenceSchema)