import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Home.module.css";
import RotatingText from "../../RotatingText/RotatingText";

const HomeAnimation = lazy(() => import("../HomeAnimation"));

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles["home-content"]}>
        <h1>
          Hi, I'm <span>Abish</span>
        </h1>

        <h2>
          <RotatingText
            texts={[
              "Software Developer",
              "Web Developer",
              "MERN Stack Engineer",
              "Frontend Developer",
            ]}
            rotationInterval={2500}
            splitBy="words"
          />
        </h2>

        <p>
          I build modern, responsive websites using
          <span> React, Node.js, and MongoDB</span>.
        </p>

        <div className={styles.buttons}>
          <Link to="/projects" className={styles.btn}>
            View Projects
          </Link>
          <a href="/Abish_Y_Resume.Pdf" download className={styles.btnOutline}>
            Download CV
          </a>
        </div>

        <div className={styles.socials}>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className={styles.github} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className={styles.linkedin} />
          </a>
          <a href="mailto:abishyp6385@gmail.com" aria-label="Email">
            <Mail className={styles.mail} />
          </a>
        </div>
      </div>

      <div className={styles.content2}>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeAnimation />
        </Suspense>
      </div>
    </section>
  );
};

export default Home;
