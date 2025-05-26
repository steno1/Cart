import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.footerSection1}>
          <h5 className={styles.footerHeading}>Company Info</h5>
          <a href="#" className={styles.footerLinkAboutUs}>
            About Us
          </a>
          <a href="#" className={styles.footerLinkCareer}>
            Career
          </a>
          <a href="#" className={styles.footerLinkHiring}>
            We are hiring
          </a>
          <a href="#" className={styles.footerLinkBlog}>
            Blog
          </a>
        </div>

        <div className={styles.footerSection2}>
          <h5 className={styles.footerHeading}>Legal</h5>
          <a href="#" className={styles.footerLinkAboutUs}>
            About Us
          </a>
          <a href="#" className={styles.footerLinkCareer}>
            Career
          </a>
          <a href="#" className={styles.footerLinkHiring}>
            We are hiring
          </a>
          <a href="#" className={styles.footerLinkBlog}>
            Blog
          </a>
        </div>

        <div className={styles.footerSection3}>
          <h5 className={styles.footerHeading}>Features</h5>
          <a href="#" className={styles.footerLinkMarket}>
            Business Marketing
          </a>
          <a href="#" className={styles.footerLinkAnalytic}>
            User Analytic
          </a>
          <a href="#" className={styles.footerLinkChat}>
            Live Chat
          </a>
          <a href="#" className={styles.footerLinkSupport}>
            Unlimited Support
          </a>
        </div>

        <div className={styles.footerSection4}>
          <h5 className={styles.footerHeading}>Resources</h5>
          <a href="#" className={styles.footerLinkGadget}>
            IOS & Android
          </a>
          <a href="#" className={styles.footerLinkDemo}>
            Watch a Demo
          </a>
          <a href="#" className={styles.footerLinkCustomer}>
            Customers
          </a>
          <a href="#" className={styles.footerLinkApi}>
            API
          </a>
        </div>
        <div className={styles.footerSection5}>
          <h5 className={styles.footerHeading}>Get In Touch</h5>
          <div className={styles.formControl}>
            <input
              type="email"
              className={styles.inputStyle}
              placeholder="Your Email"
            />
            <button className={styles.subscribeButton}>Subscribe</button>
          </div>
          <p className={styles.footerNote}>Lore imp sum dolor Amit</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        Made With Love By Finland All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
