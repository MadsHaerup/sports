import "../Footer/Footer.scss";
import React from "react";
import logo from "../Footer/logo.svg";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

export default function Footer() {
	return (
		<footer className="footer">
			<img src={logo} alt="logo" />

			<div className="footer__links">
				<a href="/download">Download</a>
				<a href="/support">Support</a>
				<a href="/developers">Developers</a>
				<a href="/privacy">Privacy</a>
			</div>

			<div className="footer__soMe">
				<FaTwitter />
				<FaFacebookF />
				<TiSocialInstagram />
			</div>
		</footer>
	);
}
