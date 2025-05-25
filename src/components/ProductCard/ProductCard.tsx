// src/components/ProductCard/ProductCard.tsx
import styles from './ProductCard.module.css';
import { useGetProductsQuery } from '../../features/api/productApi';
import Loader from '../loader/Loader';

const ProductCard = () => {
  const { data, isLoading, isError } = useGetProductsQuery({ limit: 4 });

  if (isLoading) return <Loader />;

  if (isError || !data?.products) return <p>Failed to load product images</p>;

  const products = data.products;

  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <div className={styles.cardContent}>
          <img src={products[0]?.thumbnail} alt={products[0]?.title} className={styles.col4} />
          <div className={styles.overlayText}>
            <h6 className={styles.itemText}>5 items</h6>
            <h6 className={styles.titleText1}>{products[0]?.category}</h6>
            <h6 className={styles.linkText}>Read more</h6>
          </div>
        </div>
      </div>

      <div className={styles.rightBox}>
        <div className={styles.topBox}>
          <div className={styles.cardContent}>
            <img src={products[1]?.thumbnail} alt={products[1]?.title} className={styles.col5} />
            <div className={styles.overlayText}>
              <h6 className={styles.itemText}>5 items</h6>
              <h6 className={styles.titleText}>{products[1]?.category}</h6>
              <h6 className={styles.linkText}>Read more</h6>
            </div>
          </div>
        </div>

        <div className={styles.bottomBox}>
          <div className={styles.purpleBox}>
            <div className={styles.cardContent}>
              <img src={products[2]?.thumbnail} alt={products[2]?.title} className={styles.col5} />
              <div className={styles.overlayText}>
                <h6 className={styles.itemText}>5 items</h6>
                <h6 className={styles.titleText}>{products[2]?.category}</h6>
                <h6 className={styles.linkText}>Read more</h6>
              </div>
            </div>
          </div>

          <div className={styles.blueBox}>
            <div className={styles.cardContent}>
              <img src={products[3]?.thumbnail} alt={products[3]?.title} className={styles.col5} />
              <div className={styles.overlayText}>
                <h6 className={styles.itemText}>5 items</h6>
                <h6 className={styles.titleText}>{products[3]?.category}</h6>
                <h6 className={styles.linkText}>Read more</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
