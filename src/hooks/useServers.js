import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";

import api from "../services/api";

const ServersContext = createContext({});

export function ServerProvider({ children }) {
  const [servers, setServers] = useState([]);
  const [serversSelected, setServersSelected] = useState([]);

  const handleServerSelection = useCallback(
    (id) => {
      const verifySelectedId = serversSelected.includes(id);
      if (verifySelectedId) {
        setServersSelected((oldState) => oldState.filter((row) => row !== id));
      } else {
        setServersSelected((oldState) => [...oldState, id]);
      }
    },
    [serversSelected]
  );

  useEffect(() => {
    api
      .get("/servers")
      .then((response) => setServers(response.data))
      .catch((err) => console.log(err));

    console.log(JSON.stringify(serversSelected));
  }, [serversSelected]);

  return (
    <ServersContext.Provider
      value={{ handleServerSelection, servers, serversSelected }}
    >
      {children}
    </ServersContext.Provider>
  );
}

export function useServers() {
  return useContext(ServersContext);
}
