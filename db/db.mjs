import mongoose from "mongoose"

export const MongoConnected = async () => {
    try {
        const url = process.env.mongoURI
        await mongoose.connect(url, {
            dbName: "DB_CLINIC"
        })
        console.log("Connexion à la base de donnée réussie avec succès !")
        return "ok"
    } catch (error) {
        console.log("Erreur de connexion à", error)
    }
}