import FilterItems from "../FilterItems/FilterItems";
import "./Filter.scss";

export default function Filter({
	categories,
	statusFilter,
	setStatusFilter,
	categoryFilter,
	setCategoryFilter,
}) {
	const status = [
		{ id: 1, name: "expired" },
		{ id: 2, name: "expiring" },
		{ id: 3, name: "good" },
	];

	function handleOnClick() {
		setStatusFilter([]);
		setCategoryFilter([]);
	}
	return (
		<div className="filter">
			<FilterItems
				name="category"
				content={categories}
				selected={categoryFilter}
				setSelected={setCategoryFilter}
			/>
			<FilterItems
				name="status"
				content={status}
				selected={statusFilter}
				setSelected={setStatusFilter}
			/>

			{statusFilter.length + categoryFilter.length > 0 && (
				<button className="filter__reset" onClick={handleOnClick}>
					{" "}
					x Reset filters
				</button>
			)}
		</div>
	);
}
