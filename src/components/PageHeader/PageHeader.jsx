import "./PageHeader.scss";

export default function PageHeader({ title }) {
	return (
		<div className="pageHeader">
			<h1 className="pageHeader__title">{title}</h1>
		</div>
	);
}
