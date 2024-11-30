import FilterItems from "../FilterItems/FilterItems";
import "./Filter.scss";

export default function Filter({ categories }) {
	const status = [
		{ id: 1, name: "expired" },
		{ id: 2, name: "expiring" },
		{ id: 3, name: "good" },
	];

	return (
		<div className="filter">
			<FilterItems name="category" content={categories} />
			<FilterItems name="status" content={status} />
		</div>
	);
}
