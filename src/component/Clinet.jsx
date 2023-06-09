import React from "react";
import { clients } from "../contstant";
import styles from "../style";
const Clinet = () => {
  return (
    <section className={`${styles.flexCenter} my-4 `}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => {
          return (
            <div
              key={client.id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
            >
              <img
                src={client.logo}
                alt="logo"
                className="sm:w-[192px] h-[100px] object-contain "
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clinet;
