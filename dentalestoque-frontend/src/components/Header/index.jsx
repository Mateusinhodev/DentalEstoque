import { FaArchive, FaChartBar, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import './header.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div id="sidebar">
            <Link className="brand">
                <span className="text">Dental Estoque</span>
            </Link>

            <ul className="side-menu top">
                <li>
                    <Link to="/dashboard">
                        <FaChartBar />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/produtos">
                        <FaArchive />
                        <span>Produtos</span>
                    </Link>
                </li>
                <li>
                    <Link to="/entradas">
                        <FaChevronRight />
                        <span>Entradas</span>
                    </Link>
                </li>
                <li>
                    <Link to="/saidas">
                        <FaChevronLeft />
                        <span>Saídas</span>
                    </Link>
                </li>
            </ul>

            <ul className="sidemenu">
                <li>
                    <Link to="/configuracoes">
                        {/* <LuSettings /> */}
                        <span>Configurações</span>
                    </Link>
                </li>
                <li>
                    <Link to="/logout">
                        {/* <LuLogOut /> */}
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}