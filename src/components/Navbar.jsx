

import { NavLink } from "react-router-dom";
import logo from "../assets/logos/logo-completo.webp";
import menu from "../assets/iconos/menu.png"


const Navbar = () => {

    return (
        <>
            <header id="header" className="header">
                <nav className="navbar navbar-expand-lg ">
                    <div id="container-fluid" className="container-fluid">
                        <NavLink to={"/"} className="navbar-brand" href="./index.html"><img className="header__logo" src={logo}
                            alt="Logo Terraloteos" /></NavLink>
                        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <img className="menu-icono" src={menu} alt="" />
                        </button>
                        <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                            <ul id="nav-list" className="navbar-nav ">
                                <li className="header__li">
                                    <NavLink to={"/"} className={({ isActive }) =>
                                        isActive ? 'header__link-active' : 'header__link'
                                    } aria-current="page">Inicio</NavLink>
                                </li>
                                <li className="header__li">
                                    <NavLink to={"/nosotros"} className={({ isActive }) =>
                                        isActive ? 'header__link-active' : 'header__link'
                                    }>Nosotros</NavLink>
                                </li>
                                <li className="header__li">
                                    <NavLink  to={"/fundacion"} className={({ isActive }) =>
                                        isActive ? 'header__link-active' : 'header__link'
                                    }>Fundación</NavLink>
                                </li>
                                <li className="header__li">
                                    <NavLink className="header__link" href="./pages/oficinas.html">Oficinas</NavLink>
                                </li>
                                <li className="header__li">
                                    <NavLink to={"/desarrollos"} className={({ isActive }) =>
                                        isActive ? 'header__link-active' : 'header__link'
                                    }>Desarrollos</NavLink>
                                </li>
                                <li className="header__li dropdown">
                                    <NavLink className="header__link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Inversión
                                    </NavLink>
                                    <ul className="dropdown-menu">
                                        <li><NavLink className="dropdown-item" href="#">Productos Terraloteos</NavLink></li>
                                        <li><NavLink className="dropdown-item" href="#">Desarrollos Terraloteos</NavLink></li>
                                    </ul>
                                </li>
                                <li className="header__li">
                                    <NavLink to={"/contacto"} className={({ isActive }) =>
                                        isActive ? 'header__link-active' : 'header__link'
                                    }>Contacto</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;