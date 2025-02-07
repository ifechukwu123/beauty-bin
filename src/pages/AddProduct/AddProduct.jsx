import axios from "axios";
import "./AddProduct.scss";
import { useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import ProductForm from "../../components/ProductForm/ProductForm";

const url = import.meta.env.VITE_API_URL;

export default function AddProduct({ jwtToken }) {
	let navigate = useNavigate();

	async function handleOnSubmit(values) {
		try {
			const response = await axios.post(`${url}/products`, values, {
				headers: { Authorization: `Bearer ${jwtToken}` },
			});
			navigate(`/products/${response.data.id}`);
		} catch (error) {
			if (error.status === 400 || error.status === 401) {
				navigate("/login");
			}
			console.error(`Unable to add new product: ${error}`);
		}
	}

	const product = {
		name: "",
		brand: "",
		batchNumber: "",
		category: "",
		dateOpened: "",
		expirationDate: "",
	};

	return (
		<main className="addProduct">
			<PageHeader title="add a new product" />
			<div className="addProduct__form-container">
				<ProductForm
					handleOnSubmit={handleOnSubmit}
					product={product}
					page="add"
				/>
			</div>
		</main>
	);
}
