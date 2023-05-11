import { useContext } from 'react';
import { UseApiContext } from '../../context/ApiContext';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { AnimatedPage } from '../AnimatedPage/AnimatedPage';

export const FinalQuoteForm = () => {
    const { userData } = useContext(UseApiContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const handleTemplate = () => {
            const check = userData.hasOwnProperty('vivienda');
            return check ? 'template_sz0vdep' : 'template_e6hh2wl';
        };

        emailjs
            .send('service_fpjz9xq', handleTemplate(), { ...userData, ...data }, '9KBy9yFnjJDOadCin')
            .then(
                (result) => {
                    console.log(result.text);

                    navigate('/confirmacion');
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <AnimatedPage setClass={'containerQuoteFinal'}>
            <h2 className="tituloFormFinalQuote">¡Todo listo!</h2>
            <p className="pFormQuoteFinal ">
                Ahora necesitamos algunos datos para enviarte el perfil de tu proyecto.
            </p>
            <p className="pFormQuoteFinal">¿Dispones de lote?</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="containerRadioQuoteFinal">
                    <div>
                        <input type="radio" {...register('lote')} value="Sí" className="inputRadio" />
                        <label>Sí</label>
                    </div>
                    <div>
                        <input type="radio" {...register('lote')} value="No" className="inputRadio" />
                        <label>No</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('lote')}
                            value="Quiero que me asesore para la compra"
                            className="inputRadio"
                        />
                        <label>Quiero que me asesore para la compra</label>
                    </div>
                </div>
                <textarea
                    rows="6"
                    className="quoteTextarea"
                    placeholder="Contanos sobre tu terreno, ubicacíon, superficie, etc..."
                    {...register('Descripcion terreno')}
                />
                <p className="pFormQuoteFinal">Datos personales</p>
                <div>
                    <div className="formDatosPersonales">
                        <div className="containerInputDatosPersonales d-flex-start">
                            <div className="containerInput">
                                <input
                                    type="text"
                                    placeholder="Nombre y apellido"
                                    className="InputDatosPersonales"
                                    {...register('name', {
                                        required: {
                                            value: true,
                                            message: '* El campo nombre es requerido.',
                                        },
                                        minLength: {
                                            value: 5,
                                            message: '* El nombre debe tener al nenos 5 caracteres.',
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: '* Máximo de nombre 30 caracteres.',
                                        },
                                    })}
                                />
                                {errors.name && (
                                    <small className="errorContactForm">{errors.name?.message}</small>
                                )}
                            </div>
                            <div className="containerInput">
                                <input
                                    type="text"
                                    placeholder="Nombre del proyecto (opcional)"
                                    className="InputDatosPersonales"
                                    {...register('Nombre del proyecto')}
                                />
                            </div>
                        </div>

                        <div className="containerInputDatosPersonales d-flex-start">
                            <div className="containerInput">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="InputDatosPersonales"
                                    {...register('email', {
                                        required: {
                                            value: true,
                                            message: '* El campo email es requerido.',
                                        },
                                        pattern: {
                                            value: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
                                            message: '* Email inválido.',
                                        },
                                    })}
                                />
                                {errors.email && (
                                    <small className="errorContactForm">{errors.email?.message}</small>
                                )}
                            </div>
                            <div className="containerInput">
                                <input
                                    type="text"
                                    placeholder="Teléfono"
                                    className="InputDatosPersonales"
                                    {...register('phone', {
                                        required: {
                                            value: true,
                                            message: '* El campo teléfono es requerido.',
                                        },
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: '* Número inválido',
                                        },
                                    })}
                                />
                                {errors.phone && (
                                    <small className="errorContactForm">{errors.phone?.message}</small>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <textarea
                    rows="6"
                    className="quoteTextarea"
                    placeholder="¿Algo más que quieras decirnos? (opcional)"
                    {...register('description')}
                />
                <div className=" containerFormButtonsHousing ">
                   <NavLink to="/cotiza_tu_proyecto" className="buttonFormHousing ">
                        Atrás
                    </NavLink>
                    <button className="button-primary quoteButton" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </AnimatedPage>
    );
};
