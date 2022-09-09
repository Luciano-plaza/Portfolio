import style from "./Mailer.module.css";
import emailjs from "@emailjs/browser";

export default function Mailer() {
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(e.keyCode);
    emailjs
      .sendForm(
        "service_6n71u9i",
        "template_4np6u46",
        e.target,
        "FnImgxY3p4_ZzWear"
      )
      .then((result) => console.log(result.text))
      .catch((error) => console.log(error.text));
  };
  return (
    <form onSubmit={sendEmail} className={style.mailer__form}>
      <input className={style.mailer__email} type="email" name="user_email" placeholder="Email..."/>
      <textarea className={style.mailer__text} name="message" placeholder="Messagge..."/>
      <input className={style.mailer__submit} type="submit" />
    </form>
  );
}
