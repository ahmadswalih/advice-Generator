import React, { useState } from "react";
import dividerSmall from "../img/pattern-divider-mobile.svg";
import dividerBig from "../img/pattern-divider-desktop.svg";
import dice from "../img/icon-dice.svg";

const NewCard = ({ quote, onSubmit, loading }) => {
  const [animate, setAnimate] = useState(false);
  const [fade, setFade] = useState(false);

  //custom styles
  const style = {
    card: "bg-dark w-[90%] max-w-[500px] text-center rounded-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4",
    id: "text-green block my-6",
    advice: `${fade && "animate-fade"} text-light text-3xl mb-6`,
    divider: "text-center mx-auto mb-3",
    button:
      "flex  block bg-green rounded-full p-4 mx-auto relative top-10 hover:shadow-circle hover:shadow-green ease-in-out duration-300",
    button2: "m-4",
    dice: animate && "animate-spin",
    share: animate && "animate-spin",
  };

  return (
    <main className={style.card}>
      <span className={style.id}>advice #{quote.id}</span>
      <p
        id="quote"
        className={style.advice}
        onAnimationEnd={() => {
          setFade(false);
        }}
      >
        "{quote.advice}"
      </p>
      <img
        src={dividerSmall}
        srcSet={`${dividerSmall} 375w, ${dividerBig} 768w`}
        className={style.divider}
        alt=""
      />
      <button className={style.button} type="button" onClick={onSubmit}>
        <img
          className={style.dice}
          onAnimationEnd={() => {
            setAnimate(false);
          }}
          src={dice}
          alt=""
        />
      </button>
    </main>
  );
};

export default NewCard;
