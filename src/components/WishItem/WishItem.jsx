import "./WishItem.scss";

const url = import.meta.env.VITE_API_URL;

export default function WishItem({ wishlistItem }) {
	const { name, brand, image } = wishlistItem;

	async function handleOnClick() {
		console.log("Deleted");
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
