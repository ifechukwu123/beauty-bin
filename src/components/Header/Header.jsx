import { Link, useLocation, useNavigate } from "react-router-dom";
import menuIcon from "../../assets/icons/menu.svg";
import starIcon from "../../assets/icons/star.svg";
import bellIcon from "../../assets/icons/bell.svg";
import sunIcon from "../../assets/icons/sun.svg";
import moonIcon from "../../assets/icons/night.svg";
import avatar from "../../assets/icons/user-female.svg";
import "./Header.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export default function Header({ count, content, jwtToken, setJwtToken }) {
	let navigate = useNavigate();

	const [isLightMode, setIsLightMode] = useState(true);
	const [profileOpen, setProfileOpen] = useState(false);
	const [user, setUser] = useState(null);

	console.log(content);
	const location = useLocation();
	const headerClassName =
		location.pathname === "/" ? "header" : "header header--white";

	function handleSetMood() {
		setIsLightMode(!isLightMode);
	}

	function handleProfileOpen() {
		setProfileOpen(!profileOpen);
	}

	useEffect(() => {
		async function getUserProfile() {
			if (jwtToken) {
				try {
					const response = await axios.get(`${url}/users/profile`, {
						headers: { Authorization: `Bearer ${jwtToken}` },
					});
					setUser(response.data);
				} catch (error) {
					console.error(`Unable to retrieve user profile: ${error}`);
				}
			} else {
				setUser(null);
			}
		}
		getUserProfile();
	}, [jwtToken]);

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
					<div className="header__icon-wrapper">
						<img
							src={starIcon}
							alt="A star icon"
							className="header__icon header__icon--star"
						/>
					</div>
				</Link>

				<div className="header__notification">
					<div className="header__icon-wrapper">
						<img
							src={bellIcon}
							alt="An icon for a notification bell"
							className="header__icon header__icon--bell"
						/>
						<div className="header__notification-status"></div>
					</div>
					{count}
				</div>

				<div className="header__mode" onClick={handleSetMood}>
					<div className="header__icon-wrapper">
						{isLightMode && (
							<img
								src={sunIcon}
								alt="An icon of a sun"
								className="header__icon header__icon--sun"
							/>
						)}
						{isLightMode || (
							<img
								src={moonIcon}
								alt="An icon of a moon"
								className="header__icon header__icon--moon"
							/>
						)}
					</div>
				</div>

				<div className="header__avatar-wrapper">
					<div className="header__icon-wrapper" onClick={handleProfileOpen}>
						<img
							src={avatar}
							alt="An avatar icon"
							className="header__icon header__icon--avatar"
						/>
						{profileOpen && (
							<ProfileOptions
								user={user}
								setJwtToken={setJwtToken}
								navigate={navigate}
							/>
						)}
					</div>
				</div>
			</div>
		</header>
	);
}

function ProfileOptions({ user, setJwtToken, navigate }) {
	function handleLogout() {
		setJwtToken(null);
		localStorage.removeItem("jwtToken");
		navigate("/");
	}

	return (
		<div className="profile">
			<ul className="profile__list">
				{user ? (
					<li className="profile__item" onClick={handleLogout}>
						Log Out
					</li>
				) : (
					<>
						<li className="profile__item">
							<Link to="/signUp" className="profile__link">
								Sign Up
							</Link>
						</li>

						<li className="profile__item">
							<Link to="/login" className="profile__link">
								Log In
							</Link>
						</li>
					</>
				)}
			</ul>
		</div>
	);
}
