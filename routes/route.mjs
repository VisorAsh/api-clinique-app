import express from "express"
import { CreatePatient, DeletePatient, GetPatient, UpdatePatient } from "../controllers/patient.controller.mjs"
import { CreateDossier, GetDossier, UpdateDossier } from "../controllers/dossierMedical.controller.mjs"
/*import { CreateRendezvous, GetRendezvous, UpdateRendezvous } from "../controllers/rendezvous.controller.mjs"
import { CreateExamenMedicaux, GetExamenMedicaux, UpdateExamenMedicaux } from "../controllers/examenMedicaux.controller.mjs"
import { CreateContactUrgence, GetContactUrgence, UpdateContactUrgence } from "../controllers/contactUrgence.controller.mjs"
import { CreateHospitalisations, GetHospitalisations, UpdateHospitalisations } from "../controllers/hospitalisation.controller.mjs"
import { CreateMaladieChronic, GetMaladieChronic, UpdateMaladieChronic } from "../controllers/maladiChronique.controller.mjs"
import { CreateStatistiquePatient, GetStatistiquePatient, UpdateStatistiquePatient } from "../controllers/statisticPatient.controller.mjs"
 */
const router = express.Router()

/****************** Routes patients  *****************/
router.get("/get-patient/", (req, res) => {
    res.json("Salut je suis une route qui marche très bien")
})
router.get("/get-patient/:patientID", GetPatient)
router.put("/update-patient/:patientID", UpdatePatient)
router.delete("/delete-patient/:patientID", DeletePatient)
router.post("/create-patient", CreatePatient)

/****************** Routes Dossier Medical Patient  *****************/
router.get("/get-dossier/:patientID", GetDossier)
router.put("/update-dossier/:patientID", UpdateDossier)
router.post("/create-dossier", CreateDossier) 

/****************** Routes Rendez vous Patient  *****************/
/* router.get("/get-rendezvous/:patientID", GetRendezvous)
router.put("/update-rendezvous/:patientID", UpdateRendezvous)
router.post("/create-rendezvous", CreateRendezvous) */

/****************** Routes Rendez Examen Medical  *****************/
/* router.get("/get-examen/:patientID", GetExamenMedicaux)
router.put("/update-examen/:patientID", UpdateExamenMedicaux)
router.post("/create-examen", CreateExamenMedicaux) */

/****************** Routes Contact urgence  *****************/
/* router.get("/get-urgence/:patientID", GetContactUrgence)
router.put("/update-urgence/:patientID", UpdateContactUrgence)
router.post("/create-urgence", CreateContactUrgence) */

/****************** Routes Hospitalisation  *****************/
/* router.get("/get-hospitalisation/:patientID", GetHospitalisations)
router.put("/update-hospitalisation/:patientID", UpdateHospitalisations)
router.post("/create-hospitalisation", CreateHospitalisations) */

/****************** Routes Maladie Chronique  *****************/
/* router.get("/get-maladie/:patientID", GetMaladieChronic)
router.put("/update-maladie/:patientID", UpdateMaladieChronic)
router.post("/create-maladie", CreateMaladieChronic) */


/****************** Routes Maladie Chronique  *****************/
/* router.get("/get-maladie/:patientID", GetMaladieChronic)
router.put("/update-maladie/:patientID", UpdateMaladieChronic)
router.post("/create-maladie", CreateMaladieChronic) */

/****************** Routes Statistic  *****************/
/* router.get("/get-statistic/:patientID", GetStatistiquePatient)
router.put("/update-statistic/:patientID", UpdateStatistiquePatient)
router.post("/create-statistic", CreateStatistiquePatient) */

export default router