import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import BinPage from "./pages/BinPage/BinPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main className="main">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="home" element={<Navigate to="/" />} />
					<Route path="bin" element={<BinPage />} />
					<Route path="products" element={<InventoryPage />} />
					<Route path="products/add" element={<AddProductPage />} />
					<Route path="products/:id" element={<ProductDetailsPage />} />
					<Route path="products/:id/edit" element={<EditProductPage />} />
					<Route path="wishlist" element={<WishlistPage />} />
					<Route path="about" element={<AboutPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
