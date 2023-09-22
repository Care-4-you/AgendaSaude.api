import { Clinicas } from "./../models/clinica.model";

export const ClinicaService = {
  validator: async (clinicaData) => {
    const novaClinica = new Clinicas(clinicaData);
    return novaClinica.validateSync((err) => {
      return err ? false : true;
    });
  },
  create: async (clinicaData) => {
    const novaClinica = new Clinicas(clinicaData);
    return await novaClinica.save();
  },

  getAll: async () => {
    return await Clinicas.find();
  },

  getById: async (id) => {
    return await Clinicas.findById(id);
  },

  update: async (id, clinicaData) => {
    return await Clinicas.findByIdAndUpdate(id, clinicaData);
  },

  delete: async (id) => {
    return await Clinicas.findByIdAndDelete(id);
  },

  getByQueryParams: async (params) => {
    const query = {};

    if (params.cidade)
      query["endereco.cidade"] = { $regex: new RegExp(params.cidade, "i")};

    if (params.especialidades && params.cidade)
      query["especialidades"] = { 
        $in: params.especialidades.split(",")
          .map((especialidade)=> new RegExp(especialidade, "i"))
      };

    return await Clinicas.find(query);
  },
};