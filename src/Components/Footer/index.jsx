import Mailer from "../Mailer/index.jsx";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer__container} id="contacto">
      <h2 className={style.footer__title}>Hablemos !</h2>
      <Mailer />
    </div>
  );
}
