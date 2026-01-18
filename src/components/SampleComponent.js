import React from 'react';
import styles from './SampleComponent.module.css';

const SampleComponent = ({ title = 'Sample Component', description }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default SampleComponent;
