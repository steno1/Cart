
import Header from '../../components/Header/Header';
import styles from './CartPage.module.css';
import ProductCard from '../../components/ProductCard/ProductCard';

const CartPage = () => {
  return (
    <div className={styles.cartPage}>
      <Header />
     
      
      <main>
         <ProductCard/>
      </main>
    </div>
  );
};

export default CartPage;
