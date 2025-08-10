import { GoogleGenAI } from "@google/genai"
import { prompt } from "../utils/prompt-ia";
import { badRequest, Ok } from "../utils/http-help";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY as string });


const responseIA = async (imc: Number) =>{
    const responseia = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: String(imc),
        config:{
            systemInstruction: prompt,
            thinkingConfig:{
                thinkingBudget: 0
            }
        }
    })
    let response: any
    if(typeof responseia === 'undefined'){
       return response = badRequest(responseia)
    }else{
        return response = Ok(responseia.text)
    }
}


export default responseIA