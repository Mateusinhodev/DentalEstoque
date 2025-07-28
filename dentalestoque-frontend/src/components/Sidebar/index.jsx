import { Link } from "react-router"
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="logo">
            <h1>Dental <span> Estoque </span></h1>
        </div>
        <div className="nav-menu">
            <div className="menu-heading">GESTÃO</div>
            <Link to="/dashboard" className="nav-item active">
                <i class="fa-solid fa-chart-line"></i>
                <span>Dashboard</span>
            </Link>
            <Link to="/estoque" className="nav-item">
                <i className="fas fa-chart-pie"></i>
                <span>Controle de Estoque</span>
            </Link>

            <div className="menu-heading">MOVIMENTAÇÕES</div>
            <Link to="/entradas" className="nav-item">
                <i class="fa-solid fa-right-to-bracket"></i>
                <span>Entradas</span>
            </Link>
            <Link to="/saidas" className="nav-item">
                <i class="fa-solid fa-right-from-bracket"></i>
                <span>Saidas</span>
            </Link>
            
            <div className="menu-heading">CADASTROS</div>
            <Link to="/produtos" className="nav-item">
                <i class="fa-solid fa-box"></i>
                <span>Produtos</span>
            </Link>
            <Link to="/locais" className="nav-item">
                <i class="fa-solid fa-location-dot"></i>
                <span>Locais</span>
            </Link>
            <Link to="/fornecedores" className="nav-item">
                <i class="fa-solid fa-truck"></i>
                <span>Fornecedores</span>
            </Link>
            
        </div>
    </div>
  )
}

export default Sidebar