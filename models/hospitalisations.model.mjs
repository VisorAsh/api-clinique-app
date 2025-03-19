import mongoose from "mongoose"
const { model, Schema } = mongoose

const HospitalisationsSchema = new Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patients", required: true },
    nomPatient: { type: String, required: true },
    medecin: { type: String, required: true },
    chambre: { type: String, required: true },
    dateAdmission: { type: Date, required: true },
    dateSortie: { type: Date },
    motif: { type: String, required: true },
    statut: {
        type: String,
        enum: ["en cours", "terminée", "annulée"],
        default: "en cours"
    },
    symptoms: { type: String, required: false }
})

export const HospitalisationsModel = model.Hospitalisations || model("Hospitalisations", HospitalisationsSchema)