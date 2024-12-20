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

	const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
	const [profileOpen, setProfileOpen] = useState(false);
	const [user, setUser] = useState(null);

	console.log(content);
	const location = useLocation();
	const headerClassName =
		location.pathname === "/" ||
		location.pathname === "/login" ||
		location.pathname === "/signUp"
			? "header"
			: "header header--white";

	function handleSetMood() {
		const selectedMode = mode === "light" ? "dark" : "light";
		setMode(selectedMode);
		localStorage.setItem("mode", selectedMode);
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
					className="nav__icon nav__icon--menu"
				/>
				<Link to="/" className="nav__link nav__link--logo">
					<span className="nav__logo">Beauty Bin</span>
				</Link>
				<div className="nav__icon-container">
					<Link to="/wishlist" className="nav__link nav__link--star">
						<div className="nav__icon-wrapper">
							<img
								src={starIcon}
								alt="A star icon"
								className="nav__icon nav__icon--star"
							/>
						</div>
					</Link>

					<div className="nav__notification">
						<div className="nav__icon-wrapper">
							<img
								src={bellIcon}
								alt="An icon for a notification bell"
								className="nav__icon nav__icon--bell"
							/>
							<div className="nav__notification-status"></div>
						</div>
						{count}
					</div>

					<div className="nav__mode" onClick={handleSetMood}>
						<div className="nav__icon-wrapper">
							{mode === "light" ? (
								<img
									src={sunIcon}
									alt="An icon of a sun"
									className="nav__icon nav__icon--sun"
								/>
							) : (
								<img
									src={moonIcon}
									alt="An icon of a moon"
									className="nav__icon nav__icon--moon"
								/>
							)}
						</div>
					</div>

					<div className="nav__avatar-wrapper">
						<div className="nav__icon-wrapper" onClick={handleProfileOpen}>
							<img
								src={avatar}
								alt="An avatar icon"
								className="nav__icon nav__icon--avatar"
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
			</nav>
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
