import { useEffect, useState } from "react";
import "./InventoryPage.scss";
import axios from "axios";
import ProductList from "../../components/ProductList/ProductList";
import Filter from "../../components/Filter/Filter";
import PageHeader from "../../components/PageHeader/PageHeader";

const url = import.meta.env.VITE_API_URL;

export default function InventoryPage() {
	const [productList, setProductList] = useState([]);
	const [categories, setCategories] = useState([]);
	const [fetched, setFetched] = useState(false);

	const getProductsCategories = async () => {
		try {
			const products = await axios.get(`${url}/products`);
			setProductList(products.data);

			const categories = await axios.get(`${url}/categories`);
			setCategories(categories.data);
			setFetched(true);
		} catch (error) {
			console.error(`Unable to retrieve products & categories: ${error}`);
		}
	};

	useEffect(() => {
		getProductsCategories();
	}, []);

	if (!fetched) {
		return <div>Loading...</div>;
	}

	return (
		<div className="products">
			<PageHeader title="products" />
			<div className="products-wrapper">
				<Filter categories={categories} />
				<ProductList productList={productList} />
			</div>
		</div>
	);
}
