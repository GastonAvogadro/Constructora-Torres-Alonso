import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import contact from '../../assets/images/contacto1.png';

export const ContactComponent = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        emailjs.send('service_fpjz9xq', 'template_e6hh2wl', data, '9KBy9yFnjJDOadCin').then(
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
        <>
            <div className="containers ">
                <div className="container ">
                    <h2 className="h2Contacto">Contacto</h2>

                    <div className="cuadro1">
                        <img src={contact} className="img" />
                    </div>
                    <div className="cuadro2 ">
                        <div className="form">
                            <form className="containerForm" onSubmit={handleSubmit(onSubmit)}>
                                <div className="cajatext">
                                    <input
                                        type="text"
                                        placeholder="Nombre y apellido"
                                        autoComplete="off"
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
                                </div>
                                {errors.name ? (
                                    <small className="errorContact">{errors.name?.message}</small>
                                ) : (
                                    <small className="errorContact small">.</small>
                                )}

                                <input
                                    type="text"
                                    placeholder="Email"
                                    autoComplete="off"
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
                                {errors.email ? (
                                    <small className="errorContact">{errors.email?.message}</small>
                                ) : (
                                    <small className="errorContact small">.</small>
                                )}

                                <input
                                    type="text"
                                    placeholder="Teléfono"
                                    autoComplete="off"
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
                                {errors.phone ? (
                                    <small className="errorContact">{errors.phone?.message}</small>
                                ) : (
                                    <small className="errorContact small">.</small>
                                )}

                                <textarea
                                    placeholder="Escribe tu consulta..."
                                    rows="9"
                                    autoComplete="off"
                                    {...register('description', {
                                        required: {
                                            value: true,
                                            message: '* El campo consulta es requerido.',
                                        },
                                        maxLength: {
                                            value: 400,
                                            message: '* Máximo 400 caracteres.',
                                        },
                                        minLength: {
                                            value: 30,
                                            message: '* Mínimo de consulta 30 caracteres',
                                        },
                                    })}
                                />
                                {errors.description ? (
                                    <small className="errorContact">{errors.description?.message}</small>
                                ) : (
                                    <small className="errorContact small">.</small>
                                )}

                                <div className="containerButton">
                                    <button className="button-primary buttonContact" type="submit">
                                        Enviar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
