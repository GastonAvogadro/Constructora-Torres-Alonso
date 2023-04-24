import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UseApiContext } from '../../context/ApiContext';

export const QuoteOthers = () => {
    const { setUserData } = useContext(UseApiContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (dataOthers) => {
        setUserData({ ...dataOthers, proyecto: 'Cotización de otros usos' });
        navigate('/cotiza_tu_proyecto/formulario');
    };

    return (
        <>
            <div className="containerquote">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="containerRadioQuote">
                        <div>
                            <input
                                type="radio"
                                {...register('uso', {
                                    required: {
                                        value: true,
                                        message: '* Seleccione una opción.',
                                    },
                                })}
                                value="Conjunto de Viviendas"
                                className="inputRadio"
                            />
                            <label>Conjunto de Viviendas:</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                {...register('uso', {
                                    required: {
                                        value: true,
                                        message: '* Seleccione una opción.',
                                    },
                                })}
                                value="Edificio de Altura"
                                className="inputRadio"
                            />
                            <label>Edificio de Altura</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                {...register('uso', {
                                    required: {
                                        value: true,
                                        message: '* Seleccione una opción.',
                                    },
                                })}
                                value="Comercial"
                                className="inputRadio"
                            />
                            <label>Comercial</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                {...register('uso', {
                                    required: {
                                        value: true,
                                        message: '* Seleccione una opción.',
                                    },
                                })}
                                value="Ejecutivo"
                                className="inputRadio"
                            />
                            <label>Ejecutivo</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                {...register('uso', {
                                    required: {
                                        value: true,
                                        message: '* Seleccione una opción.',
                                    },
                                })}
                                value="Mixto"
                                className="inputRadio"
                            />
                            <label>Mixto</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                {...register('uso', {
                                    required: {
                                        value: true,
                                        message: '* Seleccione una opción.',
                                    },
                                })}
                                value="Otro"
                                className="inputRadio"
                            />
                            <label>Otro</label>
                        </div>
                    </div>
                    {errors.uso ? (
                        <small className="errorQuoteOthers">{errors.uso?.message}</small>
                    ) : (
                        <small className="errorQuoteOthers quoteOthersSmall">.</small>
                    )}
                    <textarea
                        rows="6"
                        {...register('Mi idea es')}
                        className="quoteTextarea"
                        placeholder="Escribe tu idea..."
                    />
                    <div className="containerQuoteButton">
                        <button className="button-primary quoteButton" type="submit">
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
