import dotenv from "dotenv"
dotenv.config()
import express from "express"
import router from "./routes/route.mjs"
import { MongoConnected } from "./db/db.mjs"
import cors from "cors"

const app = express()
MongoConnected()
//Pour donner l'autorisation à des domaines sur votre serveur
//const domaineAutorise = ["http://localhost:3500", "https://frontend-login-rho.vercel.app/"]

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || domaineAutorise.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Domaine non autorisé par le cors"))
        }
    }
}
app.use(cors(corsOptions))

app.use(express.json())
app.use("/api", router)


app.listen(3500, () => console.log("Serveur démarré avec succès sur le port 3500"))

export default app
