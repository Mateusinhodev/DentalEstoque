import React from 'react'
import "./Sidebar.css"

import logo from '../../assets/logo.png';

export default function Sidebar() {
  return (
    <div id='sidebar'>
        <div className="sidebar-title">
            <div className="sidebar-img">
                <img src={logo} alt="logo" />
                <h1>Dental Estoque</h1>
            </div>

            <div className="sidebar-menu">
                <div className="sidebar-link active-menu-link">
                    <i className='fa fa-minus-square'></i>
                    <a href="#">Dashboard</a>
                </div>
                <h2>CADASTROS</h2>
                <div className="sidebar-link">
                    <i className='fa fa-minus-square'></i>
                    <a href="#">Produtos</a>
                </div>
                <div className="sidebar-link">
                    <i className='fa fa-minus-square'></i>
                    <a href="#">Fornecedores</a>
                </div>
                <div className="sidebar-link">
                    <i className='fa fa-minus-square'></i>
                    <a href="#">Locais</a>
                </div>
                <h2>ESTOQUE</h2>
                <div className="sidebar-link">
                    <i className='fa fa-minus-square'></i>
                    <a href="#">Entrada</a>
                </div>
                <div className="sidebar-link">
                    <i className='fa fa-minus-square'></i>
                    <a href="#">Saidas</a>
                </div>
                <div className="sidebar-link">
                    <i className='fa fa-minus-square'></i>
                    <a href="#">Saldo</a>
                </div>
            </div>
        </div>
    </div>
  )
}
