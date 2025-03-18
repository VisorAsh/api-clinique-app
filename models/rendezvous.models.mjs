import mongoose from "mongoose"
const { Schema, model } = mongoose

const RendezVousSchema = new Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patients", required: true },
    motif: { type: String, required: true },
    specialite: { type: String, required: true },
    heure: { type: String, required: true },
    dateReservation: { type: Date, default: Date.now(), required: true },
    dateRdv: { type: Date, required: true },
    status: { type: String, enum: ["En attente", "Confirmé", "Annulé"], default: "En attente" },
    notification: { type: Boolean, default: false },
    type: { type: String, enum: ["Présentiel", "Téléconsultation"], required: true }
})

export const RendezVousModel = model.RendezVous || model("RendezVous", RendezVousSchema)