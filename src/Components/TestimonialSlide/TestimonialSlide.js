import styles from "./TestimonialSlide.module.css";

const TestimonialSlide = function (props) {
  return (
    <div className={styles["testimonial-slide"]}>
      <div className={styles["testimonial-slide-content"]}>
        <img
          className={styles["testimonial-image"]}
          src={require(`../../assets/${props.imageUrl}`)}
        ></img>
        <span className={styles["testimonial-left-quote"]}>&#8221;</span>
        <span className={styles["testimonial-right-quote"]}>&#8220;</span>
      </div>
    </div>
  );
};

export default TestimonialSlide;
