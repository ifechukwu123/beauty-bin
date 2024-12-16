import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./SignUpPage.scss";
import axios from "axios";
import { useState } from "react";

const url = import.meta.env.VITE_API_URL;

export default function SignUpPage() {
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

	function handleOnClick() {
		navigate("/login");
	}
	return (
		<main className="signUp">
			<h1>Sign Up</h1>
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={Yup.object({
					email: Yup.string()
						.email("Invalid email address")
						.required("Required"),
					password: Yup.string()
						.test(
							"no-empty-password",
							"Password can not be just spaces",
							(value) => value && value.trim().length > 0
						)
						.required("Required"),
				})}
				onSubmit={(values) => handleOnSubmit(values)}
			>
				{(formik) => (
					<form onSubmit={formik.handleSubmit}>
						<div className="form__input-container">
							<label htmlFor="email" className="form__label">
								Email:
							</label>{" "}
							<div className="form__field-wrapper">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Enter email..."
									className={
										formik.touched.email && formik.errors.email
											? "form__field form__field--error"
											: "form__field"
									}
									{...formik.getFieldProps("email")}
								/>
								{formik.touched.email && formik.errors.email ? (
									<div className="form--error">{formik.errors.email}</div>
								) : null}
							</div>
						</div>
						<div className="form__input-container">
							<label htmlFor="password" className="form__label">
								Password:
							</label>{" "}
							<div className="form__field-wrapper">
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Enter password..."
									className={
										formik.touched.password && formik.errors.password
											? "form__field form__field--error"
											: "form__field"
									}
									{...formik.getFieldProps("password")}
								/>
								{formik.touched.password && formik.errors.password ? (
									<div className="form--error">{formik.errors.password}</div>
								) : null}
							</div>
							<button type="button" onClick={handleOnClick}>
								Log In
							</button>
							<button type="submit">Submit</button>
						</div>
					</form>
				)}
			</Formik>
			{success && <p>Sign up is successful!</p>}
			{error && <p>{error}</p>}
		</main>
	);
}
