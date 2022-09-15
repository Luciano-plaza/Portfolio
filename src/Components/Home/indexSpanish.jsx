// import { useState, useEffect } from "react";
import Nav from "../Nav/index.jsx";
import style from "./Home.module.css";
import About from "../About/index.jsx";
import Footer from "../Footer/index.jsx";
import Technologies from "../Technologies/index.jsx";

export default function HomeSpanish() {
  return (
    <>
      <Nav />
      <About />
      <Technologies />
      <div className={style.home__projects__container}>
        <h2 id="projects">Projects</h2>
        <div className={style.home__project}>
          <label className={style.home__project__title}>Foodies</label>
          <p className={style.home__project__description}></p>
          <button className={style.home__project__link}>
            <a
              href="https://github.com/Luciano-plaza/PI-FOOD"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio
            </a>
          </button>
          <button className={style.home__project__link}>
            <a
              href="https://pi-food-liard.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              App
            </a>
          </button>
        </div>
        <div className={style.home__project}>
          <label className={style.home__project__title}>Your Job</label>
          <p className={style.home__project__description}></p>
          <button className={style.home__project__link}>
            <a
              href="https://github.com/Luciano-plaza/Your-Job"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositorio
            </a>
          </button>
          <button className={style.home__project__link}>
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
      <Footer />
    </>
  );
}
