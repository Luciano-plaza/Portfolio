import Photo from "../../Images/photo__about.jpg";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.about__container}>
      <h2 id="about">About</h2>
      <h2 className={style.about__title}>Luciano Plaza</h2>
      <img className={style.about__img} src={Photo} alt="Luciano Plaza" />
      <div className={style.about__description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sapiente
        fuga qui provident laborum. Officia doloremque reiciendis repudiandae,
        tempore blanditiis deserunt eveniet nihil sint officiis nobis
        consequuntur ea dolorum unde? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Doloremque, optio alias illum corrupti adipisci veniam
        atque quasi est minus fuga soluta? Culpa provident, facere dignissimos
        neque sit quod ducimus earum!
      </div>
    </div>
  );
}
