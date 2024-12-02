import { Link, useLocation } from "react-router-dom";
import menuIcon from "../../assets/icons/menu.svg";
import starIcon from "../../assets/icons/star.svg";
import bellIcon from "../../assets/icons/bell.svg";
import avatar from "../../assets/icons/user-female.svg";
import "./Header.scss";

export default function Header({ count, content }) {
	console.log(content);
	const location = useLocation();
	const headerClassName =
		location.pathname === "/" ? "header" : "header header--white";

	return (
		<header className={headerClassName}>
			<nav className="nav">
				<img
					src={menuIcon}
					alt="A menu icon"
					className="header__icon header__icon--menu"
				/>
			</nav>
			<Link to="/" className="header__link header__link--logo">
				<span className="header__logo">Beauty Bin</span>
			</Link>

			<div className="header__icon-container">
				<Link to="/wishlist" className="header__link header__link--star">
					<img
						src={starIcon}
						alt="A star icon"
						className="header__icon header__icon--star"
					/>
				</Link>

				<div className="header__notification">
					<img
						src={bellIcon}
						alt="An icon for a notification bell"
						className="header__icon header__icon--bell"
					/>{" "}
					{count}
				</div>

				<div className="header__avatar-wrapper">
					<img
						src={avatar}
						alt="An avatar icon"
						className="header__icon header__icon--avatar"
					/>
				</div>
			</div>
		</header>
	);
}
