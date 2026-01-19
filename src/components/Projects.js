import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import styles from './Projects.module.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'Personal Web Projects',
      description: 'Personal web projects (Cursor, Next.js, Vercel)',
      details: 'Building modern web applications using cutting-edge technologies. Focus on performance, user experience, and clean code architecture.',
      tech: ['Next.js', 'React', 'Vercel', 'TypeScript'],
      icon: '🚀',
    },
    {
      id: 2,
      title: 'AI Tools & Automation',
      description: 'AI tools & automation learning',
      details: 'Exploring AI-powered solutions to streamline workflows and enhance productivity. Learning machine learning fundamentals and practical applications.',
      tech: ['AI/ML', 'Automation', 'OpenAI'],
      icon: '🤖',
    },
    {
      id: 3,
      title: 'Digital Product Experiments',
      description: 'Digital product experiments',
      details: 'Creating innovative digital products that solve real-world problems. Experimenting with new technologies and design patterns.',
      tech: ['Product Design', 'Canva', 'Prototyping', 'User Research'],
      icon: '💡',
    },
  ];

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className={`section ${styles.projects} ${isVisible ? styles.fadeInUp : ''}`}
      >
        <div className="container">
          <h2 className={styles.sectionTitle}>Projects / Learning</h2>
          <hr className="divider" />

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={styles.projectCard}
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.projectIcon}>{project.icon}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectText}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.tech.slice(0, 2).map((tech, i) => (
                    <span key={i} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectOverlay}>
                  <span className={styles.viewMore}>View Details →</span>
                </div>
              </div>
            ))}
          </div>

          <hr className="gold-line" />
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>{selectedProject.icon}</div>
              <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
            </div>
            <p className={styles.modalDescription}>{selectedProject.details}</p>
            <div className={styles.modalTech}>
              <h4 className={styles.techTitle}>Technologies:</h4>
              <div className={styles.techList}>
                {selectedProject.tech.map((tech, i) => (
                  <span key={i} className={styles.techTagLarge}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
