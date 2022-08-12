import Mailer from "../Mailer/index.jsx";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer__container}>
      <Mailer />
      <div>
        <div>whatsapp</div>
        <div>LinkedIn</div>
        <div>GitHub</div>
      </div>
    </div>
  );
}
