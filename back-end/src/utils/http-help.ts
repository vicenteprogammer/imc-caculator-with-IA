import { HttpResponse } from "../models/http-model";

export const Ok = async(data: any) : Promise<HttpResponse> =>{
    return{
        statusCode: 200,
        body: data
    }
}

export const badRequest = async (data: any): Promise<HttpResponse> =>{
    return{
        statusCode:500,
        body: {
          message: 'AI not response'
        }
    }
}