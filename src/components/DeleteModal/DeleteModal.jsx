import "./DeleteModal.scss";
import cancelIcon from "../../assets/icons/cross.svg";

export default function DeleteModal({
	name,
	type,
	show,
	handleDelete,
	handleClose,
}) {
	if (!show) {
		return null;
	}

	return (
		<div className="deleteModal">
			<img
				src={cancelIcon}
				alt="A cancel icon"
				className="deleteModal__icon"
				onClick={handleClose}
			/>
			<h1 className="deleteModal__title">Delete {name}?</h1>
			<p className="deleteModal__description">
				Please confirm that you&apos;d like to delete {name} from your{" "}
				{type === "inventory" ? "inventory" : "wishlist"}. You won&apos;t be
				able to undo this action
			</p>
			<div className="deleteModal__button-container">
				<button onClick={handleClose} className="deleteModal__button">
					Cancel
				</button>
				<button onClick={handleDelete} className="deleteModal__button">
					Delete
				</button>
			</div>
		</div>
	);
}
