import "./Status.scss";

export default function Status({ status }) {
	let color;

	if (status === "expiring") {
		color = "orange";
	} else if (status === "expired") {
		color = "red";
	} else {
		color = "green";
	}

	return (
		<div className={`status status--${color}`}>
			<div className={`status__icon status__icon--${color}`}></div>
			{status}
		</div>
	);
}
