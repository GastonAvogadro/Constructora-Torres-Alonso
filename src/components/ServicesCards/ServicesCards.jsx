import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { servicesList } from './servicesList';
import arrow from '../../assets/images/arrow.png';
import 'swiper/css/navigation';

const ServicesCards = () => {
    const ref = useRef(null);
    const [showCard, setShowCard] = useState(false);

    const handleClick = (card) => {
        setShowCard(card);
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleArrow = () => {
        setShowCard(false);
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="servicesCardsContainer d-flex-center" ref={ref}>
            {showCard ? (
                <div className="selectedCardContainer d-flex-column">
                    <img src={arrow} className="arrow" onClick={() => handleArrow()} />
                    <img src={servicesList[showCard - 1].image}></img>
                    <h3>{servicesList[showCard - 1].title}</h3>
                    <p>{servicesList[showCard - 1].text}</p>
                    <Link to="/contacto">
                        <button className="button-primary">Hace tu consulta</button>
                    </Link>
                </div>
            ) : (
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    breakpoints={{
                        400: {
                            slidesPerView: 1,
                            centeredSlides: true,
                        },
                        600: {
                            slidesPerView: 1.5,
                            centeredSlides: true,
                            initialSlide: 1,
                        },
                        800: {
                            slidesPerView: 2,
                            centeredSlides: true,
                            initialSlide: 1,
                        },
                        1000: {
                            slidesPerView: 2.5,
                            centeredSlides: true,
                            initialSlide: 1,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {servicesList.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div
                                className={`serviceCard d-flex-column ${slide.id !== 2 && 'cardBottom'}`}
                            >
                                <img src={slide.image} />
                                <h3>{slide.title}</h3>
                                <p>{slide.text.slice(0, 243) + '...'}</p>
                                <button onClick={() => handleClick(slide.id)} className="button-primary">
                                    Ver más
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default ServicesCards;
