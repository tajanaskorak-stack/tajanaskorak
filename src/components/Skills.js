import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Skills.module.css';

const Skills = () => {
  // Add scroll animation hook
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  const hardSkills = [
    'Sales & Negotiation',
    'Key Account Management',
    'AI Tools',
    'Web Basics (Next.js, Supabase)',
    'CRM & Analytics',
  ];

  const softSkills = [
    'Communication',
    'Strategic Thinking',
    'Relationship Building',
    'Problem Solving',
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`section ${styles.skills} ${isVisible ? styles.fadeInUp : ''}`}
    >
      <div className="container">
        <h2 className={styles.sectionTitle}>Skills</h2>
        <hr className="divider" />

        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.sticker}>💻</span>
              Hard Skills
            </h3>
            <ul className={styles.skillList}>
              {hardSkills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  <span className={styles.skillDot}></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              <span className={styles.sticker}>✨</span>
              Soft Skills
            </h3>
            <ul className={styles.skillList}>
              {softSkills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  <span className={styles.skillDot}></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="gold-line" />
      </div>
    </section>
  );
};

export default Skills;
