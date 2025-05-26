import Header from '../../components/Header/Header';
import styles from './CartPage.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import FeaturedProduct from '../../components/FeaturedProduct/FeaturedProduct';
import Services from '../../services/Services';
import Footer from '../../components/footer/Footer';

const CartPage = () => {
  return (
    <div className={styles.cartPage}>
      <Header />
      <main>
        <div>
          <ProductCard />
        </div>
        <div className={styles.productCardWrapper}>
          <FeaturedProduct />
          <Services />
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default CartPage;
