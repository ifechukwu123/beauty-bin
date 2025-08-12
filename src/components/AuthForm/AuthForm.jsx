import "./AuthForm.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowLeft from "../../assets/icons/arrow-left-ash.svg";

export default function AuthForm({ handleOnSubmit, success, error, page }) {
	return (
		<div className="authForm-container">
			<div className="authForm__image-wrapper"></div>
			<div className="authForm__form-container">
				<h1 className="authForm__title">
					{page === "login" ? "login" : "sign up"}
				</h1>
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
						<form onSubmit={formik.handleSubmit} className="authForm">
							<div className="authForm__input-container">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									className={
										formik.touched.email && formik.errors.email
											? "authForm__field authForm__field--error"
											: "authForm__field"
									}
									{...formik.getFieldProps("email")}
								/>
								{formik.touched.email && formik.errors.email ? (
									<div className="authForm--error">{formik.errors.email}</div>
								) : null}
							</div>

							<div className="authForm__input-container">
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									className={
										formik.touched.password && formik.errors.password
											? "authForm__field authForm__field--error"
											: "authForm__field"
									}
									{...formik.getFieldProps("password")}
								/>
								{formik.touched.password && formik.errors.password ? (
									<div className="authForm--error">
										{formik.errors.password}
									</div>
								) : null}
							</div>
							<div className="authForm__button-container">
								<Link
									to={page === "login" ? "/signUp" : "/login"}
									className="authForm__link"
								>
									<img
										src={arrowLeft}
										alt="An icon of a left arrow"
										className="authForm__icon authForm__icon--left"
									/>
									<span className="authForm__link-name">
										{" "}
										{page === "login" ? "sign up" : "login"}
									</span>
								</Link>
								<button type="submit" className="authForm__button">
									<img
										src={arrowRight}
										alt="An icon of a right arrow"
										className="authForm__icon"
									/>
								</button>
							</div>
						</form>
					)}
				</Formik>
				{success &&
					(page === "login" ? (
						<p className="authForm__message authForm__message--success">
							Login is successful!
						</p>
					) : (
						<p className="authForm__message">Sign up is successful!</p>
					))}
				{error && (
					<p className="authForm__message authForm__message--error">{error}</p>
				)}
			</div>
		</div>
	);
}
