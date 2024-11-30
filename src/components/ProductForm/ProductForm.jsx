import "./ProductForm.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function ProductForm({ handleOnSubmit, product, page }) {
	let navigate = useNavigate();

	function handleOnClick() {
		navigate(-1);
	}

	return (
		<div className="productForm">
			<h1 className="productForm__title">
				{page === "edit" ? "edit product" : "add a new product"}
			</h1>
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
						<label htmlFor="name" className="form__label">
							Name:
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Enter name"
								className="form__field form__field--name"
								{...formik.getFieldProps("name")}
							/>
						</label>
						{formik.touched.name && formik.errors.name ? (
							<div>{formik.errors.name}</div>
						) : null}
						<label htmlFor="brand" className="form__label">
							Brand:
							<input
								type="text"
								name="brand"
								id="brand"
								placeholder="Enter brand"
								className="form__field form__field--brand"
								{...formik.getFieldProps("brand")}
							/>
						</label>
						{formik.touched.brand && formik.errors.brand ? (
							<div>{formik.errors.brand}</div>
						) : null}
						<label htmlFor="batchNumber" className="form__label">
							Batch number:{" "}
							<input
								type="text"
								name="batchNumber"
								id="batchNumber"
								placeholder="Enter batch number"
								className="form__field form__field--batchNumber"
								{...formik.getFieldProps("batchNumber")}
							/>
						</label>
						{formik.touched.batchNumber && formik.errors.batchNumber ? (
							<div>{formik.errors.batchNumber}</div>
						) : null}
						<label htmlFor="category" className="form__label">
							Category:{" "}
							<select
								name="category"
								id="category"
								className="form__field form__field--category"
								{...formik.getFieldProps("category")}
							>
								<option value="" selected disabled hidden>
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
						</label>
						{formik.touched.category && formik.errors.category ? (
							<div>{formik.errors.category}</div>
						) : null}
						<label htmlFor="dateOpened" className="form__label">
							Date Opened:
							<input
								type="date"
								name="dateOpened"
								id="dateOpened"
								className="form__field form__field--dateOpened"
								{...formik.getFieldProps("dateOpened")}
							/>
						</label>
						{formik.touched.dateOpened && formik.errors.dateOpened ? (
							<div>{formik.errors.dateOpened}</div>
						) : null}
						<label htmlFor="expirationDate" className="form__label">
							Expiration date:
							<input
								type="date"
								name="expirationDate"
								id="expirationDate"
								className="form__field form__field--expirationDate"
								{...formik.getFieldProps("expirationDate")}
							/>
						</label>
						{formik.touched.expirationDate && formik.errors.expirationDate ? (
							<div>{formik.errors.expirationDate}</div>
						) : null}
						<div className="form__button-container">
							<button
								type="button"
								onClick={handleOnClick}
								className="form__button"
							>
								Cancel
							</button>
							<button type="submit" className="form__button">
								{page === "edit" ? "Save" : "Add"}
							</button>
						</div>
					</form>
				)}
			</Formik>
		</div>
	);
}
