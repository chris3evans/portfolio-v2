import styles from "./TestimonialSlide.module.css";

const TestimonialSlide = function (props) {
  return (
    <div
      style={{
        transform: `translateX(${100 * (props.slideNumber - props.curSlide)}%)`,
        transition: "all 1s",
      }}
      className={styles["testimonial-slide"]}
      key={props.slideNumber}
    >
      <div className={styles["testimonial-slide-content"]}>
        <img
          className={styles["testimonial-image"]}
          src={require(`../../assets/${props.imageUrl}`)}
          alt={props.alt}
        ></img>
        <span className={styles["testimonial-left-quote"]}>&#8221;</span>
        <span className={styles["testimonial-right-quote"]}>&#8220;</span>
      </div>
    </div>
  );
};

export default TestimonialSlide;
