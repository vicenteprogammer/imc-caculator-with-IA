import { Router } from "express";
import controllerIA from "../controllers/controller-ia";
const routeIA = Router();

routeIA.post('/response', controllerIA);
routeIA.get('/', (req, res)=> res.send('Welcome imc Api'))
export default routeIA