import mongoose from "mongoose"
const { model, Schema } = mongoose

const ContactUrgenceSchema = new Schema({
    nom: { type: String, required: true },
    relation: { type: String, required: true },
    telephone: { type: String, required: true }
})

export const ContactUrgenceModel = model.ContactUrgence || model("ContactUrgence", ContactUrgenceSchema)