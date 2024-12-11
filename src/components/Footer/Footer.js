import styles from "./footer.module.css";

import Menu from "../Menu/Menu";
import { connect } from "react-redux";

function Footer(props) {
  const { menuItems, name } = props;

  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <h3>{name}</h3>
        <Menu
        view={"horizontal"}
        list={menuItems}
      />
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => ({
  menuItems: state.menu,
});

export default connect(mapStateToProps)(Footer);