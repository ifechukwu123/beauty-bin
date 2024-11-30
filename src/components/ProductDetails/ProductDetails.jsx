import { Link, useNavigate } from "react-router-dom";
import "./ProductDetails.scss";
import axios from "axios";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";
import backArrow from "../../assets/icons/arrow-left.svg";
import editIcon from "../../assets/icons/pencil.svg";

const url = import.meta.env.VITE_API_URL;
export default function ProductDetails({ product }) {
	let navigate = useNavigate();
	const [show, setShow] = useState(false);

	let {
		batchNumber,
		brand,
		category,
		dateOpened,
		expirationDate,
		id,
		image,
		name,
	} = product;

	dateOpened = new Date(dateOpened).toDateString();
	expirationDate = new Date(expirationDate).toDateString();

	async function handleAddWish() {
		try {
			await axios.post(`${url}/wishlist`, {
				name,
				brand,
				image,
			});
			//Modal to show that it was added to wishlist or something. Maybe change the button to reflect "Added to wishlist"
		} catch (error) {
			console.error(`Unable to add product to wishlist: ${error}`);
		}
	}

	function handleShow() {
		setShow(!show);
	}

	async function handleDelete() {
		try {
			await axios.delete(`${url}/products/${id}`);
			handleShow();
			navigate("/products");
		} catch (error) {
			console.error(`Unable to delete product from inventory: ${error}`);
		}
	}

	return (
		<article className="productDetails">
			<div className="productDetails__header">
				<Link to="/products">
					<img
						src={backArrow}
						alt="A back arrow icon"
						className="productDetails__icon"
					/>
				</Link>
				<Link to={`/products/${id}/edit`}>
					<img
						src={editIcon}
						alt="An edit pencil icon"
						className="productDetails__icon"
					/>
				</Link>
			</div>
			<div className="productDetails__info-container">
				<img
					src={`${url}${image}`}
					alt={`A picture of ${name} from ${brand} `}
				/>
				<div className="productDetails__info">
					<div>
						<h3>Name</h3>
						<span>{name}</span>
					</div>
					<div>
						<h3>Brand</h3>
						<span>{brand}</span>
					</div>
					<div>
						<h3>Category</h3>
						<span>{category}</span>
					</div>
					<div>
						<h3>Batch Number</h3>
						<span>{batchNumber}</span>
					</div>
					<div>
						<h3>Date Opened</h3>
						<span>{dateOpened}</span>
					</div>
					<div>
						<h3>Expiration Date</h3>
						<span>{expirationDate}</span>
					</div>
				</div>
			</div>
			<button onClick={handleAddWish}>Add to wishlist</button>
			<button onClick={handleShow}>Delete</button>

			<DeleteModal
				name={name}
				type="inventory"
				show={show}
				handleDelete={handleDelete}
				handleClose={handleShow}
			/>
		</article>
	);
}
