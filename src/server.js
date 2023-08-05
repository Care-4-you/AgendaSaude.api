import express from "express";
import { connectionDB } from "./data/dbConnect.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectionDB.once("open",()=>{
  console.log("Conexão com o banco realizada com sucesso");
});