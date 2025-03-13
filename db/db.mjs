import mongoose from "mongoose"

export const MongoConnected = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.2", {
            dbName: "DB_CLINIC"
        })
        console.log("Connexion à la base de donnée réussie avec succès !")
        return "ok"
    } catch (error) {
        console.log("Erreur de connexion à", error)
    }
}