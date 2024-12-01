import { useParams } from "react-router-dom";
import "./ProductDetailsPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import PageHeader from "../../components/PageHeader/PageHeader";

const url = import.meta.env.VITE_API_URL;
export default function ProductDetailsPage() {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [fetched, setFetched] = useState(false);

	const getProductDetails = async () => {
		try {
			const response = await axios.get(`${url}/products/${id}`);
			setProduct(response.data);
			setFetched(true);
		} catch (error) {
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
		<div className="product-details">
			<PageHeader title="Product Details" />
			<div className="product-details__container">
				<ProductDetails product={product} />
			</div>
		</div>
	);
}
