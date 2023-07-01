import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../../High_ordered_component/AdminLayout";
import { playersCollection } from "../../../firebase";
import {
	Table,
	TableBody,
	TableHead,
	TableCell,
	TableRow,
	Paper,
	Button,
} from "@material-ui/core";

const AdminPlayers = () => {
	const [players, setPlayers] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!players) {
			setLoading(true);
			let playersDB = [];
			playersCollection.forEach((doc) => {
				playersDB.push({
					id: doc.id,
					...doc.data(),
				});
			});
			setPlayers(playersDB);
			setLoading(false);
		}
	}, [players]);

	return (
		<AdminLayout title="The Players">
			<div className="mb-5">
				<Button
					disableElevation
					variant="outlined"
					component={Link}
					to={"/admin_players/add_player"}
				>
					Add Players
				</Button>
			</div>
			<Paper className="mb-5">
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>First Name</TableCell>
							<TableCell>Last Name</TableCell>
							<TableCell>Number</TableCell>
							<TableCell>Position</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{players
							? players.map((player, i) => (
									<TableRow key={player.id}>
										<TableCell>
											<Link to={`/admin_players/edit_player/${player.id}`}>
												{player.name}
											</Link>
										</TableCell>
										<TableCell>
											<Link to={`/admin_players/edit_player/${player.id}`}>
												{player.lastname}
											</Link>
										</TableCell>
										<TableCell>{player.number}</TableCell>
										<TableCell>{player.position}</TableCell>
									</TableRow>
							  ))
							: null}
					</TableBody>
				</Table>
			</Paper>
		</AdminLayout>
	);
};

export default AdminPlayers;
