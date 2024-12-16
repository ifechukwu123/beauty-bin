import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import AddProductPage from "./pages/AddProductPage/AddProductPage";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { io } from "socket.io-client";

const url = import.meta.env.VITE_API_URL;
const socket = io(url);

function App() {
	const [counter, setCounter] = useState(""); //make this value persist with localStorage
	const [notifObject, setNotifObject] = useState({}); //make this value persist with localStorage
	const [token, setToken] = useState(localStorage.getItem("jwtToken"));

	useEffect(() => {
		socket.on("connect", () => {
			//console.log(socket.id);
		});
	}, []);

	socket.on("notification", (arg) => {
		setNotifObject(arg.message); // world
		setCounter(arg.count);
	});

	return (
		<BrowserRouter>
			<Header count={counter} content={notifObject} token={token} />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="home" element={<Navigate to="/" />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="signUp" element={<SignUpPage />} />
				<Route path="products" element={<InventoryPage />} />
				<Route path="products/add" element={<AddProductPage />} />
				<Route path="products/:id" element={<ProductDetailsPage />} />
				<Route path="products/:id/edit" element={<EditProductPage />} />
				<Route path="wishlist" element={<WishlistPage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
