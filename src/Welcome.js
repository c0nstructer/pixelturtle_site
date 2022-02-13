import React from "react";
import welcomeimg from "./assets/welcome.jpeg";
const Welcome = () => {
	return (
		<>
			<div className="section">
				<section
					className="section-welcome"
					id="about"
					style={{ backgroundImage: { welcomeimg } }}
					// style='background-image: url("https://www.wallpapertip.com/wmimgs/27-272575_sunny-beach-wallpaper-12378-sunny-beach-wallpaper-hd.jpg");'
				>
					<div className="container text-center px-xl-5">
						<h2 style={{ fontSize: "40px" }}>Welcome to PIXEL TURTLE CLUB</h2>
						<p style={{ fontWeight: "bold" }}>
							A group of 8888 pixelated turtles crawling their way onto the
							ethereum blockchain. Their home has been ruined by poachers and
							pollution forcing them to flee their home. On their journey they
							find special turtles all over the world that lead them on their
							quest to save their species from extinction.
						</p>
					</div>
				</section>
			</div>
		</>
	);
};

export default Welcome;
