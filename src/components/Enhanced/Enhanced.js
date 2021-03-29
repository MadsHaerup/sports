import "../Enhanced/Enhanced.scss";
import React from "react";

export default function Enhanced() {
	return (
		<div className="enhanced">
			<p className="enhanced__text">what it does</p>
			<h1 className="enhanced__title">An Enhanced Football Experience</h1>
			<p className="enhanced__content">
				The Guardian Live Scores app is your go to app for live scores and watching Premier League goals… Get in there,
				what a result!
			</p>
			<p className="enhanced__content">
				As well as videos of all the goals, you can watch match highlights, check out the latest scores and results and
				stay bang-up-to-date with the big football stories from The Guardian publication.
			</p>
			<a href="/learn" className="enhanced__link">
				Learn more
			</a>
		</div>
	);
}
