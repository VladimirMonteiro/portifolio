import { useEffect, useRef } from "react";
import styles from "./Technologies.module.css";

// icons
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoNodejs, BiLogoReact, BiLogoSpringBoot } from "react-icons/bi";
import { DiGit, DiJava } from "react-icons/di";

const Technologies = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add(styles.visible);
        } else {
          section.classList.remove(styles.visible); // para fade-out
        }
      },
      { threshold: 0.2 } // ativa quando 20% do componente aparece
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="technologies" ref={sectionRef} className={styles.fade_section}>
      <div className={styles.header_container}>
        <h2>Tecnologias</h2>
        <p>habilidades nas seguintes tecnologias</p>
      </div>

      <div className={styles.card_container}>
        <div className={styles.card}>
          <div style={{ color: "rgb(255, 165, 0)" }} className={styles.icon}>
            <AiFillHtml5 />
          </div>
          <h3>HTML5</h3>
        </div>

        <div className={styles.card}>
          <div style={{ color: "#88C249" }} className={styles.icon}>
            <BiLogoNodejs />
          </div>
          <h3>NodeJS</h3>
        </div>

        <div className={styles.card}>
          <div style={{ color: "#00D3F6" }} className={styles.icon}>
            <BiLogoReact />
          </div>
          <h3>ReactJS</h3>
        </div>

        <div className={styles.card}>
          <div style={{ color: "#F35530" }} className={styles.icon}>
            <DiGit />
          </div>
          <h3>Git</h3>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>
            <DiJava />
          </div>
          <h3>Java</h3>
        </div>

        <div className={styles.card}>
          <div className={styles.icon} style={{ color: "green" }}>
            <BiLogoSpringBoot />
          </div>
          <h3>Spring Boot</h3>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
