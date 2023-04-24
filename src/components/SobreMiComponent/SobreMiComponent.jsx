import lautaro1 from '../../assets/images/Lautaro1.jpg'
import lautaro2 from '../../assets/images/Lautaro2.jpg'

export const SobreMiComponent = () => {
  return (
    <>
      <br />

      <div className='aboutContainer'>

        <div className='aboutText'>
          <h2 className='h2'>Somos...</h2>
          <div className='p'>
            <p ><b>Torres Alonso Constructora</b> fundada desde 2023, por G. Lautaro Torres Alonso, estudiante de arquitectura en la Facultad de Arquitectura y
              Urbanismo de la UNT. Experto en Mercado de Capitales y análisis técnico con especialidad en derivados financieros.
            </p>
            <br />
            <p>
              En la fusión de la arquitectura y las finanzas está la clave para que no tengas que preocuparte de nada.
            </p>
            <br />
            <p>

              “Lo que aspiro a futuro es que mi empresa sea reconocida por calidad y excelentes resultados. Que los tiempos se cumplen en lo pactado y
              recordarle a los clientes que esta casa/ampliación/remodelación es para toda la vida, por lo que debe hacerse a conciencia,
              de lo contrario lo barato sale muy caro.”
            </p>
          </div>
        </div>

        <div className='aboutContainerImage '>
          <img className='aboutImage' src={lautaro2} alt="" />

          <img className='aboutImage' src={lautaro1} alt="" />
        </div>
        <div className='p2'>
            <p ><b>Torres Alonso Constructora</b> fundada desde 2023, por G. Lautaro Torres Alonso, estudiante de arquitectura en la Facultad de Arquitectura y
              Urbanismo de la UNT. Experto en Mercado de Capitales y análisis técnico con especialidad en derivados financieros.
            </p>
            <br />
            <p>
              En la fusión de la arquitectura y las finanzas está la clave para que no tengas que preocuparte de nada.
            </p>
            <br />
            <p>

              “Lo que aspiro a futuro es que mi empresa sea reconocida por calidad y excelentes resultados. Que los tiempos se cumplen en lo pactado y
              recordarle a los clientes que esta casa/ampliación/remodelación es para toda la vida, por lo que debe hacerse a conciencia,
              de lo contrario lo barato sale muy caro.”
            </p>
          </div>
      </div>

      <br />
    </>
  )
}
