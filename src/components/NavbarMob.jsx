
import logo from "../assets/logos/logo-completo.webp";
import menu from "../assets/iconos/menu.png";
import { NavLink } from "react-router-dom";
import cerrar from "../assets/iconos/cerrar-nav.png";
import { useEffect, useState } from "react";
import { useLoading } from "./context/LoadingContext";


const NavbarMob = () => {

    const [isVisible, setIsVisible] = useState(false);
    const { showLoader } = useLoading();

    useEffect(() => {
        if (isVisible) {
            document.body.classList.add('modal-abierto');
        } else {
            document.body.classList.remove('modal-abierto');
        }

    }, [isVisible])

    const onHandlerNav = () => {
        setIsVisible(false);
        showLoader();
    }

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
                                    <img src={cerrar} alt="" onClick={() => setIsVisible(false)} />
                                </div>
                                <ul className="lista-nav-mob">
                                    <li className="item-nav-mob">
                                        <NavLink
                                            to={"/"}
                                            className={({ isActive }) =>
                                                isActive ? "link-nav-mob-active" : "link-nav-mob"
                                            }
                                            onClick={onHandlerNav}>
                                            INICIO
                                        </NavLink>
                                    </li>
                                    <li className="item-nav-mob">
                                        <NavLink
                                            to={"/nosotros"}
                                            className={({ isActive }) =>
                                                isActive ? "link-nav-mob-active" : "link-nav-mob"
                                            }
                                            onClick={onHandlerNav}>
                                            NOSOTROS
                                        </NavLink>
                                    </li>
                                    <li className="item-nav-mob">
                                        <NavLink
                                            to={"/fundacion"}
                                            className={({ isActive }) =>
                                                isActive ? "link-nav-mob-active" : "link-nav-mob"
                                            }
                                            onClick={onHandlerNav}>
                                            FUNDACIÓN
                                        </NavLink>
                                    </li>
                                    <li className="item-nav-mob">
                                        <NavLink
                                            to={"/desarrollos"}
                                            className={({ isActive }) =>
                                                isActive ? "link-nav-mob-active" : "link-nav-mob"
                                            }
                                            onClick={onHandlerNav}>
                                            DESARROLLOS
                                        </NavLink>
                                    </li>
                                    <li className="item-nav-mob">
                                        <NavLink
                                            to={"/listado-productos"}
                                            className={({ isActive }) =>
                                                isActive ? "link-nav-mob-active" : "link-nav-mob"
                                            }
                                            onClick={onHandlerNav}>
                                            INVERTIR
                                        </NavLink>
                                    </li>
                                    <li className="item-nav-mob">
                                        <NavLink
                                            to={"ser-parte-desarrollo"}
                                            className={({ isActive }) =>
                                                isActive ? "link-nav-mob-active" : "link-nav-mob"
                                            }
                                            onClick={onHandlerNav}>
                                            SER PARTE
                                        </NavLink>
                                    </li>
                                    <li className="item-nav-mob">
                                        <NavLink
                                            to={"/contacto"}
                                            className={({ isActive }) =>
                                                isActive ? "link-nav-mob-active" : "link-nav-mob"
                                            }
                                            onClick={onHandlerNav}>
                                            CONTACTO
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