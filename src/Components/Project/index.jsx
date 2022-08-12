import style from "./Project.module.css";

export default function Project({ Title, image, repo, deploy, description }) {
  return (
    <div className={style.project__container}>
      {/* <div className={style.Title}>{Title}</div> */}
      <img className={style.project__img} src={image} alt={Title} />
      {/* <div className={style.repo}>{repo}</div>
        <div className={style.deploy}>{deploy}</div> */}
      {/* <p className={style.description}>{description}</p> */}
    </div>
  );
}
