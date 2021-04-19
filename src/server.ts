import express, { response } from "express";

const app = express();

/**
 * GET = Buscas
 * POST = Criacao
 * PUT = Atualizacao
 * DELETE = Deletar 
 * PATCH = Alterar só um dado especifico
 */

app.get("/",(request,response) =>{
  return response.json({
    message: "Braozinho tá ON!"
  })
})

app.post("/users", (request, response) =>{
  return response.json({
    message: "User saved successfuly!"
  })
})

app.listen(3333, ()=> console.log("Server is runnig on port 3333"))