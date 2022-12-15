import styles from "./TestimonialSlider.module.css";

import TestimonialSlide from "../TestimonialSlide/TestimonialSlide";
import TestimonialButtons from "../TestimonialButtons/TestimonialButtons";

import { useState } from "react";

const TestimonialSlider = function () {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideBtnClickHandler = function (event) {
    setCurrentSlide(+event.target.id);
  };
  const slides = [
    "review-1.png",
    "review-2.png",
    "review-3.png",
    "review-4.png",
  ];

  return (
    <div className={styles["testimonial-slider"]}>
      {slides.map((slide, index) => {
        return (
          <TestimonialSlide
            imageUrl={slide}
            slideNumber={index}
            curSlide={currentSlide}
          ></TestimonialSlide>
        );
      })}
      <TestimonialButtons
        numSlides={slides.length}
        clickHandler={slideBtnClickHandler}
        curSlide={currentSlide}
      ></TestimonialButtons>
    </div>
  );
};

export default TestimonialSlider;
