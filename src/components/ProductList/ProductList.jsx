import "./ProductList.scss";
import Product from "../Product/Product";

export default function ProductList({ productList }) {
	return (
		<ul className="products__list">
			{productList.map((product) => (
				<li key={product.id} className="products__item">
					<Product product={product} />
				</li>
			))}
		</ul>
	);
}
