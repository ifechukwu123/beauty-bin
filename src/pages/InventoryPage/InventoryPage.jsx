import { useEffect, useState } from "react";
import "./InventoryPage.scss";
import axios from "axios";
import ProductList from "../../components/ProductList/ProductList";

const url = import.meta.env.VITE_API_URL;

export default function InventoryPage() {
	const [productList, setProductList] = useState([]);
	const [fetched, setFetched] = useState(false);

	const getProducts = async () => {
		try {
			const response = await axios.get(`${url}/products`);
			setProductList(response.data);
			setFetched(true);
		} catch (error) {
			console.error(`Unable to retrieve products: ${error}`);
		}
	};

	useEffect(() => {
		getProducts();
	}, []);

	if (!fetched) {
		return <div>Loading...</div>;
	}

	return (
		<div className="products">
			<h1>Inventory</h1>
			<ProductList productList={productList} />
		</div>
	);
}
