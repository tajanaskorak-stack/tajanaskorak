import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={`section ${styles.about}`}>
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
