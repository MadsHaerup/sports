import React from "react";
import "./Match.scss";
import match from "./match.svg";
import player from "./player.svg";
import video from "./video.svg";

export default function Match() {
	return (
		<div className="match">
			<div className="match__bg"></div>
			<img src={player} alt="" />
			<img src={match} alt="" />
			<img src={video} alt="" />
		</div>
	);
}
