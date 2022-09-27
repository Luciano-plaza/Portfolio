import style from "./Projects.module.css";
import Foodies from "../../Images/PI-Foodies.png";
import YourJob from "../../Images/PF-YourJob.jpeg";

export default function Projects(props) {
  return (
    <section className={style.projects__container} id="projects">
      <h2>Projects</h2>
      <div className={`${style.project}`}>
        <img src={Foodies} alt="Foodies" className={style.project__img} />
        <h3 className={style.project__title}>Foodies</h3>
        <p className={style.project__description}>
          Este es un proyecto individial que está hecho sólo con React, Redux,
          Node.js, y sequelize(PostgreSQL) y trabaja con la API spoonacular. La
          API tiene datos sobre platos de comida con muchos más detalles.
        </p>
        <h4 className={style.project__title__list}>Funcionalidades</h4>
        <ul className={style.project__list}>
          <li>Buscar recetas</li>
          <li>
            Filtrardas por dietas y Ordenadas alfabéticamente y por máxima y
            mínima puntuación de salud
          </li>
          <li>Crear recetas propias</li>
        </ul>
        <a
          className={style.project__link}
          href="https://github.com/Luciano-plaza/PI-FOOD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Código</button>
        </a>
        <a
          className={style.project__link}
          href="https://pi-food-liard.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>App</button>
        </a>
      </div>
      <div className={`${style.project}`}>
        <img src={YourJob} alt="YourJob" className={style.project__img} />
        <h3 className={style.project__title}>Your Job</h3>
        <p className={style.project__description}>
          Este es un proyecto grupal en el que utilizamos la metodología scrum,
          está hecho con React, Redux, Express, sequelize y microservicios como
          Auth0, stripe, firebase y UploadCare.
        </p>
        <h4 className={style.project__title__list}>Funcionalidades</h4>
        <ul className={style.project__list}>
          <li>Postear en el foro</li>
          <li>Colgar anuncios de trabajos para contactar con las personas</li>
          <li>Contactar con empresas o personas por chat</li>
          <li>
            Pagar un premium para obtener beneficios en las búsquedas de
            empresas
          </li>
        </ul>
        <a
          className={style.project__link}
          href="https://github.com/Luciano-plaza/Your-Job"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Código</button>
        </a>
        <a
          className={style.project__link}
          href="https://your-job-seven.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>App</button>
        </a>
      </div>
    </section>
  );
}
