import style from "./Projects.module.css";

export default function Projects() {
  return (
    <div className={style.projects__container} id="projects">
      <h2 cl>Projects</h2>
      <div className={style.project}>
        <h3 className={style.project__title}>Foodies</h3>
        <p className={style.project__description}>
          Este es un proyecto individial que está hecho sólo con React, Redux,
          Node.js, y sequelize(PostgreSQL) y trabaja con la API(Applicacion Page
          Interface) spoonacular. Esta pagina cuenta con las siguentes
          funcionalidades sin llegar a ser CRUD(Create Read Update Delete),
          todavía. La API tiene datos sobre platos de comida con muchos más
          detalles que no eran relevantes en mi caso.
        </p>
        <h4 className={style.project__title__list}>Funcionalidades</h4>
        <ul className={style.project__list}>
          <li>Buscar recetas</li>
          <li>
            Filtrardas por dietas y Ordenadas alfabéticamente y por máxima y
            mínima puntuación de salud
          </li>
          <li>Crear recetas propias</li>
          <li>Resetear las búsquedas y filtrados</li>
          <li>
            Paginado acorde a la cantidad de recetas encontradas en el caso de
            búsqueda
          </li>
        </ul>
        <button className={style.project__link}>
          <a
            href="https://github.com/Luciano-plaza/PI-FOOD"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositorio
          </a>
        </button>
        <button className={style.project__link}>
          <a
            href="https://pi-food-liard.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            App
          </a>
        </button>
      </div>
      <div className={style.project}>
        <label className={style.project__title}>Your Job</label>
        <p className={style.project__description}></p>
        <button className={style.project__link}>
          <a
            href="https://github.com/Luciano-plaza/Your-Job"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositorio
          </a>
        </button>
        <button className={style.project__link}>
          <a
            href="https://your-job-seven.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            App
          </a>
        </button>
      </div>
    </div>
  );
}
