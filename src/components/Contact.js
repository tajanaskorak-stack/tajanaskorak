import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <>
      <section
        id="contact"
        ref={ref}
        className={`section ${styles.contact} ${isVisible ? styles.fadeInUp : ''}`}
      >
        <div className="container">
          <h2 className={styles.sectionTitle}>Contact</h2>
          <hr className="divider" />

          <div className={styles.contactContent}>
            <p className={styles.message}>Let&apos;s build something meaningful together.</p>

            <div className={styles.contactMethods}>
              <a href="mailto:tajanaskorak@gmail.com" className={styles.contactLink}>
                <span className={styles.contactIcon}>✉</span>
                <span>Email</span>
                <span className={styles.contactDetail}>tajanaskorak@gmail.com</span>
              </a>
              <a
                href="https://hr.linkedin.com/in/tajana-%C5%A1korak-bb5b57145"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <span className={styles.contactIcon}>💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="tel:+385989679486" className={styles.contactLink}>
                <span className={styles.contactIcon}>📞</span>
                <span>Phone</span>
                <span className={styles.contactDetail}>+385 98 967 9486</span>
              </a>
            </div>

            <div className={styles.ctaSection}>
              <button
                type="button"
                onClick={() => setIsFormOpen(true)}
                className="btn btn-primary"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Contact;
