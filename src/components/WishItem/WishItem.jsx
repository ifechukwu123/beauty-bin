import axios from "axios";
import "./WishItem.scss";
import { useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import deleteIcon from "../../assets/icons/delete.svg";

const url = import.meta.env.VITE_API_URL;

export default function WishItem({ wishlistItem, getWishList, jwtToken }) {
	const [show, setShow] = useState(false);
	const { name, brand, image, id } = wishlistItem;

	async function handleDelete() {
		try {
			const response = await axios.delete(`${url}/wishlist/${id}`, {
				headers: { Authorization: `Bearer ${jwtToken}` },
			});

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
			<div className="wishlistProduct-card__info-container">
				<img
					src={`${url}${image}`}
					alt={`A picture of ${name} from ${brand}`}
					className="wishlistProduct-card__image"
				/>
				<div className="wishlistProduct-card__info">
					<h2 className="wishlistProduct-card__name">{name}</h2>
					<span className="wishlistProduct-card__brand">{brand}</span>
				</div>
			</div>

			<img
				src={deleteIcon}
				alt="A delete garbage icon"
				onClick={handleShow}
				className="wishlistProduct-card__icon"
			/>
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
