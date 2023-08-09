import * as express  from "express";
import * as cors from "cors";

export const app: express.Express = express();

app.use(express.json());
app.use(cors());


