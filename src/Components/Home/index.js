import React from "react";
import Featured from "./featured";
import MatchesForm from "./matches/index";
import MeetPlayers from "./meetPlayers/index";

const Home = () => {
	return (
		<div className="bck_blue">
			<Featured />
			<MatchesForm />
			<MeetPlayers />
		</div>
	);
};

export default Home;
