import axios from "axios";
import "./AddProductPage.scss";
import { useNavigate } from "react-router-dom";
import ProductForm from "../../components/ProductForm/ProductForm";

const url = import.meta.env.VITE_API_URL;

export default function AddProductPage() {
	let navigate = useNavigate();

	async function handleOnSubmit(values) {
		try {
			const response = await axios.post(`${url}/products`, values);
			navigate(`/products/${response.data.id}`);
		} catch (error) {
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
		<div className="addProduct">
			<ProductForm
				handleOnSubmit={handleOnSubmit}
				product={product}
				page="add"
			/>
		</div>
	);
}
