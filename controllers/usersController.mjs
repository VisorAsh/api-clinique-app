import bcrypt from "bcrypt";
import { MongoConnected } from "../db/db.mjs"
import { UserModel } from "../models/usersModel.model.mjs"

// export const CreateUser = async (req, res) => {
//     const { nom, prenom, email, specialite, adresse, tel, dateEmbauche, autorisation } = req.body
//     try {
//         //Connexion à la base de donnée
//         const db = await MongoConnected()
//         if (db === "ok") {
//             const userExist = await UserModel.findOne({ email })
//             if (userExist) {
//                 return res.json({ message: "Cet adresse email est déjà utilisé ,veillez renseigner un adresse email non utilisé !" })
//             }

//             const user = new UserModel({ nom, prenom, email, specialite, adresse, tel, dateEmbauche, autorisation })
//             await user.save()
//             if (user) {
//                 res.json({ message: "Utilisateur créé avec succès !", data: user })
//             } else {
//                 res.json({ message: "Erreur survenue lors de la création de l'utilisateur !" })
//             }
//         } else return res.status(500).json({ message: "Erreur de connexion à la base de données" })

//     } catch (error) {
//         console.log(error)
//     }
// }

export const CreateUser = async (req, res) => {
    const {
        nom,
        prenom,
        email,
        specialite,
        adresse,
        tel,
        dateEmbauche,
        autorisation,
        password
    } = req.body;

    try {
        // Connexion à la base de donnée
        const db = await MongoConnected();
        if (db === "ok") {
            const userExist = await UserModel.findOne({ email });
            if (userExist) {
                return res.json({
                    message:
                        "Cet adresse email est déjà utilisée, veuillez renseigner une autre adresse email !",
                });
            }

            // Hacher le mot de passe
            const hashedPassword = await bcrypt.hash(password, 10);

            // Créer le user avec le password haché
            const user = new UserModel({
                nom,
                prenom,
                email,
                specialite,
                adresse,
                tel,
                dateEmbauche,
                autorisation,
                password: hashedPassword,
            });

            await user.save();

            if (user) {
                res.json({ message: "Utilisateur créé avec succès !", data: user });
            } else {
                res.json({
                    message: "Erreur survenue lors de la création de l'utilisateur !",
                });
            }
        } else {
            return res
                .status(500)
                .json({ message: "Erreur de connexion à la base de données" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur serveur" });
    }
};

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

export const GetAllUsers = async (req, res) => {
    try {
        const db = await MongoConnected()
        if (db === "ok") {
            //Récupérons le patient à travers son id : patientID
            const data = await UserModel.find()
            if (data) {
                res.status(200).json({ message: "ok", users: data })
            } else {
                res.status(404).json({ message: "Utilisateur Inexistant !" })
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