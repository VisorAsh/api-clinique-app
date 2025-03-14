import mongoose from "mongoose"

export const MongoConnected = async () => {
    try {
        const url = process.env.mongoURI
        const mongoCompass = process.env.mongoCompass
        await mongoose.connect(mongoCompass, {
            dbName: "DB_CLINIC"
        })
        console.log("Connexion à la base de donnée réussie avec succès !")
        return "ok"
    } catch (error) {
        console.log("Erreur de connexion à", error)
    }
}