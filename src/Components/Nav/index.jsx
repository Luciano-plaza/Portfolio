import Menu from "../../Icons/Menu.svg";
import GitHub from "../../Icons/GitHub.svg";
import LinkedIn from "../../Icons/LinkedIn.svg";
import ResumePhoto from "../../Icons/Resume.svg";
import Resume from "../../CV.pdf";
import style from "./Nav.module.css";
import Logo from "../../Images/Logo-Portfolio.png";
export default function Nav() {
  return (
    <nav className={style.nav__container}>
      <div className={style.nav__logo}>
        <a href="#beginning">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className={style.nav__links}>
        <a
          className={`${style.nav__linkedin} ${style.nav__link}`}
          href="https://www.linkedin.com/in/lucianoplazadev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="LinkedIn" />
        </a>
        <a
          className={`${style.nav__github} ${style.nav__link}`}
          href="https://github.com/Luciano-plaza"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GitHub} alt="GitHub" />
        </a>
        <a
          className={`${style.nav__cv} ${style.nav__link}`}
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ResumePhoto} alt="Resume" />
        </a>
      </div>

      <label htmlFor="menu" className={style.nav__label}>
        <img src={Menu} alt="Menu" />
      </label>
      <input type="checkbox" id="menu" className={style.nav__check} />
      <div className={style.nav__menu}>
        <div className={style.nav__menu__element}>
          <a href="#about">Acerca de mí</a>
        </div>
        <div className={style.nav__menu__element}>
          <a href="#projects">Projectos</a>
        </div>
        <div className={style.nav__menu__element}>
          <a href="#contacto">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
