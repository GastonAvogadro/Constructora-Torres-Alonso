import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Contacto } from '../../pages/Contacto/Contacto';
import { Cotizacion } from '../../pages/Cotizacion/Cotizacion';
import { Home } from '../../pages/Home/Home';
import { Portfolio } from '../../pages/Portfolio/Portfolio';
import { Servicios } from '../../pages/Servicios/Servicios';
import { SobreMi } from '../../pages/SobreMi/SobreMi';
import { Confirmacion } from '../../pages/Confirmacion/Confirmacion';
import { FinalQuoteForm } from '../../components/quotations/FinalQuoteForm';
import { HousingForm } from '../../components/quotations/HousingForm';
import { HousingForm2 } from '../../components/quotations/HousingForm2';
import { HousingForm3 } from '../../components/quotations/HousingForm3';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="estudio" element={<SobreMi />} />
                <Route path="servicios" element={<Servicios />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="cotiza_tu_proyecto" element={<Cotizacion />} />
                <Route path="contacto" element={<Contacto />} />
                <Route path="confirmacion" element={<Confirmacion />} />
                <Route path="/*" element={<Navigate to="/" />} />
                <Route path="cotiza_tu_proyecto/formulario" element={<FinalQuoteForm />} />
                <Route path="cotiza_tu_proyecto/formulario_vivienda" element={<HousingForm />} />
                <Route path="cotiza_tu_proyecto/formulario_vivienda_2" element={<HousingForm2 />} />
                <Route path="cotiza_tu_proyecto/formulario_vivienda_3" element={<HousingForm3 />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
