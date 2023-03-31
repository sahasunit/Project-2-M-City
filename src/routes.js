import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header_footer/header";
import Footer from "./Components/Header_footer/footer";
import Home from "./Components/Home/index";
import SignIn from "./Components/Signin";
import Dashboard from "./Components/Admin/Dashboard";
import AuthGuard from "./High_ordered_component/Auth";

const Routess = ({ user }) => {
	return (
		<BrowserRouter>
			<Header user={user} />
			<Routes>
				<Route path="/dashboard" exact element={AuthGuard(Dashboard)} />
				<Route path="/sign_in" exact element={<SignIn user={user} />} />
				<Route path="/" exact element={<Home />} />
			</Routes>
			<ToastContainer />
			<Footer />
		</BrowserRouter>
	);
};

export default Routess;
