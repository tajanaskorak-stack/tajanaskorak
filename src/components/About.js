import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './About.module.css';

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className={`section ${styles.about} ${isVisible ? styles.fadeInUp : ''}`}
    >
      <div className="container">
        <h2 className={styles.sectionTitle}>About Me</h2>
        <hr className="divider" />
        <div className={styles.content}>
          <p className={styles.description}>
            I am a Key Account Manager with experience in the HoReCa sector, currently expanding
            my skills in AI, web development and digital products. I enjoy building solutions that
            connect people, data, and business goals.
          </p>
        </div>
        <hr className="gold-line" />
      </div>
    </section>
  );
};

export default About;
