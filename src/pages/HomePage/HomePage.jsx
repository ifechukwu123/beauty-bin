import { Link } from "react-router-dom";
import "./HomePage.scss";

export default function HomePage() {
	return (
		<div className="homepage">
			<Link to="products">products</Link>
			<Link to="products/add">add new</Link>
			<Link to="wishlist">Wishlist</Link>
			<Link to="about">About</Link>
		</div>
	);
}
