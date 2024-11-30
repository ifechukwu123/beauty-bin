import { Link } from "react-router-dom";
import menuIcon from "../../assets/icons/menu.svg";
import heartIcon from "../../assets/icons/heart.svg";
import bellIcon from "../../assets/icons/bell.svg";
import avatar from "../../assets/icons/user-female.svg";
import "./Header.scss";

export default function Header({ count, content }) {
	console.log(content);
	return (
		<header className="header">
			<nav className="nav">
				<div className="nav__menu">
					<img src={menuIcon} alt="A menu icon" className="nav__icon" />
				</div>

				<Link to="/" className="nav__link">
					<span className="nav__logo">Beauty Bin</span>
				</Link>

				<div className="nav__notification">
					<Link to="/wishlist" className="nav__link">
						<img src={heartIcon} alt="A heart icon" className="nav__icon" />
					</Link>

					<div>
						<img
							src={bellIcon}
							alt="An icon for a notification bell"
							className="nav__icon"
						/>{" "}
						{count}
					</div>
					<div className="nav__avatar">
						<div className="nav__avatar-wrapper">
							<img src={avatar} alt="An avatar icon" className="nav__icon" />
						</div>

						<span>Hi Ife!</span>
					</div>
				</div>
			</nav>
		</header>
	);
}
