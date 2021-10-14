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
  const [totalMemory, setTotalMemory] = useState(0);
  const [totalCpu, setTotalCpu] = useState(0);
  const [totalDisk, setTotalDisk] = useState(0);


  const handleServerSelection = useCallback(
    (id) => {
      const verifySelectedId = serversSelected.includes(id);
      if (verifySelectedId) {
        setServersSelected((oldState) => oldState.filter((row) => row !== id));
        const array = servers.filter((row) => row.id_vm === id);
        setTotalMemory(
          (oldState) => (oldState -= array[0].configuracao.memoryProvisioned)
        );
        setTotalCpu(
          (oldState) => (oldState -= array[0].configuracao.cpuProvisioned)
        );
        setTotalDisk(
          (oldState) => (oldState -= array[0].configuracao.totalDiskGB)
        );
      } else {
        setServersSelected((oldState) => [...oldState, id]);
        const array = servers.filter((row) => row.id_vm === id);
        setTotalMemory(
          (oldState) => (oldState += array[0].configuracao.memoryProvisioned)
        );
        setTotalCpu(
          (oldState) => (oldState += array[0].configuracao.cpuProvisioned)
        );
        setTotalDisk(
          (oldState) => (oldState += array[0].configuracao.totalDiskGB)
        );
      }
    },
    [servers, serversSelected]
  );

  useEffect(() => {
    api
      .get("/servers")
      .then((response) => setServers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ServersContext.Provider
      value={{
        handleServerSelection,
        servers,
        serversSelected,
        totalMemory,
        totalCpu,
        totalDisk,
      }}
    >
      {children}
    </ServersContext.Provider>
  );
}

export function useServers() {
  return useContext(ServersContext);
}
