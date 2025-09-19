import React, { Suspense, lazy } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Home.module.css";
import RotatingText from "../../RotatingText/RotatingText";

const HomeAnimation = lazy(() => import("../HomeAnimation"));

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles["home-content"]}>
        <h1 data-aos="fade-up"
          data-aos-duration="1000">
          Hi, I'm <span>Abish</span>
        </h1>

        <h2 data-aos="fade-up"
          data-aos-duration="1500">
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

        <p data-aos="fade-up"
          data-aos-duration="2000">
          I build modern, responsive websites using
          <span> React, Node.js, and MongoDB</span>.
        </p>

        <div data-aos="fade-up"
          data-aos-duration="2500" className={styles.buttons}>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            className={styles.btn}
          >
            View Projects
          </ScrollLink>
          <a
            href="/Abish_Y_Resume.pdf"
            download="Abish_Y_Resume.pdf"
            className={styles.btnOutline}
          >
            Download CV
          </a>
        </div>

        <div data-aos="fade-up"
          data-aos-duration="3000" className={styles.socials}>
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

      <div data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="2000" className={styles.content2}>
        <Suspense fallback={<div>Loading...</div>}>
          <HomeAnimation />
        </Suspense>
      </div>
    </section>
  );
};

export default Home;
