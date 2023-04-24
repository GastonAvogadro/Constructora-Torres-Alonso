import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatedPage } from '../../components/AnimatedPage/AnimatedPage';

export const Confirmacion = () => {
    const navigate = useNavigate();
    return (
        <AnimatedPage setClass={'confirmationContainer'}>
            <div className="confirmationText-container">
                <h3>¡Gracias!</h3>
                <div className="confirmationText d-flex-space d-flex-column">
                    <p>Tu mensaje fue enviado con éxito</p>
                    <p>Nos pondremos en contacto lo más pronto posible.</p>
                </div>
                <div className="confirmationButtons d-flex-space d-flex-column">
                    <button onClick={() => navigate('/')} className="button-primary">
                        Volver al Inicio
                    </button>
                    <button onClick={() => navigate('/cotiza_tu_proyecto')}>
                        Cotizar otro proyecto
                    </button>
                </div>
            </div>
        </AnimatedPage>
    );
};
