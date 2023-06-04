import axios from "axios";
import { setAgents } from "./ValorantSlice";

export const getAgents = () => {
  return async (dispatch) => {
    const resp = await axios.get("https://valorant-api.com/v1/agents");
  
    // Se lee de 'data' de nuevo porque el API retorna un { status: 200, data: [ agents... ] }
    // (no es el data de Axios), basicamente sería 'resp.data.data';
    const data = resp.data?.data || [];

    dispatch(setAgents(data));
  };
};
