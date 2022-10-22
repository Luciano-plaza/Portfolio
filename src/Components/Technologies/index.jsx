import style from './Technologies.module.css';
import Git from '../../Images/Git.png';
import Sequelize from '../../Images/Sequelize.png';
import PostgreSQL from '../../Images/PostgreSQL.png';
import React from '../../Images/React.png';
import CSS from '../../Images/CSS.png';
import HTML from '../../Images/HTML.png';
import TypeScript from '../../Images/TypeScript.png';
import JavaScript from '../../Images/JavaScript.png';
import Node from '../../Images/Node.png';
import Express from '../../Images/Express.png';
import NPM from '../../Images/NPM.png';
import SQL from '../../Images/SQL.png';
import Redux from '../../Images/Redux.png';

export default function Technologies() {
	return (
		<div className={style.technologies__background}>
			<div className={style.technologies__container}>
				<h2 className={style.technologies__title}>Tecnologías</h2>
				<span className={style.shadow}></span>
				<span className={style.shadow2}></span>

				<div className={style.technologies__banner}>
					<div className={style.tech__container}>
						<img className={`${style.git}`} src={Git} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.sequelize}`} src={Sequelize} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.postgresql}`} src={PostgreSQL} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.react}`} src={React} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.css}`} src={CSS} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.html}`} src={HTML} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.typescript}`} src={TypeScript} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.javascript}`} src={JavaScript} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.node}`} src={Node} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.express}`} src={Express} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.npm}`} src={NPM} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.sql}`} src={SQL} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.Redux}`} src={Redux} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.git}`} src={Git} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.sequelize}`} src={Sequelize} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.postgresql}`} src={PostgreSQL} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.react}`} src={React} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.css}`} src={CSS} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.html}`} src={HTML} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.typescript}`} src={TypeScript} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.javascript}`} src={JavaScript} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.node}`} src={Node} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.express}`} src={Express} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.npm}`} src={NPM} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.sql}`} src={SQL} alt="" />
					</div>

					<div className={style.tech__container}>
						<img className={`${style.Redux}`} src={Redux} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
