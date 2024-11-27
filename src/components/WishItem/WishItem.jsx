import axios from "axios";
import "./WishItem.scss";

const url = import.meta.env.VITE_API_URL;

export default function WishItem({ wishlistItem, getWishList }) {
	const { name, brand, image, id } = wishlistItem;

	async function handleOnClick() {
		try {
			const response = await axios.delete(`${url}/wishlist/${id}`);

			if (response.status === 204) {
				getWishList();
			}
		} catch (error) {
			console.error(`Unable to delete wishlist item with id ${id}: ${error}`);
		}
	}
	return (
		<article className="wishlistProduct-card">
			<img src={`${url}${image}`} alt={`A picture of ${name} from ${brand}`} />
			<h2>{brand}</h2>
			<span>{name}</span>
			<button onClick={handleOnClick}>Delete</button>
		</article>
	);
}
