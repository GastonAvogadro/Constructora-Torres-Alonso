import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import BurgerMenu from '../BurguerMenu/BurguerMenu';
import logoWhite from '../../assets/images/Logo_blanco.svg';
import logoBlue from '../../assets/images/Logo_blue.svg';

export const NavBar = () => {
    const [navBg, setNavBg] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleNavbar = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
        if (
            [
                '/portfolio',
                '/estudio',
                '/contacto',
                '/cotiza_tu_proyecto/formulario',
                '/cotiza_tu_proyecto/formulario_vivienda',
                '/cotiza_tu_proyecto/formulario_vivienda_2',
                '/cotiza_tu_proyecto/formulario_vivienda_3',
                '/confirmacion',
            ].includes(location.pathname)
        ) {
            setNavBg(true);
        } else {
            scrollPosition >= 10 ? setNavBg(true) : setNavBg(false);
            window.addEventListener('scroll', handleNavbar);
            return () => {
                window.removeEventListener('scroll', handleNavbar);
            };
        }
    }, [scrollPosition, location]);

    return (
        <>
            <div className={`navBar ${navBg && 'whiteBg'}`}>
                <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} navBg={navBg} />
                <Link to="/" className="d-flex-center">
                    <img className="navLogo" src={navBg && !isOpen ? logoBlue : logoWhite} alt="logo" />
                </Link>
                <div className={`navLinks ${isOpen && 'navOpened'}`}>
                    <NavLink onClick={() => isOpen && setIsOpen(false)} className=" link" to="/">
                        Inicio
                    </NavLink>
                    <NavLink onClick={() => isOpen && setIsOpen(false)} className=" link" to="/estudio">
                        Estudio
                    </NavLink>
                    <NavLink
                        onClick={() => isOpen && setIsOpen(false)}
                        className=" link"
                        to="/servicios"
                    >
                        Servicios
                    </NavLink>
                    <NavLink
                        onClick={() => isOpen && setIsOpen(false)}
                        className=" link"
                        to="/portfolio"
                    >
                        Portfolio
                    </NavLink>
                    <NavLink
                        onClick={() => isOpen && setIsOpen(false)}
                        className=" link"
                        to="/cotiza_tu_proyecto"
                    >
                        Cotizá tu proyecto
                    </NavLink>
                    <NavLink onClick={() => isOpen && setIsOpen(false)} className=" link" to="/contacto">
                        Contacto
                    </NavLink>
                    <SocialMedia />
                </div>
            </div>
        </>
    );
};
