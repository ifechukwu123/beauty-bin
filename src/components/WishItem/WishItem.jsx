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
		<>
			<article className="wishlistProduct-card">
				<img
					src={`${url}${image}`}
					alt={`A picture of ${name} from ${brand}`}
				/>
				<h2>{brand}</h2>
				<span>{name}</span>
				<button onClick={handleShow}>Delete</button>
			</article>
			<DeleteModal
				name={name}
				type="wishlist"
				show={show}
				handleDelete={handleDelete}
				handleClose={handleShow}
			/>
		</>
	);
}
