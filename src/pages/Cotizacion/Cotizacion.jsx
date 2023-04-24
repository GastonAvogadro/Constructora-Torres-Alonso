import SocialMedia from '../../components/SocialMedia/SocialMedia';
import quoteBg from '../../assets/images/quoteBg.jpg';
import { useContext, useRef, useState } from 'react';
import { QuoteHouse } from '../../components/quotations/QuoteHouse';
import { QuoteRemodeling } from '../../components/quotations/QuoteRemodeling';
import { QuoteOthers } from '../../components/quotations/QuoteOthers';
import { NavLink } from 'react-router-dom';
import { UseApiContext } from '../../context/ApiContext';
import { AnimatedPage } from '../../components/AnimatedPage/AnimatedPage';

export const Cotizacion = () => {
    const [quotation, setQuotation] = useState({
        quoteHouse: false,
        quoteRemodeling: false,
        quoteOthers: false,
    });

    const [buttonQuote, setButtonQuote] = useState({
        buttonHouse: !quotation.quoteHouse,
        buttonRemodeling: !quotation.quoteRemodeling,
        buttonOthers: !quotation.quoteOthers,
    });

    const ref = useRef(null);
    const { setUserData } = useContext(UseApiContext);

    return (
        <AnimatedPage setClass={'quotationContainer'}>
            <div className="quotationHeader d-flex-center">
                <div className="darkBg"></div>
                <img className="quotationBg" src={quoteBg} alt=""></img>
                <div className="quotationHeader-content d-flex-column">
                    <h3>Contanos sobre tus ideas</h3>
                    <p>Completá el formulario para que podamos cotizar tu próximo proyecto</p>
                    <button className="button-primary" onClick={() => ref.current.scrollIntoView( {behavior: 'smooth'})}>
                        Comenzar
                    </button>
                    <SocialMedia />
                </div>
            </div>
            <div className="quotationProjects" ref={ref}>
                <h3>¿Qué tipo de proyecto quéres realizar?</h3>
                <div className="projectsContainer">
                    <div className="project">
                        <NavLink
                            to="/cotiza_tu_proyecto/formulario_vivienda"
                            onClick={() =>
                                setUserData({ proyecto: 'Cotización de vivienda', vivienda: 'true' })
                            }
                            className={`button-primary ${!buttonQuote.buttonHouse && 'colorButton'}`}
                        >
                            Vivienda
                        </NavLink>
                        <p>
                            Proyecto de vivienda familiar, de superficie y espacios variables según tus
                            gustos, necesidades y estilo de vida.
                        </p>
                    </div>

                    {quotation.quoteHouse && (
                        <div className="animate__animated animate__fadeInDown">
                            <QuoteHouse />
                        </div>
                    )}

                    <div className="project ">
                        <button
                            className={`button-primary ${
                                !buttonQuote.buttonRemodeling && 'colorButton'
                            }`}
                            onClick={() => {
                                setQuotation({
                                    quoteHouse: false,
                                    quoteRemodeling: true,
                                    quoteOthers: false,
                                });
                                setButtonQuote({
                                    buttonHouse: false,
                                    buttonRemodeling: true,
                                    buttonOthers: false,
                                });
                            }}
                        >
                            Remodelación
                        </button>
                        <p>Ampliación de espacios existentes, rediseños y remodelaciones.</p>
                    </div>

                    {quotation.quoteRemodeling && (
                        <div className="animate__animated animate__fadeInDown">
                            <QuoteRemodeling />
                        </div>
                    )}

                    <div className="project">
                        <button
                            className={`button-primary ${!buttonQuote.buttonOthers && 'colorButton'}`}
                            onClick={() => {
                                setQuotation({
                                    quoteHouse: false,
                                    quoteRemodeling: false,
                                    quoteOthers: true,
                                });
                                setButtonQuote({
                                    buttonHouse: false,
                                    buttonRemodeling: false,
                                    buttonOthers: true,
                                });
                            }}
                        >
                            Otros usos
                        </button>
                        <p>Uso comercial, ejecutivo, mixto, edificio en altura u otros.</p>
                    </div>

                    {quotation.quoteOthers && (
                        <div className="animate__animated animate__fadeInDown">
                            <QuoteOthers />
                        </div>
                    )}
                </div>
            </div>

        </AnimatedPage>
      
        
    );
};
