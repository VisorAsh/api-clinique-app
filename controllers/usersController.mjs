import { MongoConnected } from "../db/db.mjs"
import { UserModel } from "../models/usersModel.model.mjs"

export const CreateUser = async (req, res) => {
    try {
        //Connexion à la base de donnée
        const db = await MongoConnected()
        if (db === "ok") {
            const userExist = await UserModel.findOne({ email })
            if (userExist) {
                return res.json({ message: "Cet adresse email est déjà utilisé ,veillez renseigner un adresse email non utilisé !" })
            }

            const user = new UserModel(req.body)
            await user.save()
            if (user) {
                res.json({ message: "Utilisateur créé avec succès !", data: user })
            } else {
                res.json({ message: "Erreur survenue lors de la création de l'utilisateur !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}

export const GetUser = async (req, res) => {
    const { _id } = req.params
    try {
        //Connexion à la base de donnée
        const db = await MongoConnected()
        if (db === "ok") {
            const user = await UserModel.findById(_id)
            if (user) {
                res.json({ message: "Utilisateur trouvé !", data: user })
            } else {
                res.json({ message: "Utilisateur non trouvé !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}


export const UpdateUser = async (req, res) => {
    const { _id } = req.params
    const updatData = req.body
    try {
        //Connexion à la base de donnée
        const db = await MongoConnected()
        if (db === "ok") {
            const user = await UserModel.findByIdAndUpdate(_id, updatData, { new: true, runValidators: true })
            if (user) {
                res.json({ message: "Utilisateur mis à jour avec succès !", data: user })
            } else {
                res.json({ message: "Erreur survenue lors de la mise à jour de l'utilisateur !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}



export const DeleteUser = async (req, res) => {
    const { _id } = req.params
    try {
        //Connexion à la base de donnée
        const db = await MongoConnected()
        if (db === "ok") {
            const user = await UserModel.findByIdAndDelete(_id)
            if (user) {
                res.json({ message: "Utilisateur supprimé avec succès !" })
            } else {
                res.json({ message: "Utilisateur non supprimé !" })
            }
        } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

    } catch (error) {
        console.log(error)
    }
}