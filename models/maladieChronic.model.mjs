import mongoose from "mongoose"
const { model, Schema } = mongoose

const MaladieChronicSchema = new Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patients", required: true },
    medecin: { type: String },
    maladie: { type: String, required: true },
    dateDebut: { type: Date, default: Date.now(), required: true },
    dateFin: { type: Date },
    misesAJourEtatDeSante: [{
        date: { type: Date, required: true, default: Date.now() },
        status: { type: String, enum: ["Stable", "Amelioration", "Aggravation"], required: true },
        commentaires: { type: String }
    }]
})

export const MaladieChronicModel = model.MaladieChronic || model("MaladieChronic", MaladieChronicSchema)