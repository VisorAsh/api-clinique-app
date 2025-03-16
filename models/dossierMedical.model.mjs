import mongoose from "mongoose"
const { model, Schema } = mongoose

const DossierMedicalSchema = new Schema({
    antecedentsMedicaux: [{ type: String }],
    consultations: [{
        date: { type: Date, default: Date.now },
        motif: { type: String, required: true },
        diagnostic: { type: String, required: true },
        traitement: { type: String, required: true },
        medecin: { type: String, required: true }
    }],
    prescriptions: [{
        date: { type: Date, default: Date.now },
        medicaments: [String],
        instructions: { type: String }
    }],
    hospitalisations: [{
        dateDebut: { type: Date, required: true },
        dateFin: { type: Date, required: true },
        motif: { type: String, required: true },
        hopital: { type: String, required: true },
        traitements: { type: String, required: true }
    }]
})

export const DossierMedicalModel = model.DossierMedical || model("DossierMedical", DossierMedicalSchema)