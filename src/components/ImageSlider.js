import { useState } from "react";
import { SliderData } from "./SliderData";

const ImageSlider = ({ slides }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
  };

  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === currentImage ? "slide-active" : "slide"}
            key={index}
          >
            {index === currentImage && (
              <div className="slider-image">
                <i class="fas fa-chevron-left" onClick={prevSlide}></i>
                <i class="fas fa-chevron-right" onClick={nextSlide}></i>
                <img src={slide.image} alt="slider image" />
                <div className="slider-review">
                  <p className="slider-review-text">{slide.comment}</p>
                  <div className="slider-review-bottom">
                    <p>{slide.name}</p>
                    <div className="stars">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <p>{slide.reviews} reviews at Yelp</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
        })}
    </div>
  );
};

export default ImageSlider;
