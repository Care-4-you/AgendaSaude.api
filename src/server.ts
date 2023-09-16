import { app } from "./app";
import { connectionDB } from "./config/dbConnect";

const port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log(`Server is running in port ${port}`);
});

connectionDB.once("open",()=>{
  console.log("Conexão com o banco realizada com sucesso");
});