import "./styles.css";

import { useServers } from "../../hooks/useServers";

function Summary() {
  const { serversSelected, totalMemory, totalCpu, totalDisk } = useServers();

  return (
    <div className="container-summary">
      <div className="header-summary">
        <h1>Sumário dos recursos dos servidores</h1>
      </div>
      <div className="body-summary">
        <table cellSpacing="0">
          <tbody>
            <tr>
              <th>Servidores Selecionados</th>
              <td>{`${serversSelected?.length}`} servidores selecionados</td>
            </tr>
            <tr>
              <th>Total de Memória</th>
              <td>{totalMemory} GB</td>
            </tr>
            <tr>
              <th>Total de CPUs</th>
              <td>{totalCpu} vCPUs</td>
            </tr>
            <tr>
              <th>Total de Discos</th>
              <td>{totalDisk} GB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Summary;
