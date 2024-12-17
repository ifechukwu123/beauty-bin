import { Link, useNavigate } from "react-router-dom";
import "./ProductDetails.scss";
import axios from "axios";
import DeleteModal from "../DeleteModal/DeleteModal";
import { useState } from "react";
import backArrow from "../../assets/icons/arrow-left.svg";
import editIcon from "../../assets/icons/pencil.svg";

const url = import.meta.env.VITE_API_URL;
export default function ProductDetails({ product, jwtToken }) {
	let navigate = useNavigate();
	const [show, setShow] = useState(false);
	const [inWishlist, setInWishlist] = useState(false);

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

	let today = new Date();
	let monthFromToday = new Date(today);
	monthFromToday.setMonth(today.getMonth() + 1);
	today = today.toISOString().split("T")[0];
	monthFromToday = monthFromToday.toISOString().split("T")[0];

	let expiryDate = product.expirationDate.split("T")[0];
	let color;

	if (expiryDate <= today) {
		color = "red";
	} else if (expiryDate <= monthFromToday) {
		color = "orange";
	} else {
		color = "green";
	}

	async function handleAddWish() {
		if (inWishlist) {
			return;
		}

		try {
			await axios.post(
				`${url}/wishlist`,
				{
					name,
					brand,
					image,
					id,
				},
				{
					headers: { Authorization: `Bearer ${jwtToken}` },
				}
			);

			setInWishlist(true);
		} catch (error) {
			console.error(`Unable to add product to wishlist: ${error}`);
		}
	}

	function handleShow() {
		setShow(!show);
	}

	async function handleDelete() {
		try {
			await axios.delete(`${url}/products/${id}`, {
				headers: { Authorization: `Bearer ${jwtToken}` },
			});
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
			<div className="productDetails-content">
				<div className="productDetails-container">
					<div
						className={`productDetails__image-wrapper productDetails__image-wrapper--${color}`}
					>
						<img
							src={`${url}${image}`}
							alt={`A picture of ${name} from ${brand} `}
							className="productDetails__image"
						/>
					</div>
					<div className="productDetails__info-container">
						<div className="productDetails__info">
							<h3 className="productDetails__title">Name</h3>
							<span className="productDetails__description">{name}</span>
						</div>
						<div className="productDetails__info">
							<h3 className="productDetails__title">Brand</h3>
							<span className="productDetails__description">{brand}</span>
						</div>
						<div className="productDetails__info">
							<h3 className="productDetails__title">Category</h3>
							<span className="productDetails__description">{category}</span>
						</div>
						<div className="productDetails__info">
							<h3 className="productDetails__title">Batch Number</h3>
							<span className="productDetails__description">{batchNumber}</span>
						</div>
						<div className="productDetails__info">
							<h3 className="productDetails__title">Date Opened</h3>
							<span className="productDetails__description">{dateOpened}</span>
						</div>
						<div className="productDetails__info">
							<h3 className="productDetails__title">Expiration Date</h3>
							<span
								className={`productDetails__description productDetails__description--${color}`}
							>
								{expirationDate}
							</span>
						</div>
					</div>
				</div>
				<div className="productDetails__button-container">
					<div
						onClick={handleAddWish}
						className={`productDetails__wishlist ${
							inWishlist ? "productDetails__wishlist--added" : ""
						}`}
					>
						{inWishlist ? "Added to wishlist" : "Add to wishlist"}
					</div>
					<button onClick={handleShow} className="productDetails__button">
						Delete
					</button>
				</div>
			</div>

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
