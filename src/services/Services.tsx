import React from 'react';
import styles from './services.module.css';
import { useGetServicesQuery } from '../features/api/serviceApi';

interface Service {
  title: string;
  description: string;
  thumbnail: string;
}

const Services: React.FC = () => {
  const { data, error, isLoading } = useGetServicesQuery({ limit: 3 });

  if (isLoading) return <p>Loading services...</p>;
  if (error) return <p>Failed to load services.</p>;

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
        {data?.products.map((service: Service, index: number) => (
          <div
            key={service.title}
            className={`${styles.box} ${
              index === 0
                ? styles.boxOne
                : index === 1
                ? styles.boxTwo
                : styles.boxThree
            }`}
          >
            <div className={styles.iconWrapper}>
              <img
                src={service.thumbnail}
                alt={service.title}
                className={styles.icon}
              />
            </div>
            <div className={styles.title}>{service.title}</div>
            <div className={styles.subtitle}>{service.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
