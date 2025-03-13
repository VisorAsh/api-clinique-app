import dotenv from "dotenv"
dotenv.config()
import express from "express"
import router from "./routes/route.mjs"
import { MongoConnected } from "./db/db.mjs"


const app = express()
MongoConnected()


app.use(express.json())
app.use("/api", router)


app.listen(3500, () => console.log("Serveur démarré avec succès sur le port 3500"))