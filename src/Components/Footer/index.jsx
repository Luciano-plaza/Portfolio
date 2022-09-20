import Mailer from "../Mailer/index.jsx";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer__container} id="contacto">
      <h3 className={style.footer__title}>Hablemos !</h3>
      <Mailer />
    </div>
  );
}
