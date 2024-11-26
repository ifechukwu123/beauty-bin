import "./Header.scss";

export default function Header() {
	return (
		<header className="header">
			<nav>
				<ul>
					<li>Menu</li>
					<li>Beauty Bin logo</li>
					<li>Wishlist </li> {/* will be a heart icon */}
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
