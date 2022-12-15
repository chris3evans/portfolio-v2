import styles from "./TestimonialSlider.module.css";

import TestimonialSlide from "../TestimonialSlide/TestimonialSlide";
import TestimonialButtons from "../TestimonialButtons/TestimonialButtons";

const TestimonialSlider = function () {
  return (
    <div className={styles["testimonial-slider"]}>
      <TestimonialSlide
        imageUrl="review-1.png"
        slideNumber={1}
      ></TestimonialSlide>
      <TestimonialSlide
        imageUrl="review-2.png"
        slideNumber={2}
      ></TestimonialSlide>
      <TestimonialSlide
        imageUrl="review-3.png"
        slideNumber={3}
      ></TestimonialSlide>
      <TestimonialSlide
        imageUrl="review-4.png"
        slideNumber={4}
      ></TestimonialSlide>
      <TestimonialButtons></TestimonialButtons>
    </div>
  );
};

export default TestimonialSlider;
