import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Carousel(props) {
  var slides = props.slides;
  var timeout = props.timeout || 10000;
  var [currentIndex, setCurrentIndex] = useState(0);
  
  const {isRTL, isLoading, translations} = useLanguage();

  
  function goToNextSlide() {
    setCurrentIndex(function(prevIndex) {
      return (prevIndex + 1) % slides.length;
    });
  }

  function goToPrevSlide() {
    setCurrentIndex(function(prevIndex) {
      return (prevIndex - 1 + slides.length) % slides.length;
    });
  }

  useEffect(function() {
    var intervalId = setInterval(function() {
      goToNextSlide();
    }, timeout);

    return function cleanup() {
      clearInterval(intervalId);
    };
    
  }, [timeout, slides.length]);

  if(isLoading) return

return (
    <div className="relative w-full overflow-hidden h-lvh" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="flex transition-transform duration-500"
            style={{ transform: `translateX(${isRTL ? currentIndex * 100 : -currentIndex * 100}%)` }}>
            {slides.map(function(slide, index) {
                return (
                    <div key={index} className="w-full h-lvh flex-shrink-0 relative">
                        <img src={slide.image} alt={slide.caption} className="object-cover h-lvh md:w-full md:h-auto" />
                        <div className="absolute bottom-0 w-full bg-black/60 bg-opacity-50 text-white p-4 h-auto">
                            <h1 className='text-2xl md:text-3xl tracking-widest font-bold m-2'>{slide.title}</h1>
                            <p className='text-xl md:text-2xl text-wrap m-2'>{slide.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
        <button onClick={goToPrevSlide} className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-1/2 transform -translate-y-1/2 bg-black/60 text-white px-4 py-2 hover:bg-amber-500`}>
            {translations?.slider?.previous}
        </button>
        <button onClick={goToNextSlide} className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-1/2 transform -translate-y-1/2 bg-black/60 text-white px-4 py-2 hover:bg-amber-500`}>
            {translations?.slider?.next}
        </button>
    </div>
);
}
