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
import AdminPlayers from "./Components/Admin/players";
import AddEditPlayers from "./Components/Admin/players/addEditPlayers";

const Routess = ({ user }) => {
	return (
		<BrowserRouter>
			<Header user={user} />
			<Routes>
				<Route path="/admin_players" exact element={<AdminPlayers />} />
				<Route
					path="/admin_players/add_player"
					exact
					element={<AddEditPlayers />}
				/>
				<Route
					path="/admin_players/edit_player/:playerid"
					exact
					element={<AddEditPlayers />}
				/>
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
