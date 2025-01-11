import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Wishlist.scss";
import axios from "axios";
import WishItem from "../../components/WishItem/WishItem";
import PageHeader from "../../components/PageHeader/PageHeader";

const url = import.meta.env.VITE_API_URL;

export default function Wishlist({ jwtToken }) {
	const [wishlist, setWishlist] = useState([]);
	const [fetched, setFetched] = useState(false);
	const [error, setError] = useState(null);

	let navigate = useNavigate();

	const handleSignIn = () => {
		navigate("/login");
	};

	const getWishList = async () => {
		try {
			const response = await axios.get(`${url}/wishlist`, {
				headers: { Authorization: `Bearer ${jwtToken}` },
			});
			setWishlist(response.data);
			setFetched(true);
		} catch (error) {
			if (error.status === 400 || error.status === 401) {
				setError(true);
				setFetched(true);
			}
			console.error(`Unable to retrieve wishlist: ${error}`);
		}
	};

	useEffect(() => {
		getWishList();
	}, []);

	if (!fetched) {
		return <div>Loading...</div>;
	}

	return (
		<main className="wishlist">
			<PageHeader title="wishlist" />
			<div className="wishlist-wrapper">
				{error ? (
					<div className="wishlist__error">
						<p className="wishlist__error-message">
							{" "}
							<span className="wishlist__error--bold">
								You need to login to see this page.
							</span>{" "}
							<br />
							Login to view all the saved items in your wishlist.
						</p>
						<button className="wishlist__error-button" onClick={handleSignIn}>
							Login
						</button>
					</div>
				) : (
					<ul className="wishlist__list">
						{wishlist.map((wish) => (
							<li key={wish.id} className="wishlist__item">
								<WishItem
									wishlistItem={wish}
									getWishList={getWishList}
									jwtToken={jwtToken}
								/>
							</li>
						))}
					</ul>
				)}
			</div>
		</main>
	);
}
