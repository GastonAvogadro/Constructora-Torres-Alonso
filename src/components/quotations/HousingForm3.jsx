import { useContext } from 'react';
import { UseApiContext } from '../../context/ApiContext';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AnimatedPage } from '../AnimatedPage/AnimatedPage';

export const HousingForm3 = () => {
    const { userData, setUserData } = useContext(UseApiContext);

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const OnSubmit = (data) => {
        setUserData({ ...userData, ...data });
        navigate('/cotiza_tu_proyecto/formulario');
    };
    return (
        <AnimatedPage setClass={'containerQuoteFinal'}>
            <br />
            <h5 className="h5FormQuoteFinal ">Ya casi tenemos todo lo necesario...</h5>
            <p className="pFormQuoteFinal ">
                <b>Servicio</b>
            </p>

            <form onSubmit={handleSubmit(OnSubmit)}>
                <div className="containerRadioQuoteFinal">
                    <div>
                        <input
                            type="radio"
                            {...register('Servicio')}
                            value="Lavadero"
                            className="inputRadio"
                        />
                        <label>Lavadero</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('Servicio')}
                            value="Tender cubierto"
                            className="inputRadio"
                        />
                        <label>Tender cubierto</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('Servicio')}
                            value="Tender descubierto"
                            className="inputRadio"
                        />
                        <label>Tender descubierto</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('Servicio')}
                            value="Habitacion de servicio"
                            className="inputRadio"
                        />
                        <label>Habitación de servicio</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            {...register('Servicio')}
                            value="Bano de servicio"
                            className="inputRadio"
                        />
                        <label>Baño de servicio</label>
                    </div>
                </div>
                <textarea
                    rows="6"
                    className="quoteTextarea"
                    placeholder="Hablanos un poco más de como te gustaría este espacio..."
                    {...register('Servicio-descripcion')}
                />

                <div className="containerRadioQuoteFinal">
                    <div className="containerRadioFormHousing">
                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b>SUM(Salón de Usos Múltiples)</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('SUM')}
                                    value="Si, es indispensable"
                                    className="inputRadio"
                                />
                                <label>Sí, es indispensable</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('SUM')}
                                    value="No necesito este espacio"
                                    className="inputRadio"
                                />
                                <label>No necesito este espacio</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('SUM')}
                                    value="Indistinto"
                                    className="inputRadio"
                                />
                                <label>Indistinto</label>
                            </div>
                        </div>

                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b className="pSecundary">Usos principales...</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('SUM usos principales')}
                                    value="Sala de juegos"
                                    className="inputRadio"
                                />
                                <label>Sala de juegos</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('SUM usos principales')}
                                    value="Sala de juegos infantil"
                                    className="inputRadio"
                                />
                                <label>Sala de juegos infantil</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('SUM usos principales')}
                                    value="Estudio/Escritorio"
                                    className="inputRadio"
                                />
                                <label>Estudio/Escritorio</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('SUM usos principales')}
                                    value="Flexible"
                                    className="inputRadio"
                                />
                                <label>Flexible</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('SUM usos principales')}
                                    value="Otro"
                                    className="inputRadio"
                                />
                                <label>Otro(especificar)</label>
                            </div>
                        </div>
                    </div>
                </div>
                <textarea
                    rows="6"
                    className="quoteTextarea"
                    placeholder="Hablanos un poco más de como te gustaría este espacio..."
                    {...register('SUM-descripcion')}
                />

                <div className="containerRadioQuoteFinal">
                    <div className="containerRadioFormHousing">
                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b>Quincho / Galería</b>
                                </p>
                                <input
                                    multiple
                                    type="radio"
                                    {...register('Quincho/Galeria')}
                                    value="Si, es indispensable"
                                    className="inputRadio"
                                />
                                <label>Sí, es indispensable</label>
                            </div>
                            <div>
                                <input
                                    multiple
                                    type="radio"
                                    {...register('Quincho/Galeria')}
                                    value="No necesito este espacio"
                                    className="inputRadio"
                                />
                                <label>No necesito este espacio</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Quincho/Galeria')}
                                    value="Indistinto"
                                    className="inputRadio"
                                />
                                <label>Indistinto</label>
                            </div>
                        </div>

                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b className="pSecundary">Usos principales...</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('Quincho/Galeria usos principales')}
                                    value="Galeria amplia para sillones / mesas"
                                    className="inputRadio"
                                />
                                <label>Galería amplia para sillones / mesas</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Quincho/Galeria usos principales')}
                                    value="Galeria simple"
                                    className="inputRadio"
                                />
                                <label>Galeria simple</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Quincho/Galeria usos principales')}
                                    value="Quincho y galeria juntos"
                                    className="inputRadio"
                                />
                                <label>Quincho y galería juntos</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Quincho/Galeria usos principales')}
                                    value="Quincho separado"
                                    className="inputRadio"
                                />
                                <label>Quincho separado</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Quincho/Galeria usos principales')}
                                    value="Parrilla / asador"
                                    className="inputRadio"
                                />
                                <label>Parrilla / asador</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Quincho/Galeria usos principales')}
                                    value="Mesada, isla, freezer, etc"
                                    className="inputRadio"
                                />
                                <label>Mesada, isla, freezer, etc</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Quincho/Galeria usos principales')}
                                    value="Bano"
                                    className="inputRadio"
                                />
                                <label>Baño</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Quincho/Galeria usos principales')}
                                    value="Otros"
                                    className="inputRadio"
                                />
                                <label>Otros(especificar)</label>
                            </div>
                        </div>
                    </div>
                </div>
                <textarea
                    rows="6"
                    className="quoteTextarea"
                    placeholder="Hablanos un poco más de como te gustaría este espacio..."
                    {...register('Quincho-descripcion')}
                />

                <div className="containerRadioQuoteFinal">
                    <div className="containerRadioFormHousing">
                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b>Habitación principal</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal')}
                                    value="1 habitacion en suite"
                                    className="inputRadio"
                                />
                                <label>1 habitacion en suite</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal')}
                                    value="2 habitaciones en suite"
                                    className="inputRadio"
                                />
                                <label>2 habitaciones en suite</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal')}
                                    value="Un gran cuarto"
                                    className="inputRadio"
                                />
                                <label>Un gran cuarto</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal')}
                                    value="Con lo minimo me alcanza"
                                    className="inputRadio"
                                />
                                <label>Con lo mínimo me alcanza</label>
                            </div>
                        </div>

                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b className="pSecundary">Preferencias...</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal preferencias')}
                                    value="Con bano en 1 tiempo"
                                    className="inputRadio"
                                />
                                <label>Con baño en 1 tiempo</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal preferencias')}
                                    value="Con bano en 2 tiempos"
                                    className="inputRadio"
                                />
                                <label>Con baño en 2 tiempos</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal preferencias')}
                                    value="Con bano en 3 tiempos"
                                    className="inputRadio"
                                />
                                <label>Con baño en 3 tiempos</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal preferencias')}
                                    value="2 bachas"
                                    className="inputRadio"
                                />
                                <label>2 bachas</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal preferencias')}
                                    value="Ducha"
                                    className="inputRadio"
                                />
                                <label>Ducha</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal preferencias')}
                                    value="Hidromasaje"
                                    className="inputRadio"
                                />
                                <label>Hidromasaje</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal preferencias')}
                                    value="Banera"
                                    className="inputRadio"
                                />
                                <label>Bañera</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal preferencias')}
                                    value="Jacuzzi"
                                    className="inputRadio"
                                />
                                <label>Jacuzzi</label>
                            </div>
                        </div>
                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b className="pSecundary">Me gustaria...</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal me gustaria')}
                                    value="Vestidor unico"
                                    className="inputRadio"
                                />
                                <label>Vestidor único</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal me gustaria')}
                                    value="Vestidores separados"
                                    className="inputRadio"
                                />
                                <label>Vestidores separados</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal me gustaria')}
                                    value="Balcon / Terraza"
                                    className="inputRadio"
                                />
                                <label>Balcon / Terraza</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal me gustaria')}
                                    value="Tocador / Make Up"
                                    className="inputRadio"
                                />
                                <label>Tocador / Make Up</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitacion principal me gustaria')}
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
                    {...register('Habitacion-principal-descripcion')}
                />

                <div className="containerRadioQuoteFinal">
                    <div className="containerRadioFormHousing">
                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b>Habitaciones secundarias</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('Habitaciones secundarias')}
                                    value="2 habitaciones"
                                    className="inputRadio"
                                />
                                <label>2 habitaciones</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitaciones secundarias')}
                                    value="3 habitaciones"
                                    className="inputRadio"
                                />
                                <label>3 habitaciones</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitaciones secundarias')}
                                    value="Mas de 3 habitaciones"
                                    className="inputRadio"
                                />
                                <label>Más de 3 habitaciones</label>
                            </div>
                        </div>

                        <div className="buttonsRadioFormHousing">
                            <div>
                                <p className="pFormQuoteFinal pFormHousing2">
                                    <b className="pSecundary">Me gustaría...</b>
                                </p>
                                <input
                                    type="radio"
                                    {...register('Habitaciones secundarias me gustaria')}
                                    value="Placard"
                                    className="inputRadio"
                                />
                                <label>Placard</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitaciones secundarias me gustaria')}
                                    value="Vestidor"
                                    className="inputRadio"
                                />
                                <label>Vestidor</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitaciones secundarias me gustaria')}
                                    value="Escritorio"
                                    className="inputRadio"
                                />
                                <label>Escritorio</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitaciones secundarias me gustaria')}
                                    value="Bano compartido"
                                    className="inputRadio"
                                />
                                <label>Baño compartido</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    {...register('Habitaciones secundarias me gustaria')}
                                    value="Otros"
                                    className="inputRadio"
                                />
                                <label>Otros(especificar)</label>
                            </div>
                        </div>
                    </div>
                </div>
                <textarea
                    rows="6"
                    className="quoteTextarea"
                    placeholder="Hablanos un poco más de como te gustaría este espacio..."
                    {...register('Habitaciones-secundarias-descripcion')}
                />
                <div className="containerFormButtonsHousing">
                    <NavLink
                        to="/cotiza_tu_proyecto/formulario_vivienda_2"
                        className="buttonFormHousing "
                    >
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
