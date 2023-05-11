import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseApiContext } from '../../context/ApiContext';
import { AnimatedPage } from '../AnimatedPage/AnimatedPage';

export const HousingForm = () => {
    const { userData, setUserData } = useContext(UseApiContext);

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const OnSubmit = (data) => {
        setUserData({ ...userData, ...data });
        navigate('/cotiza_tu_proyecto/formulario_vivienda_2');
    };

    return (
        <AnimatedPage setClass={"containerQuoteFinal"}>
            <h2 className="tituloFormHousing">Vivienda</h2>
            <p className="pFormQuoteFinal">Veamos algunos detalles...</p>
            <h5 className="h5FormHousing">1. TIPOLOGÍA Y MATERIALIDAD</h5>

            <p className="pFormQuoteFinal">
                <b>Niveles</b>
            </p>

            <form onSubmit={handleSubmit(OnSubmit)}>
                <div className="containerRadioQuoteFinal">
                    <div>
                        <input
                            type="radio"
                            {...register('niveles')}
                            value="Planta Baja"
                            className="inputRadio"
                        />
                        <label>Planta Baja</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('niveles')}
                            value="Dos niveles"
                            className="inputRadio"
                        />
                        <label>Dos niveles</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('niveles')}
                            value="Dos niveles mas subsuelo"
                            className="inputRadio"
                        />
                        <label>Dos niveles más subsuelo</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('niveles')}
                            value="Dos niveles mas terraza accecible"
                            className="inputRadio"
                        />
                        <label>Dos niveles más terraza accecible</label>
                    </div>
                </div>
                <textarea
                    rows="6"
                    className="quoteTextarea"
                    placeholder="¿Tenés otra idea?"
                    {...register('niveles-descripcion')}
                />
                <br />

                <p className="pFormQuoteFinal">
                    <b>Tipos de techo</b>
                </p>
                <div className="containerRadioQuoteFinal">
                    <div>
                        <input
                            type="radio"
                            {...register('techo')}
                            value="Plano de losa"
                            className="inputRadio"
                        />
                        <label>Plano de losa</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('techo')}
                            value="Inclinado a un agua"
                            className="inputRadio"
                        />
                        <label>Inclinado a un agua</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('techo')}
                            value="Inclinado a dos aguas"
                            className="inputRadio"
                        />
                        <label>Inclinado a dos aguas</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('techo')}
                            value="De madera"
                            className="inputRadio"
                        />
                        <label>De madera</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('techo')}
                            value="De metal"
                            className="inputRadio"
                        />
                        <label>De metal</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('techo')}
                            value="Cubierta a la vista con voladizo"
                            className="inputRadio"
                        />
                        <label>Cubierta a la vista con voladizo</label>
                    </div>
                </div>

                <textarea
                    rows="6"
                    {...register('techo-descripcion')}
                    className="quoteTextarea"
                    placeholder="¿Tenés otra idea?"
                />
                <p className="pFormQuoteFinal">
                    <b>Tipos de cielorrazo</b>
                </p>
                <div className="containerRadioQuoteFinal">
                    <div>
                        <input
                            type="radio"
                            {...register('cielo')}
                            value="Aplicados"
                            className="inputRadio"
                        />
                        <label>Aplicados</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('cielo')}
                            value="Con formas"
                            className="inputRadio"
                        />
                        <label>Con formas</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('cielo')}
                            value="Colgantes"
                            className="inputRadio"
                        />
                        <label>Colgantes</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('cielo')}
                            value="Durlok"
                            className="inputRadio"
                        />
                        <label>Durlock</label>
                    </div>
                    <div>
                        <input type="radio" {...register('cielo')} value="Yeso" className="inputRadio" />
                        <label>Yeso</label>
                    </div>
                </div>
                <textarea
                    rows="6"
                    {...register('cielo-descripcion')}
                    className="quoteTextarea"
                    placeholder="¿Tenés otra idea?"
                />
                <p className="pFormQuoteFinal">
                    <b>Tipos de entrepiso</b>
                </p>
                <div className="containerRadioQuoteFinal">
                    <div>
                        <input
                            type="radio"
                            {...register('entrepiso')}
                            value="Loza"
                            className="inputRadio"
                        />
                        <label>Loza</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('entrepiso')}
                            value="Madera"
                            className="inputRadio"
                        />
                        <label>Madera</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('entrepiso')}
                            value="Metal"
                            className="inputRadio"
                        />
                        <label>Metal</label>
                    </div>
                </div>
                <textarea
                    rows="6"
                    {...register('entrepiso-descripcion')}
                    className="quoteTextarea"
                    placeholder="¿Tenés otra idea?"
                />
                <h4 className="h4FormHousing">Antes de avanzar.....</h4>
                <p className="pFormQuoteFinal">
                    Contanos sobre tus ideas, espacios, conceptos, dudas...
                </p>
                <textarea
                    rows="6"
                    {...register('gustos de materiales')}
                    className="quoteTextarea"
                    placeholder="Escribe tu idea, que tipo de materiales te gustan..."
                />
                <div className="containerFormButtonsHousing">
                    <NavLink to="/cotiza_tu_proyecto" className="buttonFormHousing ">
                        Atrás
                    </NavLink>
                    <button to="" className="button-primary quoteButton" type="submit">
                        Continuar
                    </button>
                </div>
            </form>
        </AnimatedPage>
    );
};
