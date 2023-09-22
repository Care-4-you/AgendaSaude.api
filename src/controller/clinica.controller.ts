import { ClinicaService } from "../services/clinica.service";

async function valid(req, res) {
  const validationJson = await ClinicaService.validator(req.body);
  if (validationJson != undefined) {
    res.status(400).json({
      error: "o Json enviado é invalido!",
      detail: validationJson.errors,
    });
    return true;
  }
}

export const ClinicaController = {
  post: async (req, res) => {
    try {
      if (await valid(req, res)) return;

      const novaClinica = await ClinicaService.create(req.body);
      res.status(201).json(novaClinica);
    } catch (error) {
      res.status(500).json({ error: "Erro interno ao cadastrar!" });
    }
  },

  // GET /api/clinicas (tanto com e sem query)
  get: async (req, res) => {
    try {
      if(Object.keys(req.query).length === 0)
        res.status(200).json(await ClinicaService.getAll());
      else
        res.status(200).json(await ClinicaService.getByQueryParams(req.query));
    } catch (error) {
      res.status(500).json({ error: "Erro interno ao listar as clínicas!" });
    }
  },

  getById: async (req, res) => {
    try {
      const clinica = await ClinicaService.getById(req.params.id);
      if (!clinica)
        res.status(404).json({ error: "Clínica não encontrada" });
      else 
        res.status(200).json(clinica);
    } catch (error) {
      res.status(500).json({ error: "Erro interno ao obter detalhes da clínica!" });
    }
  },

  put: async (req, res) => {
    try {
      if (await valid(req, res)) return;

      if (ClinicaService.getById(req.params.id) != null)
        res.status(200).json(await ClinicaService.update(req.params.id, req.body));
      else 
        res.status(404).json({ error: "Clínica não encontrada" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar a clínica" });
    }
  },
  delete: async (req, res) => {
    try {
      if (ClinicaService.getById(req.params.id) != null)
        res.status(200).json(ClinicaService.delete(req.params.id));
      else 
        res.status(404).json({ error: "Clínica não encontrada" });
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar a clínica" });
    }
  },
};
