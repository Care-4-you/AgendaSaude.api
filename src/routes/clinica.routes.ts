import { Router } from "express";
import { ClinicaController } from "../controller/clinica.controller";
import validateObjectId from "../middlewares/validateObjectId";
import validateClinicaObjectJson from "../middlewares/validateClinicaObjectJson";
const router = Router();

router.post("/clinicas", validateClinicaObjectJson,ClinicaController.post);
router.get("/clinicas", ClinicaController.get);
router.get("/clinicas/:id", validateObjectId, ClinicaController.getById);
router.put("/clinicas/:id", validateObjectId, validateClinicaObjectJson, ClinicaController.put);
router.delete("/clinicas/:id", validateObjectId, ClinicaController.delete);

export default router;