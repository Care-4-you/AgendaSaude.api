import { Router } from "express";
import { ClinicaController } from "../controller/clinica.controller";

const router = Router();

router.post("/clinicas", ClinicaController.post);
router.get("/clinicas", ClinicaController.get);
router.get("/clinicas/:id", ClinicaController.getById);
router.put("/clinicas/:id", ClinicaController.put);
router.delete("/clinicas/:id", ClinicaController.delete);

export default router;