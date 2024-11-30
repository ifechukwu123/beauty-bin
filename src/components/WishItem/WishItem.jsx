import axios from "axios";
import "./WishItem.scss";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";

const url = import.meta.env.VITE_API_URL;

export default function WishItem({ wishlistItem, getWishList }) {
	const [show, setShow] = useState(false);
	const { name, brand, image, id } = wishlistItem;

	async function handleDelete() {
		try {
			const response = await axios.delete(`${url}/wishlist/${id}`);

			if (response.status === 204) {
				getWishList();
				setShow(!show);
			}
		} catch (error) {
			console.error(`Unable to delete wishlist item with id ${id}: ${error}`);
		}
	}
	function handleShow() {
		setShow(!show);
	}

	return (
		<article className="wishlistProduct-card">
			<img
				src={`${url}${image}`}
				alt={`A picture of ${name} from ${brand}`}
				className="wishlistProduct-card__image"
			/>
			<h2 className="wishlistProduct-card__title">{brand}</h2>
			<span className="wishlistProduct-card__name">{name}</span>
			<button onClick={handleShow}>Delete</button>
			<DeleteModal
				name={name}
				type="wishlist"
				show={show}
				handleDelete={handleDelete}
				handleClose={handleShow}
			/>
		</article>
	);
}
