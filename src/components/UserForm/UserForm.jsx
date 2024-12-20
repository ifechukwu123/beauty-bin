import "./UserForm.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/icons/arrow-right.svg";
import arrowLeft from "../../assets/icons/arrow-left.svg";

export default function UserForm({ handleOnSubmit, success, error, page }) {
	return (
		<div className="userForm-container">
			<div className="userForm__image-wrapper"></div>
			<div className="userForm__form-container">
				<h1 className="userForm__title">
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
						<form onSubmit={formik.handleSubmit} className="userForm">
							<div className="userForm__input-container">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									className={
										formik.touched.email && formik.errors.email
											? "userForm__field userForm__field--error"
											: "userForm__field"
									}
									{...formik.getFieldProps("email")}
								/>
								{formik.touched.email && formik.errors.email ? (
									<div className="userForm--error">{formik.errors.email}</div>
								) : null}
							</div>

							<div className="userForm__input-container">
								<input
									type="password"
									name="password"
									id="password"
									placeholder="Password"
									className={
										formik.touched.password && formik.errors.password
											? "userForm__field userForm__field--error"
											: "userForm__field"
									}
									{...formik.getFieldProps("password")}
								/>
								{formik.touched.password && formik.errors.password ? (
									<div className="userForm--error">
										{formik.errors.password}
									</div>
								) : null}
							</div>
							<div className="userForm__button-container">
								<Link
									to={page === "login" ? "/signUp" : "/login"}
									className="userForm__link"
								>
									<img
										src={arrowLeft}
										alt="An icon of a left arrow"
										className="userForm__icon"
									/>
									<span className="userForm__link-name">
										{" "}
										{page === "login" ? "sign up" : "login"}
									</span>
								</Link>
								<button type="submit" className="userForm__button">
									<div className="userForm__icon-wrapper">
										<img
											src={arrowRight}
											alt="An icon of a right arrow"
											className="userForm__icon"
										/>
									</div>
								</button>
							</div>
						</form>
					)}
				</Formik>
				{success &&
					(page === "login" ? (
						<p>Login is successful!</p>
					) : (
						<p>Sign up is successful!</p>
					))}
				{error && <p>{error}</p>}
			</div>
		</div>
	);
}
