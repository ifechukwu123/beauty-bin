import "./DeleteModal.scss";

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
			<span onClick={handleClose}>X</span>
			<h1>Delete {name}?</h1>
			<p>
				Please confirm that you&apos;d like to delete {name} from your{" "}
				{type === "inventory" ? "inventory" : "wishlist"}. You won&apos;t be
				able to undo this action
			</p>
			<div>
				<button onClick={handleClose}>Cancel</button>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
}
