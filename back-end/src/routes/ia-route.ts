import { Router } from "express";
const routeIA = Router();

routeIA.post('/response', (req, res)=>{
    const body = JSON.stringify(req.body)
    console.log(JSON.parse(body))
    res.status(200).send('Solicitação Recebida com sucesso')
})


export default routeIA