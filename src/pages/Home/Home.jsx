import { BannerHome } from '../../components/BannerHome/BannerHome';
import { CotizacionHome } from '../../components/CotizacionHome/CotizacionHome';
import { PorfolioHome } from '../../components/PorfolioHome/PorfolioHome';
import { ServiceHome } from '../../components/ServiceHome/ServiceHome';
import { SobreMiComponent } from '../../components/SobreMiComponent/SobreMiComponent';
import { ContactComponent } from '../../components/ContactComponent/ContactComponent';
import { AnimatedPage } from '../../components/AnimatedPage/AnimatedPage';

export const Home = () => {
    return (
        <AnimatedPage>
            <BannerHome />
            <SobreMiComponent />
            <ServiceHome />
            <PorfolioHome />
            <CotizacionHome />
            <ContactComponent />
        </AnimatedPage>
    );
};
