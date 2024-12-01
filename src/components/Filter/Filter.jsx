import { useState } from "react";
import FilterItems from "../FilterItems/FilterItems";
import "./Filter.scss";

export default function Filter({ categories }) {
	const [selected, setSelected] = useState([]);
	const status = [
		{ id: 1, name: "expired" },
		{ id: 2, name: "expiring" },
		{ id: 3, name: "good" },
	];

	function handleOnClick() {
		setSelected([]);
	}
	return (
		<div className="filter">
			<FilterItems
				name="category"
				content={categories}
				selected={selected}
				setSelected={setSelected}
			/>
			<FilterItems
				name="status"
				content={status}
				selected={selected}
				setSelected={setSelected}
			/>

			{selected.length > 0 && (
				<div className="filter__reset" onClick={handleOnClick}>
					{" "}
					X Reset filters
				</div>
			)}
		</div>
	);
}
