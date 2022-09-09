import style from "./Nav.module.css";

export default function Nav() {
  return (
    <header>
      <div className={style.nav__container}>
        <div className={style.nav__element}>
          <a href="#beginning">Inicio</a>
        </div>
        <div className={style.nav__element}>
          <a href="#about">Acerca de mí</a>
        </div>
        <div className={style.nav__element}>
          <a href="#projects">Projectos</a>
        </div>
        <div className={style.nav__element}>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </header>
  );
}
