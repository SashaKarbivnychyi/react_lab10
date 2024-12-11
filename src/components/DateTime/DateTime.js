import {useEffect, useState} from "react";
import {connect} from "react-redux";
import { setDate } from "../../redux/reducers/datetimeSlice";
import styles from "./datetime.module.css";

function DateTime(props) {
	const { currentDate, setDate } = props;
	const date = new Date(currentDate);

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(new Date().toISOString());
		}, 1000);

		return () => clearInterval(interval);
	}, [setDate]);

	return (
		<p className={styles.datetime}>
			<CurrentDate date={date} /><br />
			<CurrentTime date={date} />
		</p>
	)
}

const CurrentDate = (props) => (
	<span>
		{props.date.toLocaleString("ua-UA", {
			weekday: "short",
			year: "2-digit",
			month: "long",
			day: "numeric",
		})}
	</span>
)

const CurrentTime = (props) => (
	<span>
		{props.date.toLocaleString("ua-UA", {
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hourCycle: "h24"
		})}
	</span>
)

const mapStateToProps = (state) => ({
	currentDate: state.datetime.currentDate,
});

const mapDispatchToProps = {
	setDate,
};

export default connect(mapStateToProps, mapDispatchToProps)(DateTime);