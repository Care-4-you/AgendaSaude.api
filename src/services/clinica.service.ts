import { Clinicas } from "./../models/clinica.model";

export const ClinicaService = {
  validator: async(clinicaData) =>{
    const novaClinica = new Clinicas(clinicaData);
    return novaClinica.validateSync((err) => {
      return (err) ? false : true; 
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
};