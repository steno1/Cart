import styles from "./Header.module.css";
import phoneIcon from "../../assets/phone.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedInIcon from "../../assets/linkedlin.png";
import FacebookIcon from "../../assets/social.png";
import TwitterIcon from "../../assets/twitter.png";
import dropdownVector from "../../assets/dropdown.png";
import searchIcon from "../../assets/search.png";
import notificationIcon from "../../assets/notification.png";
import oneIcon from "../../assets/one.png";
import heartIcon from "../../assets/heart.png";
import userIcon from "../../assets/user.png";
import menuIcon from "../../assets/menu.png";
import cartIcon from "../../assets/cart.png";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      {/* Top Green Bar */}
      <header className={styles.header}>
        <div className={styles["header-contact"]}>
          <a
            href="tel:(225) 555-0118"
            aria-label="Call (225) 555-0118"
            className={styles["phone-number"]}
            onClick={(e) => e.preventDefault()}
          >
            <img
              src={phoneIcon}
              alt="Phone icon"
              className={styles["phone-icon"]}
            />
            (225) 555-0118
          </a>

          <a
            href="mailto:michelle.rivera@example.com"
            className={styles.email}
            aria-label="Email michelle.rivera@example.com"
            onClick={(e) => e.preventDefault()}
          >
            michelle.rivera@example.com
          </a>

          <div className={styles.promoSection}>
            <span className={styles.followUs}>Follow Us </span>
            <span className={styles.promoText}>
              Get a chance to win 80% off
            </span>
          </div>
        </div>

        <section className={styles.socialFollow}>
          <span className={styles.followText}>Follow Us</span>
          <nav aria-label="Social media links" className={styles.socialNav}>
            <ul className={styles.socialList}>
              <li>
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    src={InstagramIcon}
                    alt="Instagram"
                    className={styles.InstagramIcon}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    src={LinkedInIcon}
                    alt="LinkedIn"
                    className={styles.LinkedInIcon}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    src={FacebookIcon}
                    alt="Facebook"
                    className={styles.FacebookIcon}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    src={TwitterIcon}
                    alt="Twitter"
                    className={styles.TwitterIcon}
                  />
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </header>

      {/* Bottom White Bar */}
      <div className={styles.headerSecondary}>
        <h3 className={styles.logo} aria-label="Bandage logo">
          Bandage
        </h3>

        <nav
          className={`${styles.nav} ${styles.navbarNav}`}
          aria-label="Main navigation"
        >
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a
                href="/home"
                className={styles.navLink}
                onClick={(e) => e.preventDefault()}
              >
                Home
              </a>
            </li>

            <li className={styles.navItem}>
              <div className={styles.dropdownContainer}>
                <span className={styles.dropdownText}>Shop</span>
                <img
                  src={dropdownVector}
                  alt="Dropdown arrow"
                  className={styles.dropdownIcon}
                />
              </div>
            </li>

            <li className={styles.navItem}>
              <a
                href="/about"
                className={styles.navLink}
                onClick={(e) => e.preventDefault()}
              >
                About
              </a>
            </li>

            <li className={styles.navItem}>
              <a
                href="/contact"
                className={styles.navLink}
                onClick={(e) => e.preventDefault()}
              >
                Contact
              </a>
            </li>

            <li className={styles.navItem}>
              <a
                href="/pages"
                className={styles.navLink}
                onClick={(e) => e.preventDefault()}
              >
                Pages
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.userActions} aria-label="User actions">
          <a
            href="/login"
            className={styles.loginLink}
            onClick={(e) => e.preventDefault()}
          >
            <img src={userIcon} alt="User icon" className={styles.userIcon} />
            <span className={styles.login}>Login / Register</span>
          </a>

          <ul className={styles.iconList}>
            <li>
              <a
                href="/searchList"
                aria-label="Search"
                onClick={(e) => e.preventDefault()}
              >
                <img
                  src={searchIcon}
                  alt="Search"
                  className={styles.SearchIcon}
                />
              </a>
            </li>
            <li className={styles.iconWithBadge}>
              <a
                href="/notification"
                aria-label="Notification"
                onClick={(e) => e.preventDefault()}
              >
                <img src={notificationIcon} alt="Notification" />
                <img
                  src={oneIcon}
                  alt="New notification"
                  className={styles.NotificationIcon}
                />
              </a>
            </li>
            <li className={styles.iconWithBadge}>
              <a
                href="/likes"
                aria-label="Likes"
                onClick={(e) => e.preventDefault()}
              >
                <img src={heartIcon} alt="Heart" />
                <img src={oneIcon} alt="New like" className={styles.Icon} />
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.rightIcons}>
          <a
            href="/searchList"
            aria-label="Search"
            className={styles.searchIconDesktop}
            onClick={(e) => e.preventDefault()}
          >
            <FiSearch size={24} />
          </a>

          <a
            href="/cart"
            aria-label="Cart"
            className={styles.cartIconMobile}
            onClick={(e) => e.preventDefault()}
          >
            <img src={cartIcon} alt="Cart icon" />
          </a>
          <a
            href="/menu"
            aria-label="Menu"
            className={styles.menuIconMobile}
            onClick={(e) => e.preventDefault()}
          >
            <img src={menuIcon} alt="Menu icon" />
          </a>
        </div>
      </div>

      <div className={styles.mobileNav}>
        <a
          href="/home"
          onClick={(e) => e.preventDefault()}
          className={styles.Home}
        >
          Home
        </a>
        <a
          href="/product"
          onClick={(e) => e.preventDefault()}
          className={styles.Product}
        >
          Product
        </a>
        <a
          href="/pricing"
          onClick={(e) => e.preventDefault()}
          className={styles.Price}
        >
          Pricing
        </a>
        <a
          href="/contact"
          onClick={(e) => e.preventDefault()}
          className={styles.Contact}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Header;
