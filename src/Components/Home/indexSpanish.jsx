// import { useState, useEffect } from "react";
import YourJob from "../../Information/imagePF1.jpeg";
import PI_Foodies from "../../Information/PI-Foodies.jpg";
import projects from "../../Information/Projects.json";
import Project from "../Project/index.jsx";
import Nav from "../Nav/index.jsx";
import style from "./Home.module.css";
import About from "../About/index.jsx";
import Footer from "../Footer/index.jsx";

export default function HomeSpanish() {
  const Images = [YourJob, PI_Foodies];
  return (
    <>
      <Nav />
      <About />
      <div className={style.home__projects__container}>
        {projects?.map((project) => {
          // console.log();
          return (
            <div key={project.id} className={style.home__project}>
              <Project
                Title={project.title}
                image={Images.find((img__url) => img__url === project.img)}
                repo={project.repository}
                deploy={project.deployment}
                description={project.description}
              />
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
