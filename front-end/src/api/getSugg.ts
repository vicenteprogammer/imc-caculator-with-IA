import axios from "axios";
import type { SuggModel } from "../model/suggModel";



export const fetchSugg = async (imc: number): Promise<SuggModel> => {
  try {
    const response = await axios.post('http://localhost:8000/response', { title: 'new sugg', body: {"imc": 30} });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}