// import { useState, useEffect } from "react";
import YourJob from "../../Sensible information/imagePF1.jpeg";
import PI_Foodies from "../../Sensible information/PI-Foodies.jpg";
import projects from "../../Sensible information/Projects.json";
import Project from "../Project/index.jsx";
import Nav from "../Nav/index.jsx";
import style from "./Home.module.css";

export default function HomeSpanish() {
  const Images = [YourJob, PI_Foodies];
  return (
    <>
      <Nav />
      <div className={style.projects__container}>
        {projects?.map((project) => {
          return (
            <div key={project.id} className={style.project}>
              <Project
                Title={project.title}
                image={Images.find(img__name => img__name === project.title)}
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
