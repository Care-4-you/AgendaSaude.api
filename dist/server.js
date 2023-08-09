"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dbConnect_1 = require("./data/dbConnect");
const PORT = process.env.PORT || 3000;
app_1.app.listen(PORT, () => {
    console.log(`Server is running in port http://localhost:${PORT}`);
});
dbConnect_1.connectionDB.once("open", () => {
    console.log("Conexão com o banco realizada com sucesso");
});
//# sourceMappingURL=server.js.map