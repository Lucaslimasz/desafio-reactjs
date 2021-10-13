import './styles.css';

function Servers() {
  return (
    <div className="container-server">
      <div className="header-server">
        <h1>Tabela de servidores</h1>
      </div>
      <div className="body-server">
        <table cellspacing="0">
          <tr>
            <th>Select</th>
            <th>Hostname</th>
            <th>Memória</th>
            <th>vCPUs</th>
            <th>Disco</th>
            <th>IP</th>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Server 1</td>
            <td>10 GB</td>
            <td>4 vCPUs</td>
            <td>200 GB</td>
            <td>10.0.0.1</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Servers;