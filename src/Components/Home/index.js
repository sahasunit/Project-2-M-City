import React from "react";
import Featured from "./featured";
import MatchesForm from "./matches";
import MeetPlayers from "./meetPlayers";
import Promotion from "./promotion";

const Home = () => {
	return (
		<div className="bck_blue">
			<Featured />
			<MatchesForm />
			<MeetPlayers />
			<Promotion />
		</div>
	);
};

export default Home;
