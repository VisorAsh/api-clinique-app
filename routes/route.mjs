import express from "express"
import { CreatePatient, DeletePatient, GetPatient, UpdatePatient } from "../controllers/patient.controller.mjs"
import { CreateDossier, GetDossier, UpdateDossier } from "../controllers/dossierMedical.controller.mjs"
import { CreateRendezvous, DeleteRendezvous, GetRendezvous, UpdateRendezvous } from "../controllers/rendezvous.controller.mjs"
import { CreateExamenMedicaux, GetExamenMedicaux, UpdateExamenMedicaux } from "../controllers/examenMedicaux.controller.mjs"
import { CreateContactUrgence, GetContactUrgence, UpdateContactUrgence } from "../controllers/contactUrgence.controller.mjs"
import { CreateHospitalisations, GetHospitalisations, UpdateHospitalisations } from "../controllers/hospitalisation.controller.mjs"
import { CreateMaladieChronic, GetMaladieChronic, UpdateMaladieChronic } from "../controllers/maladiChronique.controller.mjs"
import { CreateStatistiquePatient, GetStatistiquePatient, UpdateStatistiquePatient } from "../controllers/statisticPatient.controller.mjs"

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Bienvenue sur notre app clinic")
})

/****************** Routes patients  *****************/
router.get("/get-patient/:id", GetPatient)
router.put("/update-patient/:id", UpdatePatient)
router.delete("/delete-patient/:id", DeletePatient)
router.post("/create-patient", CreatePatient)

/****************** Routes Dossier Medical Patient  *****************/
router.get("/get-dossier/:id", GetDossier)
router.put("/update-dossier/:id", UpdateDossier)
router.post("/create-dossier", CreateDossier)

/****************** Routes Rendez vous Patient  *****************/
router.get("/get-rendezvous/:id", GetRendezvous)
router.put("/update-rendezvous/:id", UpdateRendezvous)
router.delete("/delete-rendezvous/:id", DeleteRendezvous)
router.post("/create-rendezvous", CreateRendezvous)

/****************** Routes Rendez Examen Medical  *****************/
router.get("/get-examen/:id", GetExamenMedicaux)
router.put("/update-examen/:id", UpdateExamenMedicaux)
router.post("/create-examen", CreateExamenMedicaux)

/****************** Routes Contact urgence  *****************/
router.get("/get-urgence/:id", GetContactUrgence)
router.put("/update-urgence/:id", UpdateContactUrgence)
router.post("/create-urgence", CreateContactUrgence)

/****************** Routes Hospitalisation  *****************/
router.get("/get-hospitalisation/:id", GetHospitalisations)
router.put("/update-hospitalisation/:id", UpdateHospitalisations)
router.post("/create-hospitalisation", CreateHospitalisations)

/****************** Routes Maladie Chronique  *****************/
router.get("/get-maladie/:id", GetMaladieChronic)
router.put("/update-maladie/:id", UpdateMaladieChronic)
router.post("/create-maladie", CreateMaladieChronic)


/****************** Routes Maladie Chronique  *****************/
router.get("/get-maladie/:id", GetMaladieChronic)
router.put("/update-maladie/:id", UpdateMaladieChronic)
router.post("/create-maladie", CreateMaladieChronic)

/****************** Routes Statistic  *****************/
router.get("/get-statistic/:id", GetStatistiquePatient)
router.put("/update-statistic/:id", UpdateStatistiquePatient)
router.post("/create-statistic", CreateStatistiquePatient)

export default router