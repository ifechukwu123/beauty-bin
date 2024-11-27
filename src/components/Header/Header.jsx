import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
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
					<li>Notification</li> {/* will be a notification icon */}
					<li>
						<div></div>
						Ife Onuorah
					</li>
				</ul>
			</nav>
		</header>
	);
}
