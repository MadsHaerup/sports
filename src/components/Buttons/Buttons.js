import React from "react";
import "./Buttons.scss";
import apple from "./icons/apple.svg";
import play from "./icons/googleplay.svg";
export default function Buttons() {
	return (
		<div className="btnContainer">
			<button className="btnContainer__btn">
				<img className="btnContainer__btn__img" src={apple} alt="apple store" />
				<p className="btnContainer__btn__download">Download on the</p>
				<p className="btnContainer__btn__store">App store</p>
			</button>
			<button className="btnContainer__btn">
				<img className="btnContainer__btn__img" src={play} alt="apple store" />
				<p className="btnContainer__btn__download">Download on</p>
				<p className="btnContainer__btn__store">Google play</p>
			</button>
		</div>
	);
}
