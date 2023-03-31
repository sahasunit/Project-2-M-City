import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthGuard = (Component) => {
	const DetermineNavigation = () => {
		console.log("DetermineNavigation entered");
		const user = auth.currentUser;
		if (user) {
			console.log("entered Component");
			return <Component />;
		} else {
			console.log("entered '/'");
			return <Navigate to="/" />;
		}
	};

	return DetermineNavigation();
};

export default AuthGuard;
