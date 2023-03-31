import React from "react";
import AdminLayout from "../../High_ordered_component/AdminLayout";

const Dashboard = () => {
	console.log("The Dahsboard");
	return (
		<AdminLayout>
			<div className="user_dashboard">
				<div>This is your dashboard</div>
			</div>
		</AdminLayout>
	);
};

export default Dashboard;
