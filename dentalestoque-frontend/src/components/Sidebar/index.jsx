import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="logo">
            <h1>Dental <span> Estoque </span></h1>
        </div>
        <div className="nav-menu">
            <div className="menu-heading">Main</div>
            <div className="nav-item active">
                <i class="fa-solid fa-chart-line"></i>
                <span>Dashboard</span>
            </div>
            <div className="nav-item">
                <i class="fa-solid fa-box"></i>
                <span>Produtos</span>
            </div>
            <div className="nav-item">
                <i class="fa-solid fa-right-to-bracket"></i>
                <span>Entradas</span>
            </div>
            <div className="nav-item">
                <i class="fa-solid fa-right-from-bracket"></i>
                <span>Saidas</span>
            </div>

            <div className="menu-heading">Reports</div>
            <div className="nav-item">
                <i className="fas fa-chart-pie"></i>
                <span>Analytics</span>
            </div>
            <div className="nav-item">
                <i className="fas fa-chart-pie"></i>
                <span>Sales</span>
            </div>
            
            <div className="menu-heading">Admin</div>
            <div className="nav-item">
                <i class="fa-solid fa-gear"></i>
                <span>Settings</span>
            </div>
            <div className="nav-item">
                <i className="fas fa-chart-pie"></i>
                <span>Notifications</span>
            </div>
            <div className="nav-item">
                <i className="fas fa-chart-pie"></i>
                <span>Security</span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar