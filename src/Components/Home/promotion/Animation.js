import React from "react";
import { Zoom } from "react-awesome-reveal";

const Animation = () => {
	return (
		<div className="promotion_animation">
			<div className="left">
				<Zoom>
					<span>Win a</span>
					<span>Jersey</span>
				</Zoom>
			</div>
			<div className="right">
				<Zoom>
					<div className="jersey"></div>
				</Zoom>
			</div>
		</div>
	);
};

export default Animation;
