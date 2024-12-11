import styles from "./header.module.css";

import Logo from "../Logo/Logo";
import DateTime from "../DateTime/DateTime";

function Header(props) {
    return (
      <header className={styles.header}>
        <div className={styles.container}>
        <Logo />
      </div>
        <ul className={styles.headerMenu}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li><DateTime/></li>
        </ul>
      </header>
    );
  }
  
  export default Header;