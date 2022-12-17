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
    {
      image: "review-1.png",
      alt: "By miniforge - Great developer, easy to work with and fulfilled all my revisions very quickly. His responsive design means my page looks great on mobile - important since that is where my customers are mainly. Would recommend to anyone wanting quality work at a good price.",
    },
    {
      image: "review-2.png",
      alt: "By jainilvyas - Chris is a great freelancer to work with. Understands every requirements and delivers the project very precisely and perfectly.",
    },
    {
      image: "review-3.png",
      alt: "By rohanweblearn  - I am so happy that one of my friend recommended Chris for my website project. Happy with the final product. Looking forward to working with him again. Good luck.",
    },
    {
      image: "review-4.png",
      alt: "By taha_777 - Great work and really responsive seller! Always willing to make the small changes that I requested and turned them around in under a day!",
    },
  ];

  return (
    <div className={styles["testimonial-slider"]}>
      {slides.map((slide, index) => {
        return (
          <TestimonialSlide
            imageUrl={slide.image}
            slideNumber={index}
            curSlide={currentSlide}
            alt={slide.alt}
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
