import slide1 from '../assets/slide-1.png';
import slide2 from '../assets/slide-2.png';
import slide3 from '../assets/slide-3.jpg';
import Carousel from './Carousel';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {

    const { isRTL, isLoading, translations } = useLanguage();

    if (isLoading) return; // Handle loading state

    const slides = [
        {
            image: slide1,
            title: translations.slides.slideOne?.title,
            description: translations.slides.slideOne?.description,
        },
        {
            image: slide2,
            title: translations.slides.slideTwo?.title,
            description: translations.slides.slideTwo?.description,
        },
        {
            image: slide3,
            title: translations.slides.slideThree?.title,
            description: translations.slides.slideThree?.description,
        }
    ];
    return (
        <Carousel slides={slides}/>
    );
}