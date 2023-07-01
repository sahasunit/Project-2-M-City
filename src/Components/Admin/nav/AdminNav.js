import React from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import { logOutHandler } from "../../Utils/tools";

const AdminNav = (props) => {
	const navigate = useNavigate();

	const links = [
		{
			title: "Matches",
			linkTo: "/admin_matches",
		},
		{
			title: "Players",
			linkTo: "/admin_players",
		},
	];

	const renderItems = () => {
		return links.map((link) => (
			<ListItem
				button
				className="admin_nav_link"
				onClick={() => navigate(link.linkTo)}
			>
				{link.title}
			</ListItem>
		));
	};

	return (
		<div>
			{renderItems()}
			<ListItem
				button
				className="admin_nav_link"
				onClick={() => logOutHandler()}
			>
				Log Out
			</ListItem>
		</div>
	);
};

export default AdminNav;
