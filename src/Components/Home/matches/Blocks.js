import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import { matchesCollection } from "../../../firebase";
import MatchesBlock from "../../Utils/matches_block";

const Blocks = () => {
	const [matches, setMatches] = useState([]);

	useEffect(() => {
		if (!matches.length > 0) {
			const matchesDB = [];
			matchesCollection.forEach((match) => {
				matchesDB.push({
					id: match.id,
					...match.data(),
				});
			});
			console.log({ matchesDB });
			setMatches(matchesDB);
		}
	}, [matches]);

	const showMatches = (matches) =>
		matches
			? matches.map((match) => (
					<Slide bottom key={match.id} className="item" triggerOnce>
						<div>
							<div className="wrapper">
								<MatchesBlock match={match} />
							</div>
						</div>
					</Slide>
			  ))
			: null;

	return <div className="home_matches">{showMatches(matches)}</div>;
};

export default Blocks;
