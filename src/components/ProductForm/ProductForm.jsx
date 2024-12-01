import "./ProductForm.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import cancelIcon from "../../assets/icons/cross.svg";
import rightArrowIcon from "../../assets/icons/arrow-right.svg";

export default function ProductForm({ handleOnSubmit, product, page }) {
	let navigate = useNavigate();

	function handleOnClick() {
		navigate(-1);
	}

	return (
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
					<div className="form__input-container">
						<label htmlFor="name" className="form__label">
							Name:
						</label>{" "}
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Enter name"
							className={
								formik.touched.name && formik.errors.name
									? "form__field form__field--error"
									: "form__field"
							}
							{...formik.getFieldProps("name")}
						/>
						{formik.touched.name && formik.errors.name ? (
							<div className="form--error">{formik.errors.name}</div>
						) : null}
					</div>
					<div className="form__input-container">
						<label htmlFor="brand" className="form__label">
							Brand:
						</label>
						<input
							type="text"
							name="brand"
							id="brand"
							placeholder="Enter brand"
							className={
								formik.touched.brand && formik.errors.brand
									? "form__field form__field--error"
									: "form__field"
							}
							{...formik.getFieldProps("brand")}
						/>
						{formik.touched.brand && formik.errors.brand ? (
							<div className="form--error">{formik.errors.brand}</div>
						) : null}
					</div>

					<div className="form__input-container">
						<label htmlFor="batchNumber" className="form__label">
							Batch number:{" "}
						</label>
						<input
							type="text"
							name="batchNumber"
							id="batchNumber"
							placeholder="Enter batch number"
							className={
								formik.touched.batchNumber && formik.errors.batchNumber
									? "form__field form__field--error"
									: "form__field"
							}
							{...formik.getFieldProps("batchNumber")}
						/>
						{formik.touched.batchNumber && formik.errors.batchNumber ? (
							<div className="form--error">{formik.errors.batchNumber}</div>
						) : null}
					</div>

					<div className="form__input-container">
						<label htmlFor="category" className="form__label">
							Category:
						</label>
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
								face
							</option>
							<option value="lips" className="form__option">
								lips
							</option>
							<option value="eye" className="form__option">
								eye
							</option>
							<option value="other" className="form__option">
								other
							</option>
						</select>
						{formik.touched.category && formik.errors.category ? (
							<div className="form--error">{formik.errors.category}</div>
						) : null}
					</div>

					<div className="form__input-container">
						<label htmlFor="dateOpened" className="form__label">
							Date Opened:
						</label>
						<input
							type="date"
							name="dateOpened"
							id="dateOpened"
							className={
								formik.touched.dateOpened && formik.errors.dateOpened
									? "form__field form__field--error"
									: "form__field"
							}
							{...formik.getFieldProps("dateOpened")}
						/>
						{formik.touched.dateOpened && formik.errors.dateOpened ? (
							<div className="form--error">{formik.errors.dateOpened}</div>
						) : null}
					</div>

					<div className="form__input-container">
						<label htmlFor="expirationDate" className="form__label">
							Expiration date:
						</label>
						<input
							type="date"
							name="expirationDate"
							id="expirationDate"
							className={
								formik.touched.expirationDate && formik.errors.expirationDate
									? "form__field form__field--error"
									: "form__field"
							}
							{...formik.getFieldProps("expirationDate")}
						/>
						{formik.touched.expirationDate && formik.errors.expirationDate ? (
							<div className="form--error">{formik.errors.expirationDate}</div>
						) : null}
					</div>

					<div className="form__button-container">
						{page === "edit" ? "Save" : "Add"}
						<button type="submit" className="form__button">
							{/* {page === "edit" ? "Save" : "Add"} */}
							<img
								src={rightArrowIcon}
								alt="A right arrow icon"
								className="form__icon form__icon--arrow"
							/>
						</button>
					</div>
				</form>
			)}
		</Formik>
	);
}
