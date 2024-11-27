import { Link } from "react-router-dom";
import "./Product.scss";

const url = import.meta.env.VITE_API_URL;

export default function Product({ product }) {
	const { brand, image, id, name } = product;

	return (
		<article className="product-card">
			<Link to={`/products/${id}`}>
				<img
					className="product-card__image"
					src={`${url}${image}`}
					alt={`A picture or ${name} from ${brand}`}
				/>
				<div className="product-card__info">
					<h2>{brand}</h2>
					<span>{name}</span>
				</div>
			</Link>
		</article>
	);
}
