import Photo from "../../Images/photo__about.WebP";
import style from "./About.module.css";
import Tilt from "react-parallax-tilt";
import GitHub from "../../Icons/GitHub.svg";
import LinkedIn from "../../Icons/LinkedIn.svg";
import ResumePhoto from "../../Icons/Resume.svg";
import Resume from "../../CV.pdf";

export default function About() {
  return (
    <section className={style.section__id} id="about">
      <div className={style.about__container}>
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={10}
          scale={1.05}
          transitionSpeed={600}
          perspective={1300}
        >
          <div className={style.about__container__architecture}>
            <h2 className={style.about__title}>Luciano Plaza</h2>
            <img className={style.about__img} src={Photo} alt="Luciano Plaza" />
            <div className={style.about__description}>
              <span className={style.about__description__opening}>Buenas!</span>{" "}
              Soy Luciano, tengo 20 años y muchas ganas de aprender y
              desarrollarme para seguir mejorando en este hermoso sector.
              Desarrollador Web Full Stack orientado al Front-End pero adaptable
              a las necesidades del equipo, con la capacidad y proactividad para
              proyectos escalables y modularizados donde siempre se aprenda de
              los procesos y resultados.
            </div>
            {/* <div className={style.about__objectives}></div> */}
            <div className={style.about__links}>
              <a
                className={`${style.about__linkedin} ${style.about__link}`}
                href="https://www.linkedin.com/in/lucianoplazadev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn" />
                LinkedIn
              </a>
              <a
                className={`${style.about__github} ${style.about__link}`}
                href="https://github.com/Luciano-plaza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={GitHub} alt="GitHub" />
                GitHub
              </a>
              <a
                className={`${style.about__cv} ${style.about__link}`}
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ResumePhoto} alt="Resume" />
                Currículum
              </a>
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
}
