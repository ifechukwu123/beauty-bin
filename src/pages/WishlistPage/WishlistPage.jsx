import { useEffect, useState } from "react";
import "./WishlistPage.scss";
import axios from "axios";
import WishItem from "../../components/WishItem/WishItem";
import PageHeader from "../../components/PageHeader/PageHeader";

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
			<PageHeader title="wishlist" />
			<ul className="wishlist__list">
				{wishlist.map((wish) => (
					<li key={wish.id} className="wishlist__item">
						<WishItem wishlistItem={wish} getWishList={getWishList} />
					</li>
				))}
			</ul>
		</div>
	);
}
