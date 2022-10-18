import style from "./Mailer.module.css";
import emailjs from "@emailjs/browser";
import arrow from "../../Icons/Arrow.svg";

export default function Mailer() {
  const sendEmail = (event) => {
    event.preventDefault();
    console.log(event.target);
    emailjs
      .sendForm(
        "service_6n71u9i",
        "template_4np6u46",
        event.target,
        "FnImgxY3p4_ZzWear"
      )
      .then((result) => console.log(result.text))
      .catch((error) => console.log(error.text));
  };
  return (
    <form onSubmit={sendEmail} className={style.mailer__form}>
      <input
        className={`${style.mailer__email}`}
        type="email"
        name="user_email"
        placeholder="Email..."
      />
      <textarea
        className={style.mailer__text}
        name="message"
        placeholder="Messagge..."
      />
      <button className={style.mailer__submit} type="submit" disabled>
        <img src={arrow} alt="Send" />
      </button>
    </form>
  );
}
