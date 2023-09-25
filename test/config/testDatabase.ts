import mongoose from "mongoose";
import { Clinicas } from "../../src/models/clinica.model";
import { config } from "dotenv";

config();

const connect = async () => {
  mongoose.set("strictQuery",false);
  return await mongoose.connect(process.env.TEST_DB);
};

const close = async () => {
  await mongoose.connection.close();
};

const reset = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }

  await Clinicas.create([
    {
      _id: "614c7b69e7b477065a5b60c2",
      nome: "Clínica 1",
      titulo: "Clínica de Medicina Geral",
      endereco: {
        numero: "123",
        rua: "Rua da Paz",
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP",
        cep: "12345-678",
        geo: {
          lat: -23.550520,
          lng: -46.635890,
        },
      },
      imagem_url: ["https://example.com/image1.png"],
      contato: {
        telefone: "(11) 1234-5678",
        website: "https://example.com/clinica1",
      },
      especialidades: ["Medicina Geral", "Pediatria"],
    },
    {
      _id: "614c7b6ae7b477065a5b60c3",
      nome: "Clínica 2",
      titulo: "Clínica de Odontologia",
      endereco: {
        numero: "456",
        rua: "Rua da Alegria",
        bairro: "Vila Mariana",
        cidade: "São Paulo",
        uf: "SP",
        cep: "12345-901",
        geo: {
          lat: -23.563070,
          lng: -46.649680,
        },
      },
      imagem_url: ["https://example.com/image2.png"],
      contato: {
        telefone: "(11) 9876-5432",
        website: "https://example.com/clinica2",
      },
      especialidades: ["Odontologia Geral", "Ortodontia"],
    },
    {
      _id: "614c7b6be7b477065a5b60c4",
      nome: "Clínica 3",
      titulo: "Clínica de Veterinária",
      endereco: {
        numero: "789",
        rua: "Rua da Felicidade",
        bairro: "Itaim Bibi",
        cidade: "São Paulo",
        uf: "SP",
        cep: "12345-012",
        geo: {
          lat: -23.575620,
          lng: -46.663470,
        },
      },
      imagem_url: ["https://example.com/image3.png"],
      contato: {
        telefone: "(11) 1111-2222",
        website: "https://example.com/clinica3",
      },
      especialidades: ["Veterinária Geral", "Clínica Cirúrgica"],
    },
  ]);
};

export default { connect, close, reset };
