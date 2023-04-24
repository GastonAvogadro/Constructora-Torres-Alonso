import Porfolio1 from '../../assets/images/carousel-B1.jpg'
import Porfolio2 from '../../assets/images/carousel-A2.jpg'
import Porfolio3 from '../../assets/images/carousel-D1.jpg'
import { NavLink } from 'react-router-dom'

export const PorfolioHome = () => {
  return (
    <>
    <h2 className='h2PorfolioHome'>Porfolio...</h2>
    <p className='pPorfolioHome'>Diseñamos experiencias</p>

      <div className='porfolioHomeContainer'>
        <div className='containerImagLeft'>
          <img src={Porfolio1} alt='' className='imagePorfolio' />
        </div>
        <div className='containerImagesRight d-flex-column'>
         
            <img src={Porfolio2} className='imagePorfolio' />
          
         
            <img src={Porfolio3} className='imagePorfolio' />
          
        </div>
      </div>
      <div className='porfolioHomeButton'>
        <NavLink className='button-primary' to='portfolio'>Ver más</NavLink>
      </div>
    </>
  )
}
