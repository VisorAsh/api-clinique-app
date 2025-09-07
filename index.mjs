
import express from "express"
import dotenv from "dotenv"
dotenv.config()
import router from "./routes/route.mjs"
import { MongoConnected } from "./db/db.mjs"
import cors from "cors"

const app = express()

//Pour donner l'autorisation à des domaines sur votre serveur
const domaineAutorise = ["http://localhost:3000", "https://web-clinique-app.vercel.app/"]

const corsOptions = {
    // origin: "*", // autorise toutes les origines
    origin: function (origin, callback) {
        if (!origin || domaineAutorise.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Domaine non autorisé par le cors"))
        }
    }
}
app.use(cors(corsOptions))

MongoConnected()
app.use(express.json())
app.use("/api", router)
app.get("/", async (req, res) => {
    const re = await MongoConnected()
    if (re === "ok") res.send("success")
    else res.json({ error: re, message: "Impossible de se connecter à la bd" })
})

app.listen(3600, () => console.log("Serveur démarré avec succès sur le port 3600"))

export default app
