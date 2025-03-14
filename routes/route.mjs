import express from "express"
import { CreatePatient, DeletePatient, GetPatient, UpdatePatient } from "../controllers/patient.controller.mjs"

const router = express.Router()

/****************** Routes patients  *****************/
router.get("/get-patient/", (req, res) => {
    res.json("Salut je suis une route qui marche très bien")
})
router.get("/get-patient/:patientID", GetPatient)
router.put("/update-patient/:patientID", UpdatePatient)
router.delete("/delete-patient/:patientID", DeletePatient)
router.post("/create-patient", CreatePatient)

export default router