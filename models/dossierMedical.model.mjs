import mongoose from "mongoose"
const { model, Schema } = mongoose

const DossierMedicalSchema = new Schema({
    antecedentsMedicaux: [{ type: String }],
    consultations: [{ type: String }],
    prescriptions: [{ type: String }],
    hospitalisations: [{ type: String }]
})

export const DossierMedicalModel = model.DossierMedicalElectronic || model("DossierMedicalElectronic", DossierMedicalSchema)