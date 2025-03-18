import mongoose from "mongoose"
const { model, Schema } = mongoose

const HospitalisationsSchema = new Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patients", required: true },
    medecin: { type: String ,required:true},
    lieu: { type: String,required:true },
    dateAdmission: { type: Date, required: true },
    dateSortie: { type: Date },
    motif: { type: String, required: true },
    traitements: { type: [String], default: [] },
    interventionsChirurgicales: { type: [String], default: [] },
    resumeSuivi: { type: String },
    recommandations: { type: [String], default: [] },
    statut: {
        type: String,
        enum: ["en cours", "terminée", "annulée"],
        default: "en cours"
    }
})

export const HospitalisationsModel = model.Hospitalisations || model("Hospitalisations", HospitalisationsSchema)