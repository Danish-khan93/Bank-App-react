import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDealing = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rerum
          non a omnis sequi ipsa id esse, assumenda at porro
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="imagecard" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDealing;
