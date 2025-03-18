import mongoose from "mongoose"
const { Schema, model } = mongoose

const ConsultationSchema = new Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patients", required: true },
    date: { type: Date, default: Date.now },
    motif: { type: String, required: true },
    diagnostic: { type: String, required: true },
    traitement: { type: String, required: true },
    medecin: { type: String, required: true },
    specialite: { type: String, required: true },
    tensionArterielle: { type: String, required: true },
    tauxGlycemie: { type: Number, required: true },
    frequenceCardiaque: { type: Number },
    poids: { type: Number, required: true },
    temperature: { type: Number, required: true },
    notes: { type: String, required: true },
    medicaments: [String],
    taille: { type: Number },
    instructions: { type: String },
    allergies: [{ type: String }],
    antecedentsMedicaux: [{ type: String }],
    teleconsultation: { type: Boolean, default: false },
    visioLink: { type: String },
    messages: [{ sender: String, message: String, timestamp: Date }],
})

export const ConsultationModel = model.Consultations || model("Consultations", ConsultationSchema)