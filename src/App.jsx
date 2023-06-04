import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAgents } from "./store/thunks";

export const App = () => {
  const dispatch = useDispatch();
  const { agents = [] } = useSelector((state) => state.valorant);

  useEffect(() => {
    dispatch(getAgents());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(agents);

  return (
    <>
      <h1>Hola mundo</h1>
      <ul>
        { agents.map(agent => ( <li key={agent.uuid}>{agent.displayName}</li> )) }
      </ul>
    </>
  );
};
