import { NavLink } from 'react-router-dom';

export const ServiceHome = () => {
    return (
        <>
            <div className="serviceHomeContainer">
                <div>
                    <h2 className="h2ServiceHome">Servicios</h2>
                    <div className="conteinerP">
                        <p className="pServiceHome">
                            Hacemos que las cosas sucedan, desde lo más básico como hacer un contrapiso,
                            una piscina o remodelar cualquier ambiente, hasta una casa completa desde los
                            cimientos al techo, con todos los detalles completos.
                        </p>
                    </div>
                    <NavLink to="/servicios">
                        <button className="button-primary ">Ver más</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
};
