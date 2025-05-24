 import styles from './featuredProduct.module.css';
import productCover1 from "../../assets/productCover1.png";
import chair from "../../assets/chair.png";
import cutlery from "../../assets/cutlery.png";
import cutlery2 from "../../assets/cutlery2.png";
import cup from "../../assets/cup.png";
import cup2 from "../../assets/cup2.png";
import cup3 from "../../assets/cup3.png";
import drawal from "../../assets/drawal.png";


const FeaturedProduct = () => {
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

          <div>
            <article className={styles.productCard1}>
        
              <img src={productCover1} alt="product1"  />


            </article>
            <section className={styles.productFrame}>
              <h5 className={styles.productTitle}>Graphic Design</h5>
              <a href="#" className={styles.productCategory}>English Department</a>
              <div className={styles.priceWrapper}>
                <h5 className={styles.priceOriginal}>$16.48</h5>
                <h5 className={styles.priceDiscount}>$6.48</h5>
              </div>
            </section>
          </div>

          <div>
            <article className={styles.productCard2}>

                  <img src={chair} alt="product2"  />
            </article>
            <section className={styles.productFrame}>
              <h5 className={styles.productTitle}>Graphic Design</h5>
              <a href="#" className={styles.productCategory}>English Department</a>
              <div className={styles.priceWrapper}>
                <h5 className={styles.priceOriginal}>$16.48</h5>
                <h5 className={styles.priceDiscount}>$6.48</h5>
              </div>
            </section>
          </div>

          <div>
            <article className={styles.productCard3}>

                  <img src={cutlery} alt="product3"  />
            </article>
            <section className={styles.productFrame}>
              <h5 className={styles.productTitle}>Graphic Design</h5>
              <a href="#" className={styles.productCategory}>English Department</a>
              <div className={styles.priceWrapper}>
                <h5 className={styles.priceOriginal}>$16.48</h5>
                <h5 className={styles.priceDiscount}>$6.48</h5>
              </div>
            </section>
          </div>

          <div>
            <article className={styles.productCard4}>

                  <img src={cup} alt="product4"  />
            </article>
            <section className={styles.productFrame}>
              <h5 className={styles.productTitle}>Graphic Design</h5>
              <a href="#" className={styles.productCategory}>English Department</a>
              <div className={styles.priceWrapper}>
                <h5 className={styles.priceOriginal}>$16.48</h5>
                <h5 className={styles.priceDiscount}>$6.48</h5>
              </div>
            </section>
          </div>

          <div data-index="5">
            <article className={styles.productCard5}>
                  <img src={cutlery2} alt="product5"  />
            </article>
            <section className={styles.productFrame}>
              <h5 className={styles.productTitle}>Graphic Design</h5>
              <a href="#" className={styles.productCategory}>English Department</a>
              <div className={styles.priceWrapper}>
                <h5 className={styles.priceOriginal}>$16.48</h5>
                <h5 className={styles.priceDiscount}>$6.48</h5>
              </div>
            </section>
          </div>

          <div data-index="6">
            <article className={styles.productCard6}>
                  <img src={cup2} alt="product6"  />
            </article>
            <section className={styles.productFrame}>
              <h5 className={styles.productTitle}>Graphic Design</h5>
              <a href="#" className={styles.productCategory}>English Department</a>
              <div className={styles.priceWrapper}>
                <h5 className={styles.priceOriginal}>$16.48</h5>
                <h5 className={styles.priceDiscount}>$6.48</h5>
              </div>
            </section>
          </div>

          <div data-index="7">
            <article className={styles.productCard7}>
                  <img src={cup3} alt="product7"  />
            </article>
            <section className={styles.productFrame}>
              <h5 className={styles.productTitle}>Graphic Design</h5>
              <a href="#" className={styles.productCategory}>English Department</a>
              <div className={styles.priceWrapper}>
                <h5 className={styles.priceOriginal}>$16.48</h5>
                <h5 className={styles.priceDiscount}>$6.48</h5>
              </div>
            </section>
          </div>

          <div data-index="8">
            <article className={styles.productCard8}>
                  <img src={drawal} alt="product8"  />
            </article>
            <section className={styles.productFrame}>
              <h5 className={styles.productTitle}>Graphic Design</h5>
              <a href="#" className={styles.productCategory}>English Department</a>
              <div className={styles.priceWrapper}>
                <h5 className={styles.priceOriginal}>$16.48</h5>
                <h5 className={styles.priceDiscount}>$6.48</h5>
              </div>

            </section>
          </div>

        </div>
         <div className={styles.loadMoreWrapper}>
    <button className={styles.loadMoreBtn}>LOAD MORE PRODUCTS</button>
  </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;