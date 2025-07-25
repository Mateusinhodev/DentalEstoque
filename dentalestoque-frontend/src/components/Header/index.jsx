import "./header.css";

const Header = () => {
  return (
    <div className="header">
        <div className="search-bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Pesquise aqui"/>
        </div>
        <div className="header-actions">
            <div className="notification">
                <i className="fas fa-bell"></i>
                <div className="badge">3</div>
            </div>
            <div className="notification">
                <i className="fas fa-envelope"></i>
                <div className="badge">5</div>
            </div>
            <div className="user-profile">
                <div className="profile-img">JD</div>
                <div className="user-name">John Doe</div>
                {/* <div className="user-role">Administrador</div> */}
            </div>
        </div>
    </div>
  )
}

export default Header