import request from "supertest";
import db from "./config/testDatabase";
import app from "../src/app";

const mockClinica = {
  nome: "Joao Batista",
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
};

const firstClinica = {
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
};

beforeAll(async () => await db.connect());
afterEach(async () => await db.reset());
afterAll(async () => await db.close());

const agent = request.agent(app);

describe("GET /api/clinicas", () => {
  describe("GET ALL", () => {
    it("should return all clinicas", async () =>{
      const res = await agent.get("/api/clinicas");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(3);
    });  
  });

  describe("GET by id", () => {
    it("should return an clinica", async () =>{
      const res = await agent.get("/api/clinicas/614c7b69e7b477065a5b60c2");
      expect(res.statusCode).toBe(200);
      expect(res.body).toMatchObject(firstClinica);
    });
    it("should return 404 because NOT FOUND", async () =>{
      const res = await agent.get("/api/clinicas/614c7b69e7b477065a5b60c5");
      expect(res.statusCode).toBe(404);
    });
    it("should return 400 because it's InvalidObjectId", async () =>{
      const res = await agent.get("/api/clinicas/invalidObjectId");
      expect(res.statusCode).toBe(400);
    });  
  });

  describe("GET by query params", () => {
    it("should return clinicas in São Paulo especialized in Pediatria", async () =>{
      const res = await agent.get("/api/clinicas?cidade=São Paulo&especialidades=Pediatria");
      expect(res.statusCode).toBe(200);
    });
    it("should return clinicas in São Paulo", async () =>{
      const res = await agent.get("/api/clinicas?cidade=São Paulo&especialidades=Pediatria");
      expect(res.statusCode).toBe(200);
    });
    it("should return 400 because not have city in query params", async () =>{
      const res = await agent.get("/api/clinicas?especialidades=Pediatria");
      expect(res.statusCode).toBe(400);
    });
  });
});

describe("POST /api/clinicas", () => {
  it("should return created clinica", async () =>{
    const res = await agent.post("/api/clinicas").send(mockClinica);
    expect(res.statusCode).toBe(201);
    expect(res.body).toMatchObject(mockClinica);
  });
  it("should return 400 because it's invalid object", async () =>{
    const res = await agent.post("/api/clinicas").send({invalid:"Json"});
    expect(res.statusCode).toBe(400);
  });
});

describe("PUT /api/clinicas", () => {
  it("should change clinica", async () =>{
    const res = await agent.put("/api/clinicas/614c7b69e7b477065a5b60c2").send(mockClinica);
    expect(res.statusCode).toBe(200);
  });
  it("should return 400 because it's invalid object", async () =>{
    const res = await agent.put("/api/clinicas/614c7b69e7b477065a5b60c2").send({invalid:"Json"});
    expect(res.statusCode).toBe(400);
  });
  it("should return 400 because it's invalid objectId", async () =>{
    const res = await agent.put("/api/clinicas/InvalidObjectId").send({invalid:"Json"});
    expect(res.statusCode).toBe(400);
  });
});