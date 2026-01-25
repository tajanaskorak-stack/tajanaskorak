import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Experience.module.css';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="experience"
      ref={ref}
      className={`section ${styles.experience} ${isVisible ? styles.fadeInUp : ''}`}
    >
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

        <div className={styles.experienceItem}>
          <div className={styles.experienceHeader}>
            <h3 className={styles.jobTitle}>Affiliate marketing manager</h3>
            <span className={styles.date}>Honorar job | 2016. — 2020.</span>
          </div>

          <ul className={styles.responsibilities}>
            <li>Market research</li>
            <li>Finding new users</li>
            <li>Creating a sales strategy and actively participating in sales</li>
          </ul>
        </div>

        <hr className="gold-line" />
      </div>
    </section>
  );
};

export default Experience;
