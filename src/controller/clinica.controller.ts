import { ClinicaService } from "../services/clinica.service";

async function valid(req, res){
  const validationJson = await ClinicaService.validator(req.body);
  if (validationJson != undefined) {
    res.status(400).json({ error: "o Json enviado é invalido!", detail: validationJson.errors});
    return true;
  }
}

export const ClinicaController = {
  post: async (req, res) => {
    try {
      if(await valid(req, res)) return;

      const novaClinica = await ClinicaService.create(req.body);
      res.status(201).json(novaClinica);
    } catch (error) {
      res.status(500).json({ error: "Erro interno ao cadastrar!" });
    }
  },

  get: async (req, res) => {
    try {
      const clinicas = await ClinicaService.getAll();
      res.status(200).json(clinicas);
    } catch (error) {
      res.status(500).json({ error: "Erro interno ao listar as clínicas!" });
    }
  },

  getById: async (req, res) => {
    try {
      const clinica = await ClinicaService.getById(req.params.id);
      if (!clinica) res.status(404).json({ error: "Clínica não encontrada" });
      else res.status(200).json(clinica);
    } catch (error) {
      res.status(500).json({ error: "Erro interno ao obter detalhes da clínica!" });
    }
  },

  put: async (req, res) => {
    try {
      if(!ClinicaService.validator(req.body)) {
        res.status(400).json({error: "o Json enviado é invalido!"});
        return;
      }
      const clinicaAtualizada = await ClinicaService.update(
        req.params.id,
        req.body
      );
      if (!clinicaAtualizada) {
        res.status(404).json({ error: "Clínica não encontrada" });
      } else {
        res.status(200).json(clinicaAtualizada);
      }
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar a clínica" });
    }
  },
};
