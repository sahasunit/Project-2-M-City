import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../../../High_ordered_component/AdminLayout";
import Fileuploader from "../../Utils/fileUploader";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
	showErrorToast,
	showSuccessToast,
	textErrorHelper,
	selectErrorHelper,
	selectIsError,
} from "../../Utils/tools";
import {
	TextField,
	Select,
	MenuItem,
	FormControl,
	Button,
} from "@material-ui/core";
import { playersRef, DB } from "../../../firebase";
import { addDoc, doc, updateDoc, getDoc } from "firebase/firestore";

const defaultValues = {
	name: "",
	lastname: "",
	number: "",
	position: "",
};

const AddEditPlayers = () => {
	let navigate = useNavigate();
	const player = useParams();
	const [loading, setLoading] = useState(false);
	const [formType, setFormType] = useState("");
	const [values, setValues] = useState(defaultValues);
	const [playerDocumentRef, setPlayerDocRef] = useState();

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: values,
		validationSchema: Yup.object({
			name: Yup.string().required("This input is required"),
			lastname: Yup.string().required("This input is required"),
			number: Yup.number()
				.required("This input is required")
				.min(0, "The minimum is zero")
				.max(100, "The minimum is 100"),
			position: Yup.string().required("This input is required"),
		}),
		onSubmit: (values) => {
			submitForm(values);
		},
	});

	const submitForm = async (values) => {
		try {
			let dataToSubmit = values;
			setLoading(true);

			if (formType === "add") {
				await addDoc(playersRef, dataToSubmit);
				formik.resetForm();
				navigate("/admin_players");
				setLoading(false);
				showSuccessToast("Player Added! :)");
			} else {
				await updateDoc(playerDocumentRef, dataToSubmit);
				formik.resetForm();
				navigate("/admin_players");
				setLoading(false);
				showSuccessToast("Player Updated! :)");
			}
		} catch (err) {
			showErrorToast(err + "Sorry, try again later!");
		}
	};

	const getDocSnap = async (docRef) => {
		const playerDocSnap = await getDoc(docRef);
		const playerData = await playerDocSnap.data();
		if (playerDocSnap?.data()) {
			setValues(playerData);
		}
	};

	useEffect(() => {
		if (player.playerid) {
			console.log(player.playerid);
			const playerDocRef = doc(DB, "players", player.playerid);
			getDocSnap(playerDocRef);
			setPlayerDocRef(playerDocRef);
			setFormType("edit");
		} else {
			setFormType("add");
			setValues(defaultValues);
		}
	}, [player.playerid]);

	return (
		<AdminLayout title={formType === "add" ? "Add player" : "Edit player"}>
			<div className="editplayers_dialog_wrapper">
				<div>
					<form onSubmit={formik.handleSubmit}>
						<FormControl>
							<Fileuploader dir="player" />
						</FormControl>
						<hr />
						<h4>Player Information</h4>
						<div className="mb-5">
							<FormControl>
								<TextField
									id="name"
									name="name"
									variant="outlined"
									placeholder="Add firstname"
									{...formik.getFieldProps("name")}
									{...textErrorHelper(formik, "name")}
								/>
							</FormControl>
						</div>
						<div className="mb-5">
							<FormControl>
								<TextField
									id="lastname"
									name="lastname"
									variant="outlined"
									placeholder="Add lastname"
									{...formik.getFieldProps("lastname")}
									{...textErrorHelper(formik, "lastname")}
								/>
							</FormControl>
						</div>
						<div className="mb-5">
							<FormControl>
								<TextField
									type="number"
									id="number"
									name="number"
									variant="outlined"
									placeholder="Add number"
									{...formik.getFieldProps("number")}
									{...textErrorHelper(formik, "number")}
								/>
							</FormControl>
						</div>
						<div className="mb-5">
							<FormControl error={selectIsError(formik, "position")}>
								<Select
									id="position"
									name="position"
									variant="outlined"
									placeholder="Add position"
									displayEmpty
									{...formik.getFieldProps("position")}
								>
									<MenuItem value="" disabled>
										Select a position
									</MenuItem>
									<MenuItem value="Keeper">Keeper</MenuItem>
									<MenuItem value="Defence">Defence</MenuItem>
									<MenuItem value="Midfield">Midfield</MenuItem>
									<MenuItem value="Striker">Striker</MenuItem>
								</Select>
								{selectErrorHelper(formik, "position")}
							</FormControl>
						</div>
						<Button
							type="submit"
							variant="contained"
							color="primary"
							disabled={loading}
						>
							{formType === "add" ? "Add player" : "Edit player"}
						</Button>
					</form>
				</div>
			</div>
		</AdminLayout>
	);
};

export default AddEditPlayers;
