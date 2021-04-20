import{request, response, Router} from "express";
import { SettingsController } from "./controllers/SettingsController";


const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)

/**
 * Tipos de parametros
 * Routes Params => parametros de rotas
 * Query Params => filtros e buscas
 * Body Params =>
 */

routes.post("/settings", async (request,response) =>{
    
} )
export{routes};