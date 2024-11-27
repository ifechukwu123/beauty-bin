import axios from "axios";
import "./AddProductPage.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const url = import.meta.env.VITE_API_URL;

export default function AddProductPage() {
	let navigate = useNavigate();

	async function handleOnSubmit(values) {
		try {
			const response = await axios.post(`${url}/products`, {
				...values,
				userId: 1,
			});
			navigate(`/products/${response.data.id}`);
		} catch (error) {
			console.error(`Unable to add new product: ${error}`);
		}
	}

	function handleOnClick() {
		navigate(-1);
	}

	return (
		<Formik
			initialValues={{
				name: "",
				brand: "",
				batchNumber: "",
				category: "",
				dateOpened: "",
				expirationDate: "",
			}}
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
					<label htmlFor="name">
						Name:
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Enter name"
							{...formik.getFieldProps("name")}
						/>
					</label>
					{formik.touched.name && formik.errors.name ? (
						<div>{formik.errors.name}</div>
					) : null}
					<label htmlFor="brand">
						Brand:
						<input
							type="text"
							name="brand"
							id="brand"
							placeholder="Enter brand"
							{...formik.getFieldProps("brand")}
						/>
					</label>
					{formik.touched.brand && formik.errors.brand ? (
						<div>{formik.errors.brand}</div>
					) : null}
					<label htmlFor="batchNumber">
						Batch number:{" "}
						<input
							type="text"
							name="batchNumber"
							id="batchNumber"
							placeholder="Enter batch number"
							{...formik.getFieldProps("batchNumber")}
						/>
					</label>
					{formik.touched.batchNumber && formik.errors.batchNumber ? (
						<div>{formik.errors.batchNumber}</div>
					) : null}
					<label htmlFor="category">
						Category:{" "}
						<select
							name="category"
							id="category"
							{...formik.getFieldProps("category")}
						>
							<option value="" selected disabled hidden>
								Choose here
							</option>
							<option value="face">Face</option>
							<option value="lips">Lips</option>
							<option value="eye">Eye</option>
							<option value="other">Other</option>
						</select>
					</label>
					{formik.touched.category && formik.errors.category ? (
						<div>{formik.errors.category}</div>
					) : null}
					<label htmlFor="dateOpened">
						Date Opened:
						<input
							type="date"
							name="dateOpened"
							id="dateOpened"
							{...formik.getFieldProps("dateOpened")}
						/>
					</label>
					{formik.touched.dateOpened && formik.errors.dateOpened ? (
						<div>{formik.errors.dateOpened}</div>
					) : null}
					<label htmlFor="expirationDate">
						Expiration date:
						<input
							type="date"
							name="expirationDate"
							id="expirationDate"
							{...formik.getFieldProps("expirationDate")}
						/>
					</label>
					{formik.touched.expirationDate && formik.errors.expirationDate ? (
						<div>{formik.errors.expirationDate}</div>
					) : null}
					<button type="button" onClick={handleOnClick}>
						Cancel
					</button>
					<button type="submit">Submit</button>
				</form>
			)}
		</Formik>
	);
}
