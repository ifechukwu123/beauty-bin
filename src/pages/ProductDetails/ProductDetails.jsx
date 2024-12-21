import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import PageHeader from "../../components/PageHeader/PageHeader";

const url = import.meta.env.VITE_API_URL;
export default function ProductDetails({ jwtToken }) {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [fetched, setFetched] = useState(false);

	let navigate = useNavigate();

	const getProductDetails = async () => {
		try {
			const response = await axios.get(`${url}/products/${id}`, {
				headers: { Authorization: `Bearer ${jwtToken}` },
			});
			setProduct(response.data);
			setFetched(true);
		} catch (error) {
			if (error.status === 404) {
				navigate("/notFound");
			}
			if (error.status === 400 || error.status === 401) {
				navigate("/login");
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
		return <div>loading...</div>;
	}

	return (
		<main className="product-details">
			<PageHeader title="Product Details" />
			<div className="product-details__container">
				<ProductInfo product={product} jwtToken={jwtToken} />
			</div>
		</main>
	);
}
