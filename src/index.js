import React from "react";
import ReactDOM from "react-dom";
import Routess from "./routes";
import "./Resources/css/app.css";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, matchesCollection } from "./firebase";

const App = (props) => {
	return <Routess {...props} />;
};

onAuthStateChanged(auth, (user) => {
	ReactDOM.render(<App user={user} />, document.getElementById("root"));
});
