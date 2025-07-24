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
		<div
			className="deleteModal"
			role="dialog"
			aria-labelledby="dialogTitle"
			aria-describedby="dialog1Desc"
		>
			{/* It is important for developers to ensure that content outside of the modal dialog is inaccessible to all users while the modal dialog is active. */}
			<div className="deleteModal-container">
				<img
					src={cancelIcon}
					alt="A cancel icon"
					className="deleteModal__icon"
					onClick={handleClose}
				/>
				<div className="deleteModal-content">
					<h1 id="dialogTitle" className="deleteModal__title">
						Delete {name}?
					</h1>
					<p id="dialog1Desc" className="deleteModal__description">
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
