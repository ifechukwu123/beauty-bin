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
			<div className="deleteModal-container">
				<img
					src={cancelIcon}
					alt="A cancel icon"
					className="deleteModal__icon"
					onClick={handleClose}
				/>
				<div className="deleteModal-content">
					<h1 className="deleteModal__title">Delete {name}?</h1>
					<p className="deleteModal__description">
						Please confirm that you&apos;d like to delete {name} from your{" "}
						{type === "inventory" ? "inventory" : "wishlist"}. You won&apos;t be
						able to undo this action.
					</p>

					<button onClick={handleDelete} className="deleteModal__button">
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
