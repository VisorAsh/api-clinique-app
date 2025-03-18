import mongoose from "mongoose"
const { model, Schema } = mongoose

const ExamenMedicalSchema = new Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patients", required: true },
    medecin: { type: String, required: true },
    specialite: { type: String, required: true },
    typeExamen: { type: String, required: true },
    dateExamen: { type: Date, required: true },
    resulatExamen: { type: String, required: true },
    fichierUrl: { type: String }
})

export const ExamenMedicalModel = model.ExamenMedical || model("ExamenMedical", ExamenMedicalSchema)