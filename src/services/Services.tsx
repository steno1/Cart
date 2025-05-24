import React from 'react';
import styles from './services.module.css';
import ExportIcon from '../assets/mediaBg5.png';
import bookReaderIcon from '../assets/bookReader.png'; 
import carbonBookIcon from '../assets/carbonBook.png'; 
import coolIcon from '../assets/coolIcon.svg'; 

const Services: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <h3 className={styles.sectionSubtitle}>BESTSELLER PRODUCTS</h3>
        <p className={styles.sectionDescription}>
          Problems trying to resolve the conflict between
        </p>
      </header>

      <div className={styles.container}>
        <div className={`${styles.box} ${styles.boxOne}`}>
          <div className={styles.iconWrapper}>
            <img src={bookReaderIcon} alt="icon" className={styles.icon} />
          </div>
          <div className={styles.title}>Easy Wins</div>
          <div className={styles.subtitle}>Get your best looking smile now!</div>
        </div>

        <div className={`${styles.box} ${styles.boxTwo}`}>
          <div className={styles.iconWrapper}>
            <img src={carbonBookIcon} alt="icon" className={styles.icon} />
          </div>
          <div className={styles.title}>Concrete</div>
          <div className={styles.subtitle}>Defalcate is most focused in helping you discover your most beautiful smile</div>
        </div>

        <div className={`${styles.box} ${styles.boxThree}`}>
          <div className={styles.iconWrapper}>
            <img src={coolIcon} alt="icon" className={styles.icon} />
          </div>
          <div className={styles.title}>Hack Growth</div>
          <div className={styles.subtitle}>Overcame any hurdle or any other problem.</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
