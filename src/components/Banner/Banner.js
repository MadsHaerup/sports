import React from "react";
import "./Banner.scss";
import nbc from "./brands/nbc.svg";
import dn from "./brands/designer-news.svg";
import sky from "./brands/sky.svg";
import sport from "./brands/sports.svg";
import sportstv from "./brands/sportstv.svg";
import dt from "./brands/designer-technology.svg";
export default function Banner() {
	return (
		<div className="banner">
			<h1 className="banner__heading">We have been featured in</h1>
			<div className="banner__brands">
				<img src={sportstv} alt="brand" />
				<img src={sport} alt="brand" />
				<img src={nbc} alt="brand" />
				<img src={dt} alt="brand" />
				<img src={dn} alt="brand" />
				<img src={sky} alt="brand" />
			</div>
		</div>
	);
}
