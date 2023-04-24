import { useContext } from 'react';
import { UseApiContext } from '../../context/ApiContext';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AnimatedPage } from '../AnimatedPage/AnimatedPage';

export const HousingForm2 = () => {
    const { userData, setUserData } = useContext(UseApiContext);

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const OnSubmit = (data) => {
        setUserData({ ...userData, ...data });
        navigate('/cotiza_tu_proyecto/formulario_vivienda_3');
    };
    return (
        <AnimatedPage setClass={'containerQuoteFinal'}>
            <br />
            <h5 className="h5FormQuoteFinal ">Nos estamos acercando a la vivienda para vos...</h5>
            <h5 className="h5FormHousing">2. ESPACIOS Y USOS</h5>

            <form onSubmit={handleSubmit(OnSubmit)}>
                <div className="containerRadioQuoteFinal">
                    <div className="containerRadioFormHousing">
                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b>Cochera</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('cochera')}
                                    value="Un vehiculo"
                                    className="inputRadio"
                                />
                                <label>Un vehículo</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('cochera')}
                                    value="Dos vehiculos"
                                    className="inputRadio"
                                />
                                <label>Dos vehículos</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('cochera')}
                                    value="más de dos vehiculos"
                                    className="inputRadio"
                                />
                                <label>Más de dos vehículos</label>
                            </div>
                        </div>

                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b className="pSecundary">Podría ser ...</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('podria_ser_cochera')}
                                    value="Cubierta"
                                    className="inputRadio"
                                />
                                <label>Cubierta</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('podria_ser_cochera')}
                                    value="Descubierta"
                                    className="inputRadio"
                                />
                                <label>Descubierta</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('podria_ser_cochera')}
                                    value="Semicubierta"
                                    className="inputRadio"
                                />
                                <label>Semicubierta</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('podria_ser_cochera')}
                                    value="Indistinto"
                                    className="inputRadio"
                                />
                                <label>Indistinto</label>
                            </div>
                        </div>
                    </div>
                </div>
                <textarea
                    rows="6"
                    className="quoteTextarea"
                    placeholder="Hablanos un poco más de como te gustaría este espacio..."
                    {...register('cochera-descripcion')}
                />

                <p className="pFormQuoteFinal ">
                    <b>Acceso</b>
                </p>
                <div className="containerRadioQuoteFinal">
                    <div>
                        <input
                            type="radio"
                            {...register('acceso')}
                            value="Principal"
                            className="inputRadio"
                        />
                        <label>Principal</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('acceso')}
                            value="Principal y servicio"
                            className="inputRadio"
                        />
                        <label>Principal y servicio</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('acceso')}
                            value="Otro"
                            className="inputRadio"
                        />
                        <label>Otro</label>
                    </div>
                </div>
                <textarea
                    rows="6"
                    className="quoteTextarea"
                    placeholder="Hablanos un poco más de como te gustaría este espacio..."
                    {...register('acceso-descripcion')}
                />

                <p className="pFormQuoteFinal ">
                    <b>Baño social</b>
                </p>
                <div className="containerRadioQuoteFinal">
                    <div>
                        <input
                            type="radio"
                            {...register('Bano social')}
                            value="Si me gustaria"
                            className="inputRadio"
                        />
                        <label>Sí me gustaría</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('Bano social')}
                            value="No me hace fata"
                            className="inputRadio"
                        />
                        <label>No me hace fata</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('Bano social')}
                            value="Indistinto"
                            className="inputRadio"
                        />
                        <label>Indistinto</label>
                    </div>
                </div>

                <textarea
                    rows="6"
                    className="quoteTextarea"
                    placeholder="Hablanos un poco más de como te gustaría este espacio..."
                    {...register('bano-social-descripcion')}
                />

                <div className="containerRadioQuoteFinal">
                    <div className="containerRadioFormHousing">
                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b>Espacio principal</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('Espacio principal')}
                                    value="Estar comedor integrado"
                                    className="inputRadio"
                                />
                                <label>Estar comedor integrado</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Espacio principal')}
                                    value="Estar comedor separados"
                                    className="inputRadio"
                                />
                                <label>Estar comedor separados</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Espacio principal')}
                                    value="Otro"
                                    className="inputRadio"
                                />
                                <label>Otro (especificar)</label>
                            </div>
                        </div>

                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b className="pSecundary">Usos principales...</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('Usos principales espacio principal')}
                                    value="Grandes reuniones"
                                    className="inputRadio"
                                />
                                <label>Grandes reuniones</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Usos principales espacio principal')}
                                    value="Algo familiar"
                                    className="inputRadio"
                                />
                                <label>Algo familiar</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Usos principales espacio principal')}
                                    value="Mas bien intimo"
                                    className="inputRadio"
                                />
                                <label>Más bien íntimo</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Usos principales espacio principal')}
                                    value="Indistinto"
                                    className="inputRadio"
                                />
                                <label>Indistinto</label>
                            </div>
                        </div>
                    </div>
                </div>
                <textarea
                    rows="6"
                    className="quoteTextarea"
                    placeholder="Hablanos un poco más de como te gustaría este espacio..."
                    {...register('espacio-principal-descripcion')}
                />

                <div className="containerRadioQuoteFinal">
                    <div className="containerRadioFormHousing">
                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b>Cocina</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('Cocina')}
                                    value="Cocina comedor integrados"
                                    className="inputRadio"
                                />
                                <label>Cocina comedor integrados</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Cocina')}
                                    value="Cocina comedor separados"
                                    className="inputRadio"
                                />
                                <label>Cocina comedor separados</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Cocina')}
                                    value="Otro"
                                    className="inputRadio"
                                />
                                <label>Otro (especificar)</label>
                            </div>
                        </div>

                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b className="pSecundary">Usos principales...</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('Usos principales cocina')}
                                    value="Me gusta cocinar"
                                    className="inputRadio"
                                />
                                <label>Me gusta cocinar</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Usos principales cocina')}
                                    value="Paso mucho tiempo ahi"
                                    className="inputRadio"
                                />
                                <label>Paso mucho tiempo ahí</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Usos principales cocina')}
                                    value="Solo uso de servicio"
                                    className="inputRadio"
                                />
                                <label>Solo uso de servicio</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Usos principales cocina')}
                                    value="Indistinto"
                                    className="inputRadio"
                                />
                                <label>Indistinto</label>
                            </div>
                        </div>
                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b className="pSecundary">Me gustaria...</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('Cocina me gustaria')}
                                    value="Isla"
                                    className="inputRadio"
                                />
                                <label>Isla</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Cocina me gustaria')}
                                    value="Barra/desayunador"
                                    className="inputRadio"
                                />
                                <label>Barra/desayunador</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Cocina me gustaria')}
                                    value="Anafe y horno separados"
                                    className="inputRadio"
                                />
                                <label>Anafe y horno separados</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Cocina me gustaria')}
                                    value="Lavavajillas"
                                    className="inputRadio"
                                />
                                <label>Lavavajillas</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Cocina me gustaria')}
                                    value="Otro"
                                    className="inputRadio"
                                />
                                <label>Otro (especificar)</label>
                            </div>
                        </div>
                    </div>
                </div>
                <textarea
                    rows="6"
                    className="quoteTextarea"
                    placeholder="Hablanos un poco más de como te gustaría este espacio..."
                    {...register('cocina-descripcion')}
                />

                <div className="containerFormButtonsHousing">
                    <NavLink to="/cotiza_tu_proyecto/formulario_vivienda" className="buttonFormHousing ">
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
