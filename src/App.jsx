import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import AddProduct from "./pages/AddProduct/AddProduct";
import Wishlist from "./pages/Wishlist/Wishlist";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import EditProduct from "./pages/EditProduct/EditProduct";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { io } from "socket.io-client";

const url = import.meta.env.VITE_API_URL;
const socket = io(url);

function App() {
	const [counter, setCounter] = useState(""); //make this value persist with localStorage
	const [notifObject, setNotifObject] = useState({}); //make this value persist with localStorage
	const [jwtToken, setJwtToken] = useState(localStorage.getItem("jwtToken"));

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
			<Header
				count={counter}
				content={notifObject}
				jwtToken={jwtToken}
				setJwtToken={setJwtToken}
			/>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="home" element={<Navigate to="/" />} />
				<Route path="login" element={<Login setJwtToken={setJwtToken} />} />
				<Route path="signUp" element={<SignUp />} />
				<Route path="products" element={<Products jwtToken={jwtToken} />} />
				<Route
					path="products/add"
					element={<AddProduct jwtToken={jwtToken} />}
				/>
				<Route
					path="products/:id"
					element={<ProductDetails jwtToken={jwtToken} />}
				/>
				<Route
					path="products/:id/edit"
					element={<EditProduct jwtToken={jwtToken} />}
				/>
				<Route path="wishlist" element={<Wishlist jwtToken={jwtToken} />} />
				<Route path="about" element={<About />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
