import { useState } from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';
import styles from './Hero.module.css';

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroImage}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/Untitled design (1).png"
                  alt="Tajana Škorak - Professional Portrait"
                  width={350}
                  height={350}
                  priority
                  quality={100}
                  className={styles.professionalImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>
            </div>

            <div className={styles.heroText}>
              <h1 className={styles.name}>
                <span className={styles.nameGlow}>Tajana Škorak</span>
              </h1>
              <p className={styles.title}>
                <span className={styles.titleLine}>Key Account Manager</span>
                <span className={styles.titleSeparator}> | </span>
                <span className={styles.titleLine}>AI & Digital Skills</span>
                <span className={styles.titleSeparator}> | </span>
                <span className={styles.titleLine}>HoReCa</span>
              </p>

              <blockquote className={styles.quote}>
                <p>&ldquo;We are what we repeatedly do. Excellence, then, is not an act, but a habit.&rdquo;</p>
                <cite className={styles.cite}>&mdash; Aristotle</cite>
              </blockquote>

              <div className={styles.ctaButtons}>
                <button
                  type="button"
                  onClick={() => setIsFormOpen(true)}
                  className="btn btn-primary"
                >
                  Contact me
                </button>
                <a
                  href="/Životopis - TAJANA ŠKORAK (4).pdf"
                  download="Životopis - TAJANA ŠKORAK (4).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Download CV
                </a>
                <a
                  href="https://hr.linkedin.com/in/tajana-%C5%A1korak-bb5b57145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  LinkedIn
                </a>
              </div>

              <div className={styles.contactInfo}>
                <a href="mailto:tajanaskorak@gmail.com">
                  <span className={styles.contactIcon}>✉️</span>
                  tajanaskorak@gmail.com
                </a>
                <span className={styles.separator}>•</span>
                <a href="tel:+385989679486">
                  <span className={styles.contactIcon}>📞</span>
                  +385 98 967 9486
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Hero;
