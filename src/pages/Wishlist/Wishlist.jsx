import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Wishlist.scss";
import axios from "axios";
import WishItem from "../../components/WishItem/WishItem";
import PageHeader from "../../components/PageHeader/PageHeader";

const url = import.meta.env.VITE_API_URL;

export default function Wishlist({ jwtToken }) {
	const [wishlist, setWishlist] = useState([]);
	const [fetched, setFetched] = useState(false);
	const [error, setError] = useState(null);

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
			{error ? (
				<div>
					<Link to="/login">Log in</Link> or <Link to="/signUp">Sign up </Link>
					to see products
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
		</main>
	);
}
