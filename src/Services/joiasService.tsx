import axios from "axios";
import type { Joias } from "../types/Joias"

export const getJoias = async (): Promise<Joias[]> => { // Promise< prometo, garanto que os dados iram retornar do banco de dados (api)
    try {
      const resposta = await axios.get("http://localhost:3000/produtos");
      return resposta.data;
    } catch (error) {
      console.error("Erro ao buscar os dados: ", error);
      throw error ;
    }
}