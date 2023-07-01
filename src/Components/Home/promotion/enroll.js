import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { CircularProgress } from "@material-ui/core";

import { useFormik } from "formik";
import * as Yup from "yup";
import { showErrorToast, showSuccessToast } from "../../Utils/tools";
import { promotionsCollection, promotionsRef } from "../../../firebase";
import { addDoc } from "firebase/firestore";

const Enroll = () => {
	const [loading, setLoading] = useState(false);

	const formik = useFormik({
		initialValues: { email: "" },
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email")
				.required("The email is required"),
		}),
		onSubmit: (values) => {
			setLoading(true);
			submitForm(values);
		},
	});

	const submitForm = async (values) => {
		try {
			let isOnTheList = false;
			promotionsCollection.forEach((doc) => {
				if (doc.data().email === values.email) {
					isOnTheList = true;
				}
			});

			if (isOnTheList) {
				showErrorToast("Sorry you are on the list already");
				setLoading(false);
				return false;
			}

			await addDoc(promotionsRef, {
				email: values.email,
			});
			formik.resetForm();
			setLoading(false);
			showSuccessToast("Congratulations!! :) ");
		} catch (err) {
			showErrorToast(err);
		}
	};

	return (
		<Fade>
			<div className="enroll_wrapper">
				<form onSubmit={formik.handleSubmit}>
					<div className="enroll_title">Enter your email</div>
					<div className="enroll_input">
						<input
							name="email"
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							placeholder="Enter your email"
						/>
						{formik.touched.email && formik.errors.email ? (
							<div className="error_lable">{formik.errors.email}</div>
						) : null}
						{loading ? (
							<CircularProgress color="secondary" className="progress" />
						) : (
							<button type="submit">Enroll</button>
						)}

						<div className="enroll_discl">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</div>
					</div>
				</form>
			</div>
		</Fade>
	);
};

export default Enroll;
