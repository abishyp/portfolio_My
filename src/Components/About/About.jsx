import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.subtitle}>
          Hi, I'm <span>Abish Y</span> — a passionate developer who loves
          building modern, responsive, and user-friendly applications.
        </p>

        {/* Single merged section */}
        <div className={styles.section}>
          <p>
            I am a self-driven learner and technology enthusiast who enjoys
            exploring new frameworks, building creative solutions, and
            continuously improving my craft.  
            I specialize in developing full-stack applications with a focus on
            clean code, smooth user experience, and scalability. Whether it’s
            frontend design or backend logic, I enjoy turning ideas into
            reality.
          </p>
        </div>

        {/* Mission & Goals */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>🎯 Mission</h2>
            <p>
              To craft clean, scalable, and impactful digital solutions that
              make life easier for people.
            </p>
          </div>
          <div className={styles.card}>
            <h2>🚀 Goals</h2>
            <p>
              To keep learning cutting-edge technologies and contribute to
              meaningful projects that leave a positive mark.
            </p>
          </div>
        </div>

        {/* Quick Info */}
        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <h3>📚 Education</h3>
           <p>Master in Computer Applications (MCA)</p>
          </div>
          <div className={styles.highlight}>
            <h3>⚡ Interests</h3>
            <p>Coding • Gaming • Open Source</p>
          </div>
          <div className={styles.highlight}>
            <h3>🌍 Location</h3>
            <p>India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
