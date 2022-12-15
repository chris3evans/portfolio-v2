import styles from "./TestimonialButtons.module.css";

const TestimonialButtons = function () {
  return (
    <div className={styles["testimonial-buttons-container"]}>
      <button className={styles["testimonial-button"]} id={1}></button>
      <button className={styles["testimonial-button"]} id={2}></button>
      <button className={styles["testimonial-button"]} id={3}></button>
      <button className={styles["testimonial-button"]} id={4}></button>
    </div>
  );
};

export default TestimonialButtons;
