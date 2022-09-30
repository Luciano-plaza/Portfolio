import Menu from "../../Icons/Menu.svg";
import style from "./Nav.module.css";

export default function Nav() {
  return (
    <header>
      <label for="menu" className={style.nav__menu}>
        <img src={Menu} alt="Menu" />
      </label>
      <input type="checkbox" id="menu" className={style.nav__check} />
      <div className={style.nav__container}>
        <div className={style.nav__element}>
          <a href="#about">Acerca de mí</a>
        </div>
        <div className={style.nav__element}>
          <a href="#projects">Projectos</a>
        </div>
        <div className={style.nav__element}>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </header>
  );
}
