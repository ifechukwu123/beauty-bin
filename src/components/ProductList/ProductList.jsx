import "./ProductList.scss";
import Product from "../Product/Product";

export default function ProductList({ productList }) {
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

	return (
		<ul className="products__list">
			{newProductList.map((product) => (
				<li key={product.id} className="products__item">
					<Product product={product} />
				</li>
			))}
		</ul>
	);
}
