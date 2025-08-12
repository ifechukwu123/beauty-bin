import { useNavigate } from "react-router-dom";
import "./SignUp.scss";
import axios from "axios";
import { useState } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

const url = import.meta.env.VITE_API_URL;

export default function SignUp() {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);

	let navigate = useNavigate();

	async function handleOnSubmit(values) {
		setError(null);
		const email = values.email.trim();
		const password = values.password.trim();

		try {
			await axios.post(`${url}/users/signUp`, {
				email,
				password,
			});
			setSuccess(true);

			setTimeout(() => {
				navigate("/login");
			}, 1500);
		} catch (error) {
			if (error.response.status === 400) {
				setError(error.response.data);
			}
			console.error(`Unable to Sign Up User: ${error}`);
		}
	}

	return (
		<main className="signUp">
			<AuthForm
				handleOnSubmit={handleOnSubmit}
				success={success}
				error={error}
				page="signUp"
			/>
		</main>
	);
}
