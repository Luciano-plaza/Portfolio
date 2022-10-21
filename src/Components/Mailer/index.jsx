import style from "./Mailer.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import arrow from "../../Icons/Arrow.svg";
import swal from "sweetalert";

export default function Mailer() {
  const [effect, setEffect] = useState(false);
  const [form, setForm] = useState({
    email: "",
    text: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const sendEmail = (event) => {
    event.preventDefault();
    if (!Object.values(form)[0] || !Object.values(form)[1]) {
      // swal({
      //   icon: "error",
      //   title: "Error",
      //   text: "Por favor completa todos los campos",
      //   closeOnClickOutside: false,
      // });
      setEffect(true);
    } else {
      emailjs
        .sendForm(
          "service_6n71u9i",
          "template_4np6u46",
          event.target,
          "FnImgxY3p4_ZzWear"
        )
        .then((result) => console.log(result.text))
        .catch((error) => console.log(error.text));

      setForm({
        email: "",
        text: "",
      });
    }
  };
  return (
    <form onSubmit={sendEmail} className={style.mailer__form}>
      <input
        className={`${style.mailer__email}`}
        type="email"
        name="email"
        value={form.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <textarea
        className={`${style.mailer__text}`}
        name="text"
        value={form.text}
        placeholder="Messagge..."
        onChange={handleChange}
      />
      <button className={`${style.mailer__submit}`} type="submit">
        <img src={arrow} alt="Send" />
      </button>
      <div className={style.mailer__submit__active}>
        {effect && (
          <div className={style.mailer__submit__desactive}>
            <h2>Listo!</h2>
            <p>Tu mensaje fue enviado con éxito</p>
            <button>Home</button>
          </div>
        )}
      </div>
    </form>
  );
}
