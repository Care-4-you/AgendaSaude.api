import cors from "cors";
import express, { Application } from "express";
import clinicaRouter from "./routes/clinica.routes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", clinicaRouter);

export default app;