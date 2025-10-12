
import logo from "../assets/logos/logo-completo.webp";
import menu from "../assets/iconos/menu.png";
import { NavLink } from "react-router-dom";
import cerrar from "../assets/iconos/cerrar-nav.png";
import { useState } from "react";


const NavbarMob = () => {

    const [isVisible,setIsVisible] = useState(false)
    return (
        <>
            <header className="header_mob">
                <nav className="nav_mob">
                    <NavLink to={"/"} className="">
                        <img className="header__logo" src={logo} alt="Logo Terraloteos" />
                    </NavLink>
                    <img className="menu-icono" src={menu} onClick={() => setIsVisible(true)} alt="" />

                    {
                          isVisible
                          ?
                        <div className="links-mob">
                            <div className="contenedor-cruz">
                                <img src={cerrar} alt=""  onClick={() => setIsVisible(false )}/>
                            </div>
                            <ul className="lista-nav-mob">
                                <li className="item-nav-mob">
                                    <NavLink to={"/"} className="link-nav-mob" onClick={() => setIsVisible(false)}>
                                        <p>INICIO</p>
                                    </NavLink>
                                </li>
                                <li className="item-nav-mob">
                                    <NavLink to={"/nosotros"} className="link-nav-mob" onClick={() => setIsVisible(false)}>
                                        <p>NOSOTROS</p>
                                    </NavLink>
                                </li>
                                <li className="item-nav-mob">
                                    <NavLink to={"/fundacion"} className="link-nav-mob" onClick={() => setIsVisible(false)}>
                                        <p>FUNDACIÓN</p>
                                    </NavLink>
                                </li>
                                <li className="item-nav-mob">
                                    <NavLink to={"/desarrollos"} className="link-nav-mob" onClick={() => setIsVisible(false)}>
                                        <p>DESARROLLOS</p>
                                    </NavLink>
                                </li>
                                <li className="item-nav-mob">
                                    <NavLink to={"/listado-productos"} className="link-nav-mob" onClick={() => setIsVisible(false)}>
                                        <p  >INVERTIR</p>
                                    </NavLink>
                                </li>
                                <li className="item-nav-mob">
                                    <NavLink to={"ser-parte-desarrollo"} className="link-nav-mob" onClick={() => setIsVisible(false)}>
                                        <p>SER PARTE</p>
                                    </NavLink>
                                </li>
                                <li className="item-nav-mob">
                                    <NavLink to={"/contacto"} className="link-nav-mob" onClick={() => setIsVisible(false)}>
                                        <p>CONTACTO</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        :
                        ""}
                </nav>
            </header>
        </>
    )
}

export default NavbarMob;