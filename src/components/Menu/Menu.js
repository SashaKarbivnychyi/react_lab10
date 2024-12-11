import styles from "./menu.module.css";

import MenuItem from "../MenuItem/MenuItem";

import { usePathname } from 'next/navigation'

export default function Menu(props) {
  return (
    <ul className={props.view === "horizontal" ? styles.horizontal : styles.vertical}>
      {props.list.map((x, i) => (
        <MenuItem
          text={x.text}
          url={x.url}
          target={usePathname() === x.url ? "_self" : "_blank"}
          key={i}
        />
      ))}
    </ul>
  );
}