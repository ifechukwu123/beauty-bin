import "./LoginPage.scss";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function LoginPage() {
	let navigate = useNavigate();

	function handleOnSubmit(values) {
		console.log(values);
	}

	function handleOnClick() {
		navigate("/signUp");
	}

	return (
		<main className="login">
			<h1>login</h1>
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={Yup.object({
					email: Yup.string()
						.email("Invalid email address")
						.required("Required"),
					password: Yup.string().trim().required("Required"),
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
								Sign Up
							</button>
							<button type="submit">Submit</button>
						</div>
					</form>
				)}
			</Formik>
		</main>
	);
}
