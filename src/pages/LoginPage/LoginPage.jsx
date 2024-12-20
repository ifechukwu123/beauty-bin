import axios from "axios";
import "./LoginPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "../../components/UserForm/UserForm";

const url = import.meta.env.VITE_API_URL;

export default function LoginPage({ setJwtToken }) {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);
	let navigate = useNavigate();

	async function handleOnSubmit(values) {
		setError(null);
		const email = values.email.trim();
		const password = values.password.trim();

		try {
			const response = await axios.post(`${url}/users/login`, {
				email,
				password,
			});
			setSuccess(true);
			setJwtToken(response.data.jwtToken);
			localStorage.setItem("jwtToken", response.data.jwtToken);

			setTimeout(() => {
				navigate("/");
			}, 1500);
		} catch (error) {
			if (error.status === 404 || error.status === 401) {
				setError(error.response.data.message);
			}

			console.error(`Unable to log in user: ${error}`);
		}
	}

	return (
		<main className="login">
			<UserForm
				handleOnSubmit={handleOnSubmit}
				success={success}
				error={error}
				page="login"
			/>
		</main>
	);
}
