import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiBootstrap, SiExpress } from "react-icons/si";
import styles from "./Skills.module.css"; // ✅ Import module.css

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" size={50} /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={50} /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" size={50} /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={50} /> },
    { name: "React", icon: <FaReact color="#61DAFB" size={50} /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" size={50} /> },
    { name: "Express.js", icon: <SiExpress color="#600505ff" size={50} /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={50} /> },
  ];

  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Skills</h2>
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <div className={styles.card} key={index} data-name={skill.name}>
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
