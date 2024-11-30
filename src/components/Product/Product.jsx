import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow-right.svg";
import "./Product.scss";

const url = import.meta.env.VITE_API_URL;

export default function Product({ product }) {
	const { brand, image, id, name } = product;

	return (
		<article className="product-card">
			<img
				className="product-card__image"
				src={`${url}${image}`}
				alt={`A picture or ${name} from ${brand}`}
			/>
			<div className="product-card__info">
				<h2 className="product-card__name">{name}</h2>
				<span className="product-card__brand">{brand}</span>
			</div>
			<Link to={`/products/${id}`} className="product-card__link">
				<div className="product-card__icon-wrapper">
					<img
						src={arrowRight}
						alt="An icon of a right arrow"
						className="product-card__icon"
					/>
				</div>
			</Link>
		</article>
	);
}
