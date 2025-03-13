import mongoose from "mongoose"
const { models, model, Schema } = mongoose

const HospitalisationsSchema = new Schema({
    patientID: { type: mongoose.Schema.Types.ObjectId, ref: "Patients", required: true },
    dateAdmission: { type: Date, required: true },
    dateSortie: { type: Date },
    motif: { type: String, required: true },
    traitements: { type: [String], default: [] },
    interventionsChirurgicales: { type: [String], default: [] },
    suivi: [{
        resume: { type: String },
        recommandations: { type: [String], default: [] },
        rendezVous: { type: [Date], default: [] }
    }]
})

export const HospitalisationsModel = models.Hospitalisations || model("Hospitalisations", HospitalisationsSchema)