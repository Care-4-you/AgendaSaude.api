import { Router } from "express";
import { ClinicaController } from "../controller/clinica.controller";
import validateObjectId from "../middlewares/validateObjectId";
const router = Router();

router.post("/clinicas", ClinicaController.post);
router.get("/clinicas", ClinicaController.get);
router.get("/clinicas/:id", validateObjectId, ClinicaController.getById);
router.put("/clinicas/:id", validateObjectId, ClinicaController.put);
router.delete("/clinicas/:id", validateObjectId, ClinicaController.delete);

export default router;