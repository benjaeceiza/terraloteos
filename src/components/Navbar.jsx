import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos/logo-completo.webp";
import menu from "../assets/iconos/menu.png";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const toggleMenu = () => {
        setExpanded((prev) => !prev);
    };


    const closeMenu = () => {
        setExpanded(false);
    };

    return (
        <header id="header" className="header">
            <nav className="navbar navbar-expand-lg nav">
                <div
                    id="container-fluid"
                    className={`container-fluid ${
                        scrolled || expanded ? "container-fluid-fondo" : ""
                    }`}
                >
                    <NavLink to={"/"} className="navbar-brand" onClick={closeMenu}>
                        <img className="header__logo" src={logo} alt="Logo Terraloteos" />
                    </NavLink>

                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        aria-expanded={expanded}
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        <img className="menu-icono" src={menu} alt="menu" />
                    </button>

                    <div
                        className={`collapse navbar-collapse flex-grow-0 ${
                            expanded ? "show" : ""
                        }`}
                        id="navbarSupportedContent"
                    >
                        <ul id="nav-list" className="navbar-nav">
                            <li className="header__li">
                                <NavLink
                                    to={"/"}
                                    className={({ isActive }) =>
                                        isActive ? "header__link-active" : "header__link"
                                    }
                                    onClick={closeMenu}
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="header__li">
                                <NavLink
                                    to={"/nosotros"}
                                    className={({ isActive }) =>
                                        isActive ? "header__link-active" : "header__link"
                                    }
                                    onClick={closeMenu}
                                >
                                    Nosotros
                                </NavLink>
                            </li>
                            <li className="header__li">
                                <NavLink
                                    to={"/fundacion"}
                                    className={({ isActive }) =>
                                        isActive ? "header__link-active" : "header__link"
                                    }
                                    onClick={closeMenu}
                                >
                                    Fundación
                                </NavLink>
                            </li>
                            <li className="header__li">
                                <NavLink
                                    to={"/desarrollos"}
                                    className={({ isActive }) =>
                                        isActive ? "header__link-active" : "header__link"
                                    }
                                    onClick={closeMenu}
                                >
                                    Desarrollos
                                </NavLink>
                            </li>
                            <li className="header__li dropdown">
                                <button
                                    className="header__link button-header dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Inversión
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink className="dropdown-item" onClick={closeMenu}>
                                            Productos Terraloteos
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" onClick={closeMenu}>
                                            Desarrollos Terraloteos
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="header__li">
                                <NavLink
                                    to={"/contacto"}
                                    className={({ isActive }) =>
                                        isActive ? "header__link-active" : "header__link"
                                    }
                                    onClick={closeMenu}
                                >
                                    Contacto
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
