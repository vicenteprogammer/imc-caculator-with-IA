import { Request, Response } from "express"
import responseIA from "../service/service-ia"
const controllerIA = async (req: Request,res: Response)=>{
    const imc = Number(req.body.imc)
    const HttpResponse = await responseIA(imc)

    res.status(Number(HttpResponse.statusCode)).send(HttpResponse.body)
}

export default controllerIA