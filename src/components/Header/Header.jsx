import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header({ count, content }) {
	console.log(content);
	return (
		<header className="header">
			<nav>
				<ul>
					<li>Menu</li>
					<li>
						<Link to="/">Beauty Bin logo</Link>
					</li>
					<li>
						<Link to="/wishlist">Wishlist</Link>{" "}
					</li>{" "}
					{/* will be a heart icon */}
					<li>Notification {count}</li> {/* will be a notification icon */}
					<li>
						<div></div>
						Ife Onuorah
					</li>
				</ul>
			</nav>
		</header>
	);
}
