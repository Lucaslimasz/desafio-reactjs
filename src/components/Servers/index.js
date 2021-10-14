import { useServers } from "../../hooks/useServers";

import "./styles.css";

function Servers() {
  const { handleServerSelection, servers } = useServers();

  return (
    <div className="container-server">
      <div className="header-server">
        <h1>Tabela de servidores</h1>
      </div>
      <div className="body-server">
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>Select</th>
              <th>Hostname</th>
              <th>Memória</th>
              <th>vCPUs</th>
              <th>Disco</th>
              <th>IP</th>
            </tr>
          </thead>
          <tbody>
            {servers.map((data) => (
              <tr key={data.id_vm}>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleServerSelection(data.id_vm)}
                  />
                </td>
                <td>{data.hostname}</td>
                <td>{data.configuracao.memoryProvisioned} GB</td>
                <td>{data.configuracao.cpuProvisioned} vCPUs</td>
                <td>{data.configuracao.totalDiskGB} GB</td>
                <td>{data.ip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Servers;
