import mongoose from "mongoose"

export const MongoConnected = async () => {
    try {
        const mongoCompass = process.env.mongoCompass
        /* 
        const atlas = process.env.mongoAtlas
         const url = process.env.mongoURI
          */
        await mongoose.connect(mongoCompass, {
            dbName: "DB_CLINIC"
        })
        console.log("Connexion à la base de donnée réussie avec succès !")
        return "ok"
    } catch (error) {
        console.log("Erreur de connexion à", error)
        return "Problème de connexion à la bd"
    }
}