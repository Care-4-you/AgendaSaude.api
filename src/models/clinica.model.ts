import mongoose from "mongoose";

const clinicasSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  nome: {
    type: String,
    required: true,
  },
  titulo: {
    type: String,
    required: true,
  },
  endereco: {
    numero: {
      type: String,
      required: true,
    },
    rua: {
      type: String,
      required: true,
    },
    bairro: {
      type: String,
      required: true,
    },
    cidade: {
      type: String,
      required: true,
    },
    uf: {
      type: String,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    },
    geo: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  },
  imagem_url: [String],
  contato: {
    telefone: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
  },
  especialidades: [String]
});

// Usando ES6 para o lint não brigar
export const Clinicas = mongoose.model("clinicas", clinicasSchema);
