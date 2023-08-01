import { Link } from 'react-router-dom';
import "./erro.css"
function Erro() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div className="not-found">
        <h1>404</h1>
        <h2>Página não encontrada!</h2>
        <Link to="/">Tela Inicial</Link>
      </div>
    </div>
  )
}

export default Erro;
