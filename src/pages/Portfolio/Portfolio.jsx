import { AnimatedPage } from '../../components/AnimatedPage/AnimatedPage';
import Carousel from '../../components/Carousel/Carousel';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import { carouselList } from './carouselList';

export const Portfolio = () => {
    return (
        <AnimatedPage setClass={'portfolioContainer'}>
            <div className="portfolioHeader d-flex-column">
                <h3>Portfolio</h3>
                <div className="d-flex-space">
                    <p>Diseñamos experiencias</p>
                    <SocialMedia color={true} />
                </div>
            </div>
            <div>
                {carouselList.map((data, i) => (
                    <Carousel key={i} data={data} />
                ))}
            </div>
        </AnimatedPage>
    );
};
