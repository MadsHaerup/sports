import React from "react";
import "./Tailored.scss";
import phones from "./mobilepreviewtop.svg";
import logo from "./logotop.svg";
import Buttons from "../Buttons/Buttons";

export default function Tailored() {
	return (
		<div className="tailored">
			<div className="tailored__personalized">
				<div className="tailored__personalized__logo">
					<img src={logo} alt="our logo" />
				</div>

				<div className="tailored__personalized__cta">
					<h1>
						Get a personalized football <br /> experience tailored just for you
					</h1>
					<p>
						Achieve super-fan status by getting tailored updates and <br /> up-to-the-minute information on your team.
					</p>
					<div className="tailored__personalized__cta__buttons">
						<Buttons />
					</div>
				</div>
			</div>

			<div className="tailored__phonesBg">
				<img src={phones} alt="phones" />
			</div>
		</div>
	);
}
