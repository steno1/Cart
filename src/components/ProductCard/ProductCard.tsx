import styles from "./ProductCard.module.css";
import col4 from "../../assets/col4.png";
import mediaBg from "../../assets/mediaBg.png";
import mediaBg2 from "../../assets/mediaBg2.png";
import mediaBg3 from "../../assets/mediaBg3.png";
import mediaBg5 from "../../assets/mediaBg5.png";
import col5 from "../../assets/col5.png";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBox}>
        <div className={styles.cardContent}>
          <img src={mediaBg} alt="product1" className={col4} />
          <div className={styles.overlayText}>
            <h6 className={styles.itemText}>5 items</h6>
            <h6 className={styles.titleText1}>Furniture</h6>
            <h6 className={styles.linkText}>Read more</h6>
          </div>
        </div>
      </div>

      <div className={styles.rightBox}>
        <div className={styles.topBox}>
          <div className={styles.cardContent}>
            <img src={mediaBg2} alt="product2" className={col5} />
            <div className={styles.overlayText}>
              <h6 className={styles.itemText}>5 items</h6>
              <h6 className={styles.titleText}>Furniture</h6>
              <h6 className={styles.linkText}>Read more</h6>
            </div>
          </div>
        </div>

        <div className={styles.bottomBox}>
          <div className={styles.purpleBox}>
            <div className={styles.cardContent}>
              <img src={mediaBg3} alt="product3" className={col5} />
              <div className={styles.overlayText}>
                <h6 className={styles.itemText}>5 items</h6>
                <h6 className={styles.titleText}>Furniture</h6>
                <h6 className={styles.linkText}>Read more</h6>
              </div>
            </div>
          </div>
          <div className={styles.blueBox}>
            <div className={styles.cardContent}>
              <img src={mediaBg5} alt="product4" className={col5} />
              <div className={styles.overlayText}>
                <h6 className={styles.itemText}>5 items</h6>
                <h6 className={styles.titleText}>Furniture</h6>
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
