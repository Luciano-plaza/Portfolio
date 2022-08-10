import style from "./Project.module.css";

export default function Project({Title, image, repo, deploy, description}) {
  return (
    <div className={style.Projects}>
      <div className={style.project}>
        <div className={style.Title}>{Title}</div>
        <img className={style.image} src={image} alt={Title} />
        <div className={style.repo}>{repo}</div>
        <div className={style.deploy}>{deploy}</div>
        {/* <p className={style.description}>{description}</p> */}
      </div>
    </div>
  );
}
