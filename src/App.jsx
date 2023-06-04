import { useEffect } from "react";
import { getAgents } from "./store/ValorantSlice";
import { useDispatch, useSelector } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();
  const { agents } = useSelector((state) => state.valorant);

  useEffect(() => {
    dispatch(getAgents());
  }, []);
  console.log(agents);

  return (
    <>
      <h1>Hola mundo</h1>
    </>
  );
};
