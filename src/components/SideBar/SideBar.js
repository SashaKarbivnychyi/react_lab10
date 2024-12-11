import styles from "./sidebar.module.css";

import Menu from "../Menu/Menu";

import { connect } from "react-redux";

function SideBar(props) {
  const { menuItems, name } = props;
  return (
    <aside className={styles.sidebar}>
      <h3>{props.name}</h3>
      <Menu
        view={"vertical"}
        list={menuItems}
      />
    </aside>
  );
}

const mapStateToProps = (state) => ({
  menuItems: state.menu,
});

export default connect(mapStateToProps)(SideBar);