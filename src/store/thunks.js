import { getAgents } from "./ValorantSlice";
import axios from "axios";

export const agents = () => {
  return async (dispatch) => {
    const resp = await axios.get("https://valorant-api.com/v1/agents");
    const data = resp.data;
    dispatch(getAgents(data));
  };
};
