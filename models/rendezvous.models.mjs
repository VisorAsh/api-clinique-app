import mongoose, { trusted } from "mongoose"
const { Schema, model } = mongoose

export const RendezVousSchema = new Schema({
    motif: { type: String, required: true },
    specialite: { type: String, required: true },
    dateReservation: { type: Date, default: Date.now(), required: true },
    dateRdv: { type: Date, required: true },
    status: { type: String, enum: ["En attente", "Confirmé", "Annulé"], default: "En attente" },
    notification: { type: Boolean, default: false }
})

export const RendezVousModel = model.RendezVous || model("RendezVous", RendezVousSchema)