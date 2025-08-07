import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow-right.svg";
import "./Product.scss";
import Status from "../Status/Status";

const url = import.meta.env.VITE_API_URL;

export default function Product({ product }) {
	const { brand, image, id, name, status } = product;

	return (
		<article className="product-card">
			<Status status={status} />
			<div className="product-card__info-container">
				<img
					className="product-card__image"
					src={`${url}${image}`}
					alt={`A picture or ${name} from ${brand}`}
				/>
				<div className="product-card__info">
					<h2 className="product-card__name">{name}</h2>
					<h3 className="product-card__brand">{brand}</h3>
				</div>
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
