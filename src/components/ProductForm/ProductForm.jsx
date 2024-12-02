import "./ProductForm.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import cancelIcon from "../../assets/icons/cross.svg";
import rightArrowIcon from "../../assets/icons/arrow-right.svg";
import { useState } from "react";

export default function ProductForm({ handleOnSubmit, product, page }) {
	let navigate = useNavigate();
	const [hoverButton, setHoverButton] = useState(false);

	function handleOnClick() {
		navigate(-1);
	}

	return (
		<div className="form-container">
			<div className="form__image-wrapper"></div>
			<Formik
				initialValues={{ ...product }}
				validationSchema={Yup.object({
					name: Yup.string().trim().required("Required"),
					brand: Yup.string().trim().required("Required"),
					batchNumber: Yup.string().trim().required("Required"),
					category: Yup.string()
						.oneOf(["face", "lips", "eye", "other"])
						.required("Required"),
					dateOpened: Yup.string().required("Required"),
					expirationDate: Yup.string().required("Required"), //add validation to make expiration date > than dateopened
				})}
				onSubmit={(values) => handleOnSubmit(values)}
			>
				{(formik) => (
					<form onSubmit={formik.handleSubmit} className="form">
						<img
							src={cancelIcon}
							alt="A cancel cross icon "
							className="form__icon form__icon--cross"
							onClick={handleOnClick}
						/>

						<FormField
							name="name"
							label="name"
							inputType="text"
							formik={formik}
						/>
						<FormField
							name="brand"
							label="brand"
							inputType="text"
							formik={formik}
						/>

						<FormField
							name="batchNumber"
							label="batch number"
							inputType="text"
							formik={formik}
						/>

						<div className="form__input-container">
							<label htmlFor="category" className="form__label">
								Category:
							</label>
							<div className="form__field-wrapper">
								<select
									name="category"
									id="category"
									className={
										formik.touched.category && formik.errors.category
											? "form__field form__field--error"
											: "form__field"
									}
									{...formik.getFieldProps("category")}
								>
									<option
										value=""
										selected
										disabled
										hidden
										className="form__option--hidden"
									>
										Choose here
									</option>
									<option value="face" className="form__option">
										Face
									</option>
									<option value="lips" className="form__option">
										Lips
									</option>
									<option value="eye" className="form__option">
										Eye
									</option>
									<option value="other" className="form__option">
										Other
									</option>
								</select>
								{formik.touched.category && formik.errors.category ? (
									<div className="form--error">{formik.errors.category}</div>
								) : null}
							</div>
						</div>

						<FormField
							name="dateOpened"
							label="date opened"
							inputType="date"
							formik={formik}
						/>

						<FormField
							name="expirationDate"
							label="expiration date"
							inputType="date"
							formik={formik}
						/>

						<div
							className="form__button-container"
							onMouseOver={() => {
								setHoverButton(true);
							}}
							onMouseLeave={() => setHoverButton(false)}
						>
							{hoverButton || (
								<span className="form__button-text">
									{page === "edit" ? "Save" : "Add"}
								</span>
							)}
							<button type="submit" className="form__button">
								<div
									className={`form__button-content ${
										hoverButton ? "form__button-content--active" : ""
									}`}
								>
									{hoverButton && (
										<span className="form__button-text">
											{page === "edit" ? "Save" : "Add"}
										</span>
									)}
									<img
										src={rightArrowIcon}
										alt="A right arrow icon"
										className="form__icon form__icon--arrow"
									/>
								</div>
							</button>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
}

function FormField({ name, label, inputType, formik }) {
	return (
		<div className="form__input-container">
			<label htmlFor={name} className="form__label">
				{`${label}:`}
			</label>{" "}
			<div className="form__field-wrapper">
				<input
					type={inputType}
					name={name}
					id={name}
					placeholder={`Enter ${label}`}
					className={
						formik.touched[name] && formik.errors[name]
							? "form__field form__field--error"
							: "form__field"
					}
					{...formik.getFieldProps(name)}
				/>
				{formik.touched[name] && formik.errors[name] ? (
					<div className="form--error">{formik.errors[name]}</div>
				) : null}
			</div>
		</div>
	);
}
