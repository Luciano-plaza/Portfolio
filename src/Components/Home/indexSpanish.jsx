// import { useState, useEffect } from "react";
import projects from "../../Sensible information/Projects.json";
import Project from "../Project/index.jsx";
import Nav from "../Nav/index.jsx";
import style from "./Home.module.css";

export default function HomeSpanish() {
  return (
    <>
      <Nav />
      <div className={style.projects__container}>
        {projects?.map((project) => {
          return (
            <div key={project.id} className={style.project}>
              <Project
                Title={project.title}
                image={project.img}
                repo={project.repository}
                deploy={project.deployment}
                description={project.description}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
