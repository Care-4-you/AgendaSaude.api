import { Clinicas } from "../models/clinica.model";

export default async function validateClinicaObjectJson(req, res, next) {
  const validationJson = await new Clinicas(req.body).validateSync((err) => {
    return err ? false : true;
  });

  if (validationJson != undefined)
    return res.status(400).json({
      error: "o Json enviado é invalido!",
      detail: validationJson.errors,
    });
  next();
}
  