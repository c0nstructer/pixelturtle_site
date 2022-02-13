import team1 from "./assets/team1.jpeg";
import team2 from "./assets/team2.jpeg";
import team3 from "./assets/team3.jpeg";
import team4 from "./assets/team4.png";
import team5 from "./assets/team5.jpeg";
import team6 from "./assets/team6.jpeg";
import team7 from "./assets/team7.png";
import team8 from "./assets/team8.jpeg";
import team9 from "./assets/team9.png";

const Team = () => {
	return (
		<>
			<section className="section-our-team" id="team">
				<h2 className="h2 text-center" style={{ fontSize: "40px" }}>
					The Team
				</h2>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-12 col-md-6 col-lg-4 col-xl-3">
							<a href="#" className="team-member">
								<div
									className="image-wrap img-team1"
									// style='background: url("https://i.ibb.co/G01yMTT/75575-DB8-4-D3-E-4-A51-AF5-F-1429-E8-BA4563.jpg");'
								>
									<img src={team1} alt="turtle" />
								</div>
								<h3>DAVID</h3>
								<span className="position">CREATOR/FOUNDER</span>
							</a>
						</div>
						<div className="col-12 col-md-6 col-lg-4 col-xl-3">
							<a href="#" className="team-member">
								<div
									className="image-wrap img-team2"
									// style='background: url("https://i.ibb.co/hVnmktZ/D0-D8909-C-FE54-4915-BC44-3091-F82-CE6-FC.jpg");'
								>
									<img src={team2} alt="turtle" />
								</div>
								<h3>STIVEN</h3>
								<span className="position">GAMING DEVELOPMENT</span>
							</a>
						</div>
						<div className="col-12 col-md-6 col-lg-4 col-xl-3">
							<a href="#" className="team-member">
								<div
									className="image-wrap img-team3"
									// style='background: url("https://i.ibb.co/86CwKSK/1125-AA5-B-0-C90-4740-BED7-BA623-B7576-A9.jpg");'
								>
									<img src={team3} alt="turtle" />
								</div>
								<h3>GABRIEL</h3>
								<span className="position">FOUNDER</span>
							</a>
						</div>
						<div className="col-12 col-md-6 col-lg-4 col-xl-3">
							<a href="#" className="team-member">
								<div
									className="image-wrap img-team4"
									// style='background: url("https://i.ibb.co/x3QpPTV/25-E5-B9-A4-6-FEF-46-A1-AB0-B-FD59-FCE93998.png");'
								>
									<img src={team4} alt="turtle" />
								</div>
								<h3>SUNY</h3>
								<span className="position">FOUNDER</span>
							</a>
						</div>
						<div className="col-12 col-md-6 col-lg-4 col-xl-3">
							<a href="#" className="team-member">
								<div
									className="image-wrap img-team5"
									// style='background: url("https://i.ibb.co/hZxdYw2/FC099-AE3-76-DA-4-D27-AAA3-3199-E511-A43-C.jpg");'
								>
									<img src={team5} alt="turtle" />
								</div>
								<h3>GINA</h3>
								<span className="position">ARTIST</span>
							</a>
						</div>
						<div className="col-12 col-md-6 col-lg-4 col-xl-3">
							<a href="#" className="team-member">
								<div
									className="image-wrap img-team6"
									// style='background: url("https://i.ibb.co/5vMdqs2/A6-A75396-C523-473-E-84-FD-019-B85-EB4-BCA.jpg");'
								>
									<img src={team6} alt="turtle" />
								</div>
								<h3>JULIAN</h3>
								<span className="position">FOUNDER/DESIGNER</span>
							</a>
						</div>
						<div className="col-12 col-md-6 col-lg-4 col-xl-3">
							<a href="#" className="team-member">
								<div
									className="image-wrap img-team7"
									// style='background: url("https://i.ibb.co/DRj7b7H/5-F7-AFD0-E-CCDF-46-D0-94-B5-C9-C7-A5-B12-BAF.png");'
								>
									<img src={team7} alt="turtle" />
								</div>
								<h3>SANDINO</h3>
								<span className="position">DESIGNER</span>
							</a>
						</div>

						<div className="col-12 col-md-6 col-lg-4 col-xl-3">
							<a href="#" className="team-member">
								<div
									className="image-wrap img-team8"
									// style='background: url("https://i.ibb.co/FVP74M3/F11-F00-EC-B0-C5-4200-B8-AB-7940-EB1-E6-DE1.jpg");'
								>
									<img src={team8} alt="turtle" />
								</div>
								<h3>DANNY</h3>
								<span className="position">BACKGROUND ARTIST</span>
							</a>
						</div>

						<div className="col-12 col-md-6 col-lg-4 col-xl-3">
							<a href="#" className="team-member">
								<div
									className="image-wrap img-team9"
									// style='background: url("https://i.ibb.co/FHzJH2X/3.png");'
								>
									<img src={team9} alt="turtle" />
								</div>
								<h3>Usman</h3>
								<span className="position">Blockchain Dev</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Team;
