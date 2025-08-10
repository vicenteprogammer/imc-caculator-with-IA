import { Router } from "express";
import controllerIA from "../controllers/controller-ia";
const routeIA = Router();

routeIA.post('/response', controllerIA);

export default routeIA