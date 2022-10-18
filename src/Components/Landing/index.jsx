import style from "./Landing.module.css";
import Arrow from "../../Icons/ArrowDown.svg";

export default function Landing() {
  return (
    <section className={style.landing}>
      <div className={style.landing__background}></div>
      <div className={style.landing__container}>
        <span>Hola,</span>
        <span>soy</span>
        <span>Luciano</span>
        <span>y</span>
        <span>esto</span>
        <span>es</span>
        <span>un</span>
        <span>poco</span>
        <span>sobre</span>
        <span>mí</span>
      </div>
      <div className={style.landing__arrow}>
        <a href="#about">
          <img src={Arrow} alt="Down" />
        </a>
      </div>
    </section>
  );
}
