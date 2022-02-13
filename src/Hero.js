// import React, { useState } from "react";
import Web3 from "web3";
import { useState, useEffect } from "react";
import discord from "./assets/social-link-1.svg";
import twitter from "./assets/social-link-2.png";
import insta from "./assets/social-link-3.svg";

function Hero({ setconnecctstatus, connecctstatus }) {
	function opennav() {
		let header = document.querySelector(".header");
		header.classList.toggle("menu-open");
	}
	return (
		<>
			<header class="header">
				<div class="container">
					<button
						type="button"
						class="btn-options btn"
						onClick={() => {
							opennav();
						}}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<nav class="header-nav">
						<ul class="menu">
							<li>
								<a href="#about" style={{ fontSize: "25px" }}>
									About
								</a>
							</li>
							<li>
								<a href="#roadmap" style={{ fontSize: "25px" }}>
									Roadmap
								</a>
							</li>
							<li>
								<a href="#faq" style={{ fontSize: "25px" }}>
									FAQ
								</a>
							</li>
							<li>
								<a href="#team" style={{ fontSize: "25px" }}>
									Team
								</a>
							</li>
						</ul>
						<div class="social-links">
							<a href="https://discord.gg/Cd6Cb8ps">
								<img src={discord} alt="discord" />
							</a>
							<a href="https://twitter.com/pixelturtleclub?s=21">
								<img src={twitter} alt="twitter" />
							</a>
							<a href="https://instagram.com/pixelturtle.club">
								<img src={insta} alt="insta" />
							</a>
						</div>
					</nav>
				</div>
			</header>
		</>
	);
}

export default Hero;
