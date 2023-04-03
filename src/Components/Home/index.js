import React from "react";
import Featured from "./featured";
import MatchesForm from "./matches/index";

const Home = () => {
	return (
		<div className="bck_blue">
			<Featured />
			<MatchesForm />
		</div>
	);
};

export default Home;
