import styles from './Experience.module.css';

const Experience = () => {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Experience</h2>
        <hr className="divider" />

        <div className={styles.experienceItem}>
          <div className={styles.experienceHeader}>
            <h3 className={styles.jobTitle}>Key Account Manager — HoReCa</h3>
            <span className={styles.date}>Croatia | 2020 — Present</span>
          </div>

          <ul className={styles.responsibilities}>
            <li>Managing key clients and long-term partnerships</li>
            <li>Driving sales growth and strategic accounts</li>
            <li>Market analysis & reporting</li>
          </ul>
        </div>

        <hr className="gold-line" />
      </div>
    </section>
  );
};

export default Experience;
