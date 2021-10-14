export interface IServersData {
  handleServerSelection(id: number): void;
  servers: IServers[];
  serversSelected: number[];
  totalMemory: number;
  totalCpu: number;
  totalDisk: number;
}

export interface IServers {
  id_vm: number;
  ip: string;
  hostname: string;
  configuracao: IServersConfigurations;
}

export interface IServersConfigurations {
  ip: string;
  hostname: "desafio00018";
  totalDiskGB: 231;
  cpuProvisioned: 10;
  memoryProvisioned: 18;
}