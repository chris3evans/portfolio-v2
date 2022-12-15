import styles from "./TestimonialButtons.module.css";

const TestimonialButtons = function (props) {
  const numButtons = Array.from({ length: props.numSlides });

  return (
    <div className={styles["testimonial-buttons-container"]}>
      {numButtons.map((_, index) => {
        return (
          <button
            key={index}
            onClick={props.clickHandler}
            className={styles["testimonial-button"]}
            id={index}
            style={{
              backgroundColor: `${
                props.curSlide === index ? "rgb(122, 2, 2)" : "red"
              }`,
            }}
          ></button>
        );
      })}
    </div>
  );
};

export default TestimonialButtons;
