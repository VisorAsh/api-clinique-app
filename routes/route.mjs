import express from "express"
import { login } from "../controllers/authController.mjs"
import { CreatePatient, DeletePatient, GetAllPatients, GetPatient, UpdatePatient } from "../controllers/patient.controller.mjs"
import { CreateExamenMedicaux, DeleteExamenMedicaux, GetAllExamens, GetExamensByPatient, GetExamenMedicaux, UpdateExamenMedicaux } from "../controllers/examenMedicaux.controller.mjs"
import { CreateRendezvous, DeleteRendezvous, GetRendezvous, UpdateRendezvous } from "../controllers/rendezvous.controller.mjs"
import { CreateUser, DeleteUser, GetUser, UpdateUser, GetAllUsers } from "../controllers/usersController.mjs"
import { CreateConsultaion, DeleteConsultaion, GetConsultaion, UpdateConsultaion, GetAllConsultations, GetConsultationsByPatient } from "../controllers/consultation.controller.mjs"
import { CreateHospitalisations, DeleteHospitalisations, GetHospitalisations, UpdateHospitalisations } from "../controllers/hospitalisation.controller.mjs"
import { CreateContactUrgence, DeleteContactUrgence, GetContactUrgence, UpdateContactUrgence } from "../controllers/contactUrgence.controller.mjs"
import { CreateMaladieChronic, DeleteMaladieChronic, GetMaladieChronic, UpdateMaladieChronic } from "../controllers/maladiChronique.controller.mjs"

/*
import { CreateStatistique, DeleteStatistique, GetStatistique, UpdateStatistique } from "../controllers/statistique.controller.mjs"




 */

const router = express.Router()

/****************** Routes patients  *****************/
router.get("/get-patient/", (req, res) => {
    res.json("Salut je suis une route qui marche très bien")
})

router.post("/login", login)

router.get("/get-all-patient/", GetAllPatients)
router.get("/get-patient/:_id", GetPatient)
router.put("/update-patient/:_id", UpdatePatient)
router.delete("/delete-patient/:_id", DeletePatient)
router.post("/create-patient", CreatePatient)

/****************** Routes Utilisateur  *****************/
router.get("/get-all-user/", GetAllUsers)
router.get("/get-user/:_id", GetUser)
router.put("/update-user/:_id", UpdateUser)
router.delete("/delete-user/:_id", DeleteUser)
router.post("/create-user", CreateUser)

/****************** Routes Rendez vous Patient  *****************/
router.get("/get-rendezvous/:_id", GetRendezvous)
router.put("/update-rendezvous/:_id", UpdateRendezvous)
router.delete("/delete-rendezvous/:_id", DeleteRendezvous)
router.post("/create-rendezvous", CreateRendezvous)

/****************** Routes Rendez Examen Medical  *****************/
router.get("/get-all-examens", GetAllExamens)
router.get("/get-examen-patient/:patientId", GetExamensByPatient)
router.get("/get-examen/:_id", GetExamenMedicaux)
router.put("/update-examen/:_id", UpdateExamenMedicaux)
router.delete("/delete-examen/:_id", DeleteExamenMedicaux)
router.post("/create-examen", CreateExamenMedicaux)

/****************** Routes Contact urgence  *****************/
router.get("/get-urgence/:_id", GetContactUrgence)
router.put("/update-urgence/:_id", UpdateContactUrgence)
router.delete("/delete-urgence/:_id", DeleteContactUrgence)
router.post("/create-urgence", CreateContactUrgence)

/****************** Routes Hospitalisation  *****************/
router.get("/get-hospitalisation/:_id", GetHospitalisations)
router.put("/update-hospitalisation/:_id", UpdateHospitalisations)
router.delete("/delete-hospitalisation/:_id", DeleteHospitalisations)
router.post("/create-hospitalisation", CreateHospitalisations)

/****************** Routes Maladie Chronique  *****************/
router.get("/get-maladie/:_id", GetMaladieChronic)
router.put("/update-maladie/:_id", UpdateMaladieChronic)
router.delete("/delete-maladie/:_id", DeleteMaladieChronic)
router.post("/create-maladie", CreateMaladieChronic)


/****************** Routes Statistic  *****************/
// router.get("/get-statistic/:_id", GetStatistique)
// router.put("/update-statistic/:_id", UpdateStatistique)
// router.delete("/delete-statistic/:_id", DeleteStatistique)
// router.post("/create-statistic", CreateStatistique)

/****************** Routes Consultations  *****************/
router.get("/get-all-consultations", GetAllConsultations)
router.get("/get-consultations-patient/:patientId", GetConsultationsByPatient)
router.get("/get-consultation/:_id", GetConsultaion)
router.put("/update-consultation/:_id", UpdateConsultaion)
router.delete("/delete-consultation/:_id", DeleteConsultaion)
router.post("/create-consultation", CreateConsultaion)

export default router