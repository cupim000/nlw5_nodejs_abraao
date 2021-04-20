import express, { response } from "express";

import "./database";
import {routes} from "./routes";
const app = express();

/**
 * GET = Buscas
 * POST = Criacao
 * PUT = Atualizacao
 * DELETE = Deletar 
 * PATCH = Alterar só um dado especifico
 */
app.use(express.json());
app.use(routes); 

app.listen(3333, ()=> console.log("Server is runnig on port 3333"))