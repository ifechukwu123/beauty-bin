import { useEffect, useState } from "react";
import "./WishlistPage.scss";
import axios from "axios";
import WishItem from "../../components/WishItem/WishItem";

const url = import.meta.env.VITE_API_URL;

export default function WishlistPage() {
	const [wishlist, setWishlist] = useState([]);
	const [fetched, setFetched] = useState(false);

	const getWishList = async () => {
		try {
			const response = await axios.get(`${url}/wishlist`);
			setWishlist(response.data);
			setFetched(true);
		} catch (error) {
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
		<div className="wishlist">
			<h1 className="wishlist__title">Wishlist</h1>
			<ul className="wishlist__list">
				{wishlist.map((wish) => (
					<WishItem
						key={wish.id}
						wishlistItem={wish}
						getWishList={getWishList}
					/>
				))}
			</ul>
		</div>
	);
}
