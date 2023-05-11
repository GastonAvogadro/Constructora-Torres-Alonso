import { NavLink } from 'react-router-dom';
import constructuraHome from '../../assets/images/constructoraCotizacionHome.jpg';
export const CotizacionHome = () => {

  const imageBackground = {
    backgroundImage: `url(${constructuraHome})`,
    backgroundPosition: 'center center',
    backgroundRepeat: ' no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',   
  }

  return (
    <div style={imageBackground}>
      <div className='imageFilterCotizacion'>
        
        <div className='cotizacionHomeContainer'>
                <div>
                    <h2 className='h2CotizacionHome'>Cotizá tu proyecto con nosotros</h2>
                    <div className="conteinerPCotizacion">
                        <p className='pCotizacionHome'>¿Tenés algún proyecto en mente? Estamos listos para ayudarte a hacer 
                        realidad tu espacio. Contanos tu idea y a la brevedad recibirás una propuesta que mejor se adapte a tus necesidades y presupuesto. 
                        </p>
                    </div>
                    <NavLink className="button-primary " to='cotiza_tu_proyecto' >Ver más</NavLink>

                </div>
            </div>
       
      </div>
    </div>
  )
}
