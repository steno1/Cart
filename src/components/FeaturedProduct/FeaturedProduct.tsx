import styles from './featuredProduct.module.css';

import { useGetProductsQuery } from '../../features/api/productApi';
import { useState } from 'react';
import Loader from '../loader/Loader';

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  thumbnail: string;
}

const FeaturedProduct = () => {
  const [limit, setLimit] = useState(8);
  const { data, isLoading, isError } = useGetProductsQuery({ limit, skip: 0 });

  if (isLoading) return <Loader />;

  if (isError) return <p>Failed to load products.</p>;

  return (
    <section className={styles.featuredProduct}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>
        <h3 className={styles.sectionSubtitle}>BESTSELLER PRODUCTS</h3>
        <p className={styles.sectionDescription}>
          Problems trying to resolve the conflict between
        </p>
      </header>

      <div className={styles.productsRow}>
        <div className={styles.productGrid}>
          {data?.products?.map((product: Product) => (
            <div key={product.id}>
              <article className={styles.productCard1}>
                <img src={product.thumbnail} alt={product.title} />
              </article>
              <section className={styles.productFrame}>
                <h5 className={styles.productTitle}>{product.title}</h5>
                <a href="#" className={styles.productCategory}>{product.category}</a>
                <div className={styles.priceWrapper}>
                  <h5 className={styles.priceOriginal}>${(product.price * 1.5).toFixed(2)}</h5>
                  <h5 className={styles.priceDiscount}>${product.price.toFixed(2)}</h5>
                </div>
              </section>
            </div>
          ))}
        </div>

        <div className={styles.loadMoreWrapper}>
          <button className={styles.loadMoreBtn} onClick={() => setLimit(limit + 8)}>
            LOAD MORE PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
