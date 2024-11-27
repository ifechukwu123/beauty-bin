import { Link } from "react-router-dom";
import "./ProductDetails.scss";
import axios from "axios";

const url = import.meta.env.VITE_API_URL;
export default function ProductDetails({ product }) {
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

	async function handleOnClick() {
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

	return (
		<article className="productDetails">
			<div className="productDetails__header">
				<Link to="/products">Back</Link>
				<Link to={`/products/${id}/edit`}>Edit</Link>
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
			<button onClick={handleOnClick}>Add to wishlist</button>
		</article>
	);
}
