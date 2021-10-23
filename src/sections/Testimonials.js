import React from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";

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
        <ImageSlider slides={SliderData} />
      </div>
    </div>
  );
}

export default Testimonials;
