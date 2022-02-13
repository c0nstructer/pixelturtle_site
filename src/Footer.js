import React from "react";

const Footer = () => {
	return (
		<>
			<section>
				<footer
					className="footer"
					style={{ fontFamily: "Roboto", padding: "87px 30px 44px" }}
					// style='font-family: "Roboto";padding: 87px 30px 44px;'
				>
					<div className="footer__address">
						<h4
							className="footer__address-link d-flex align-items-center justify-content-center flex-wrap"
							style={{
								marginBottom: "50px",
								fontSize: "13px",
								flexWrap: "wrap",
							}}
						>
							Verified Smart Contract Address: 0x33A479D44654eB97231f44C8953FcE5c9AeD9e2<br />
						</h4>
						<a
							href="https://etherscan.io/address/0x33A479D44654eB97231f44C8953FcE5c9AeD9e26"
							target="_blank"
							className="d-flex align-items-center justify-content-center"
							style={{
								fontSize: "15px",
								textDecoration: "underline",
								marginBottom: "50px",
								fontSize: "13px",
								flexWrap: "wrap",
								fontFamily: "'Press Start 2P'",
							}}
							// style="font-size: 15px;text-decoration: underline;display: flex;align-items: center;justify-content: center;margin-bottom: 50px;font-size: 13px;flex-wrap: wrap;font-family: 'Press Start 2P', cursive;"
						>
							Released
						</a>
					</div>
					<div className="footer__content">
						<h5
							className="footer-title d-flex align-items-center justify-content-center flex-wrap"
							style={{
								marginBottom: "50px",
								fontSize: "13px",
								flexWrap: "wrap",
							}}
						>
							Pixel Turtle
						</h5>
						<p
							className="d-flex align-items-center justify-content-center"
							style={{
								marginBottom: "50px",
								fontSize: "13px",
								flexWrap: "wrap",
								fontFamily: "'Press Start 2P'",
							}}
							// style="display: flex;align-items: center;justify-content: center;margin-bottom: 50px;font-family: 'Press Start 2P', cursive;font-size: 13px;"
						>
							©2022 Pixel Turtle.
						</p>
					</div>
				</footer>
			</section>
		</>
	);
};

export default Footer;
