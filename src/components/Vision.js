import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Vision.module.css';

const Vision = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="vision"
      ref={ref}
      className={`section ${styles.vision} ${isVisible ? styles.fadeInUp : ''}`}
    >
      <div className="container">
        <h2 className={styles.sectionTitle}>Vision</h2>
        <hr className="divider" />
        <div className={styles.content}>
          <p className={styles.description}>
            I am open to opportunities that combine sales, technology, and innovation — especially
            in international and digital-first environments.
          </p>
        </div>
        <hr className="gold-line" />
      </div>
    </section>
  );
};

export default Vision;
