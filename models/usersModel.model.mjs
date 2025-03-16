import mongoose from "mongoose"
const { model, Schema } = mongoose

const UserSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    specialite: { type: String, required: true },
    adresse: { type: String, required: true },
    tel: { type: String, required: true },
    dateEmbauche: { type: Date, required: true },
    autorisation: { type: Date, required: true }
})

export const UserModel = model.Users || model("Users", UserSchema)
