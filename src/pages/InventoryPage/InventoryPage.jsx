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
	const [statusFilter, setStatusFilter] = useState([]);
	const [categoryFilter, setCategoryFilter] = useState([]);

	//make state to hide the filter
	//make everything stick except the products

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

	const newProductList = setProductStatus(productList);

	let filteredProductList = newProductList;
	if (statusFilter.length > 0 && categoryFilter.length > 0) {
		filteredProductList = newProductList.filter(
			(product) =>
				statusFilter.includes(product.status) &&
				categoryFilter.includes(product.category)
		);
	} else if (statusFilter.length > 0) {
		filteredProductList = newProductList.filter((product) =>
			statusFilter.includes(product.status)
		);
	} else if (categoryFilter.length > 0) {
		filteredProductList = newProductList.filter((product) =>
			categoryFilter.includes(product.category)
		);
	}

	return (
		<main className="products">
			<PageHeader title="inventory" />
			<div className="products-wrapper">
				<Filter
					categories={categories}
					statusFilter={statusFilter}
					setStatusFilter={setStatusFilter}
					categoryFilter={categoryFilter}
					setCategoryFilter={setCategoryFilter}
				/>
				<ProductList productList={filteredProductList} />
			</div>
		</main>
	);
}

function setProductStatus(productList) {
	let today = new Date();
	let monthFromToday = new Date(today);
	monthFromToday.setMonth(today.getMonth() + 1);
	today = today.toISOString().split("T")[0];
	monthFromToday = monthFromToday.toISOString().split("T")[0];

	const newProductList = productList.map((product) => {
		let expiryDate = product.expirationDate.split("T")[0];

		if (expiryDate <= today) {
			return { ...product, status: "expired" };
		} else if (expiryDate <= monthFromToday) {
			return { ...product, status: "expiring" };
		} else {
			return { ...product, status: "good" };
		}
	});

	return newProductList;
}
