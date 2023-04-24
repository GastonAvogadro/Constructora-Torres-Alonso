import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { UseApiContext } from '../../context/ApiContext';

export const QuoteRemodeling = () => {
    const { setUserData } = useContext(UseApiContext);

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setUserData({ ...data, proyecto: 'Cotización de remodelación' });
        navigate('/cotiza_tu_proyecto/formulario');
    };

    return (
        <>
            <div className="containerquote">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <textarea
                        rows="11"
                        className="quoteTextarea"
                        placeholder="Contanos acerca de que tipo de proyecto estas pensando..."
                        {...register('remodeling', {
                            required: {
                                value: true,
                                message: '* Debe escribir algo sobre el proyecto.',
                            },
                            minLength: {
                                value: 15,
                                message: '* Mínimo 15 caracteres.',
                            },
                            maxLength: {
                                value: 1000,
                                message: '* Excedio el límite de caracteres.',
                            },
                        })}
                    />
                    {errors.remodeling ? (
                        <small className="errorContact">{errors.remodeling?.message}</small>
                    ) : (
                        <small className="errorContact small">.</small>
                    )}
                    <div className="containerQuoteButton">
                        <button className="button-primary quoteButton" type="submit">
                            {' '}
                            Continuar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
