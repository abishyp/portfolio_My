import React from "react";
import styles from "./project.module.css";
import portfolioImg from "../../Assets/portfolio img.png";
import restarunt from "../../Assets/restarunt img.png";
import weather from "../../Assets/weather img.png";


const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Portfolio ",
      desc: "A personal portfolio showcasing my work and skills.",
      img: portfolioImg,
      tech: ["HTML", "CSS", "React"],
    },
    {
      id: 2,
      title: "Restaurant App",
      desc: "A shopping platform with product listings and cart system.",
      img: restarunt,
      tech: ["HTML", "CSS", "React"],
    },
    {
      id: 3,
      title: "Weather App",
      desc: "An app for menu browsing, reservations, and online orders.",
      img: weather,
      tech: ["HTML", "CSS", "JavaScript", "React", "API"],
    },
  ];

  return (
    <div className={styles.projects}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.grid}>
        {projectList.map((project) => (
          <div key={project.id} className={styles.card}>
            <img src={project.img} alt={project.title} className={styles.image} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className={styles.tech}>
              {project.tech.map((t, index) => (
                <span key={index} className={styles.techTag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
