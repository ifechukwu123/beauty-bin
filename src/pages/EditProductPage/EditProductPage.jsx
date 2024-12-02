import { useParams, useNavigate } from "react-router-dom";
import "./EditProductPage.scss";
import ProductForm from "../../components/ProductForm/ProductForm";
import PageHeader from "../../components/PageHeader/PageHeader";
import axios from "axios";
import { useEffect, useState } from "react";

const url = import.meta.env.VITE_API_URL;
export default function EditProductPage() {
	const { id } = useParams();
	let navigate = useNavigate();

	const [product, setProduct] = useState([]);
	const [fetched, setFetched] = useState(false);

	async function handleOnSubmit(values) {
		try {
			const response = await axios.put(`${url}/products/${id}`, values);
			navigate(`/products/${response.data.id}`);
		} catch (error) {
			console.error(`Unable to add edit product: ${error}`);
		}
	}

	const getProductDetails = async () => {
		try {
			const response = await axios.get(`${url}/products/${id}`);
			setProduct(response.data);
			setFetched(true);
		} catch (error) {
			if (error.status === 404) {
				navigate("/notFound");
			}
			console.error(
				`Unable to retrieve details for product with id ${id}: ${error}`
			);
		}
	};

	useEffect(() => {
		getProductDetails();
	}, []);

	if (!fetched) {
		return <div>Loading ...</div>;
	}

	const newProduct = {
		name: product.name,
		brand: product.brand,
		batchNumber: product.batchNumber,
		category: product.category,
		dateOpened: new Date(product.dateOpened)
			.toISOString("YYYY-MM-DD")
			.split("T")[0],
		expirationDate: new Date(product.expirationDate)
			.toISOString("YYYY-MM-DD")
			.split("T")[0],
	};

	return (
		<div className="editProduct">
			<PageHeader title="edit product" />
			<div className="editProduct__form-container">
				<ProductForm
					handleOnSubmit={handleOnSubmit}
					product={newProduct}
					page="edit"
				/>
			</div>
		</div>
	);
}
