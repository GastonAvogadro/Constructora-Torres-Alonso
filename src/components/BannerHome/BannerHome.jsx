import { NavLink } from 'react-router-dom';
import constructuraHome from '../../assets/images/constructuraHome.jpg';
import SocialMedia from '../SocialMedia/SocialMedia';

export const BannerHome = () => {
    const imageBackground = {
        backgroundImage: `url(${constructuraHome})`,
        backgroundPosition: 'center center',
        backgroundRepeat: ' no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
    };

    return (
        <>
            <div style={imageBackground}>
                <div className="imageFilter">
                    <div className="bannerContainer">
                        <div className="bannerItems">
                            <div className="titleHome">
                                <h1 className="titleHomeItem">Te ayudamos a construir</h1>
                                <h1 className="titleHomeItem">TU ESPACIO.</h1>
                            </div>
                            <div className="descriptionHome">
                                <p className="descriptionHomeItem">
                                    En Torres Alonso Constructora garantizamos seguridad y un buen
                                    servicio, ofreciendo soluciones rápidas y eficientes a tus
                                    necesidades. Con transparencia y dedicación llevamos nuevos diseños a
                                    otra escala.
                                </p>
                            </div>
                            <div className="socialButtonHome">
                                <NavLink to="/servicios">
                                    <button className="button-primary">Ver servicios</button>
                                </NavLink>
                                <div className="socialHome">
                                    <SocialMedia />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

{
    /*
     */
}
