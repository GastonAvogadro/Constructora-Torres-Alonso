import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ data }) => {
    return (
        <div className="carouselContainer">
            <Swiper navigation={true} pagination={true} modules={[Pagination, Navigation]}>
                {data.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img src={slide.image}></img>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
