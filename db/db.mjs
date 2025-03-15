import mongoose from "mongoose"

export const MongoConnected = async () => {
    try {
        const atlas = process.env.mongoAtlas

        /* 
         const url = process.env.mongoURI
        
         const mongoCompass = process.env.mongoCompass */
        await mongoose.connect(atlas)
        console.log("Connexion à la base de donnée réussie avec succès !")
        return "ok"
    } catch (error) {
        console.log("Erreur de connexion à", error)
        return "Problème de connexion à la bd"
    }
}