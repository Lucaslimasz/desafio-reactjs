import './styles.css';

function Summary() {
  return (
    <div className="container-summary">
      <div className="header-summary">
        <h1>Sumário dos recursos dos servidores</h1>
      </div>
      <div className="body-summary">
        <table cellSpacing="0">
          <tr>
            <th>Servidores Selecionados</th>
            <td>4 servidores selecionados</td>
          </tr>
          <tr>
            <th>Total de Memória</th>
            <td>354 GB</td>
          </tr>
          <tr>
            <th>Total de CPUs</th>
            <td>75 vCPUs</td>
          </tr>
          <tr>
            <th>Total de Discos</th>
            <td>3096 GB</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Summary;