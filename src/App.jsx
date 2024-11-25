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

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="home" element={<Navigate to="/" />} />
				<Route path="bin" element={<BinPage />} />
				<Route path="products" element={<InventoryPage />} />
				<Route path="products/add" element={<AddProductPage />} />
				<Route path="products/:id" element={<ProductDetailsPage />} />
				<Route path="wishlist" element={<WishlistPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
