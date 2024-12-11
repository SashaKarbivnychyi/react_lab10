import { useSelector } from "react-redux";
import styles from "./logo.module.css";

export default function Logo() {
	const logo = useSelector(state => state.logo);
	return (
		<a className={styles.logoWrapper} href={"/"}>
			<img src={logo} alt="Logo"/>
		</a>
	)
}