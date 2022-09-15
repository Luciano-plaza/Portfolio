import Mailer from "../Mailer/index.jsx";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer__container} id="contacto">
      <Mailer />
      <div>
        <div>
          {/* <FontAwesomeIcon icon="fa-brands fa-linkedin-in" /> */}
        </div>
        <div>
          {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> */}
        </div>
        <div>
          {/* <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> */}
        </div>
        <div>
          {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
        </div>
      </div>
    </div>
  );
}
