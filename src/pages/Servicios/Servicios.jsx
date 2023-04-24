import SocialMedia from '../../components/SocialMedia/SocialMedia';
import serviciosBg from '../../assets/images/serviciosBg.jpg';
import ServicesCards from '../../components/ServicesCards/ServicesCards';
import { AnimatedPage } from '../../components/AnimatedPage/AnimatedPage';

export const Servicios = () => {
    return (
        <AnimatedPage setClass={'servicesContainer'}>
            <div className="servicesHeader d-flex-center">
                <div className="darkBg"></div>
                <img className="servicesBg" src={serviciosBg} alt=""></img>
                <div className="servicesHeader-content d-flex-column">
                    <h3>Servicios</h3>
                    <p>
                        Hacemos que las cosas sucedan, desde lo más básico como hacer un contrapiso, una
                        piscina o remodelar cualquier ambiente, hasta una casa completa desde los
                        cimientos al techo, con todos los detalles completos.
                    </p>
                    <SocialMedia />
                </div>
            </div>
            <ServicesCards />
        </AnimatedPage>
    );
};
