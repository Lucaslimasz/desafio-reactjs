import {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from "react";

import api from "../services/api";

import {IServersData, IServers} from '../@types/servers';

const ServersContext = createContext<IServersData>({} as IServersData);

export function ServerProvider({ children }: any) {
  const [servers, setServers] = useState<IServers[]>([]);
  const [serversSelected, setServersSelected] = useState<number[]>([]);
  const [totalMemory, setTotalMemory] = useState<number>(0);
  const [totalCpu, setTotalCpu] = useState<number>(0);
  const [totalDisk, setTotalDisk] = useState<number>(0);

  const handleServerSelection = useCallback(
    (id: number) => {
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
