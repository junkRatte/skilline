import React from "react";
import SliderImageOne from "../images/slider-image.png";

function Testimonials() {
  return (
    <div className="testimonials-section">
      <div className="testimonials-section-text">
        <div className="title">
          <span></span>
          <h2>Testimonials</h2>
        </div>
        <h2>What Do They Say?</h2>
        <p>
          Skilline has got more than 100k positive ratings from our users around
          the world.
          <br />
          <br />
          Some of the students and teachers were greatly helped by Skilline.
          <br />
          <br />
          Are you too? Please give your assessment!
        </p>
        <a href="#">
          Write your assessment
          <span>
            <i class="fas fa-long-arrow-alt-right fa-2x"></i>
          </span>
        </a>
      </div>
      <div className="testimonials-section-slider">
        <div className="slider">
          <i class="fas fa-chevron-left"></i>
          <i class="fas fa-chevron-right"></i>
          <div className="slider-image">
            <img src={SliderImageOne} />
          </div>
          <div className="slider-review">
            <p className="slider-review-text">
              "Thank you so much for your help. It's exactly what I've been
              looking for. You won't regret it. It really saves me time and
              effort. Skilline is exactly what our business has been lacking."
            </p>
            <div className="slider-review-bottom">
              <p>Gloria Rose</p>
              <div className="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <p>12 reviews at Yelp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
