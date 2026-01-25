import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.crown}>👑</div>
      <div className={styles.letter}>T</div>
    </div>
  );
};

export default Logo;
