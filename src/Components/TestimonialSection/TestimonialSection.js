import styles from "./TestimonialSection.module.css";

import TestimonialSlider from "../TestimonialSlider/TestimonialSlider";

const TestimonialSection = function () {
  return (
    <div className={styles["testimonials-section"]}>
      <h2 className={styles["testimonials-section-heading"]}>Testimonials</h2>
      <TestimonialSlider></TestimonialSlider>
    </div>
  );
};

export default TestimonialSection;
