import { fetchSugg } from "../../api/getSugg"

export const loadData =  async (imc: number) =>{
  try{
    const response = await fetchSugg(imc)
    return response
  }catch(error){
    console.error(error);

  }
}