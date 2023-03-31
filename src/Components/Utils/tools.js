import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import mcityLogo from "../../Resources/images/logos/manchester_city_logo.png";
import { getAuth, signOut } from "firebase/auth";

export const CityLogo = (props) => {
	const template = (
		<div
			className="img_cover"
			style={{
				width: props.width,
				height: props.height,
				background: `url(${mcityLogo}) no-repeat`,
			}}
		></div>
	);

	if (props.link) {
		return (
			<Link className="link_logo" to={props.linkTo}>
				{template}
			</Link>
		);
	} else {
		return template;
	}
};

export const showErrorToast = (msg) => {
	toast.error(msg, {
		position: toast.POSITION.TOP_LEFT,
	});
};

export const showSuccessToast = (msg) => {
	toast.success(msg, {
		position: toast.POSITION.TOP_LEFT,
	});
};

export const logOutHandler = () => {
	const auth = getAuth();
	signOut(auth)
		.then(() => {
			showSuccessToast("Good Bye!!");
		})
		.catch((error) => {
			showErrorToast(error.message);
		});
};
