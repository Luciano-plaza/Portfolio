import style from "./Nav.module.css";

export default function Nav() {
  return (
    <nav>
      <div className={style.nav__container}>
        <div className={style.nav__element}>Inicio</div>
        <div className={style.nav__element}>Acerca de mí</div>
        <div className={style.nav__element}>Projectos</div>
        <div className={style.nav__element}>Contacto</div>
      </div>
    </nav>
  );
}
