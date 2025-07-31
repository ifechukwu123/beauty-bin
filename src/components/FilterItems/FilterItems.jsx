import "./FilterItems.scss";
import downArrow from "../../assets/icons/arrow-single-down.svg";
import { useState } from "react";

export default function FilterItems({ name, content, setSelected, selected }) {
	const [expanded, setExpanded] = useState(true);

	function handleOnClick() {
		setExpanded(!expanded);
	}

	function handleSelect(name) {
		let found = selected.find((item) => item === name);

		if (!found) {
			setSelected([...selected, name]);
		} else {
			setSelected(selected.filter((item) => item !== name));
		}
	}

	return (
		<article className="filter-card">
			<div className="filter-card__header" onClick={handleOnClick}>
				<span className="filter-card__name">{name}</span>
				<img
					src={downArrow}
					alt="A down arrow icon"
					className={`filter-card__icon ${
						expanded === true && "filter-card__icon--flip"
					}`}
				/>
			</div>
			{expanded && (
				<ul className="filter-card__list">
					{content.map((item) => (
						<li
							key={item.id}
							className={
								selected.find((name) => name === item.name)
									? "filter-card__list-item filter-card__list-item--selected"
									: "filter-card__list-item"
							}
							onClick={() => handleSelect(item.name)}
						>
							{item.name}
						</li>
					))}
				</ul>
			)}
		</article>
	);
}
