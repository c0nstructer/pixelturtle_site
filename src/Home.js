import React from "react";
import "./Home.css";
import Web3 from "web3";
import abi from "./abi.json";
import { useEffect, useState } from "react";
import turtle from "./assets/turtle.jpeg";
import minus from "./assets/icon-minus.svg";
import plus from "./assets/icon-plus.svg";

require("dotenv").config();
const { REACT_APP_CONTRACT_ADDRESS } = process.env;

const Home = ({ connecctstatus, setConnectedstatus }) => {
	const [connectedAccount, setConnectedAccount] = useState("Connect Wallet");
	const [contract, setContract] = useState(null);
	const [tokenId, setTokenId] = useState(null);
	const [supply, setTokenSupply] = useState(null);
	const [price, setPrice] = useState();
	const [priceInEth, setPriceInEth] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [minted, setMinted] = useState(false);

	useEffect(() => {
		loadWeb3();
	}, []);

	async function loadWeb3() {
		
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			await window.ethereum.enable();
			const web3 = window.web3;
			// creating contract instance
			const contractaddress = REACT_APP_CONTRACT_ADDRESS;
			const ct = new web3.eth.Contract(abi, contractaddress);
			setContract(ct);
			connectWallet();
			let price = await ct.methods.price().call();
			setContract(ct);
			setPrice(price);
			setPriceInEth(web3.utils.fromWei(price, "ether"));
			const totalSupply = await ct.methods.totalSupply().call();
			setTokenSupply(totalSupply);
		} else if (window.web3) {
			window.web3 = new Web3(window.web3.currentProvider);
		} else {
			window.alert(
				"Non-Ethereum browser detected. You should consider trying MetaMask!"
			);
		}
	}

	async function mint() {
		const web3 = window.web3;
		connectWallet();
		const _value = price * quantity;
		const address = await web3.eth.getAccounts();

		await contract.methods
			.publicMint(quantity)
			.send({ from: address.toString(), value: _value });
		setMinted(true);
		const totalSupply = await contract.methods.totalSupply().call();
		setTokenSupply(totalSupply);
	}
	async function connectWallet() {
		if (window.ethereum) {
			window.web3 = new Web3(window.ethereum);
			await window.ethereum.enable();
			const web3 = window.web3;
			const metaMaskAccount = await web3.eth.getAccounts();
			setConnectedstatus(true);
			let splitedMetaMaskAddress;
			if (metaMaskAccount) {
				splitedMetaMaskAddress =
					metaMaskAccount[0].substring(0, 6) +
					"......" +
					metaMaskAccount[0].substring(
						metaMaskAccount[0].length - 4,
						metaMaskAccount[0].length
					);
			}
			setConnectedAccount(splitedMetaMaskAddress);
		} else if (window.web3) {
			window.web3 = new Web3(window.web3.currentProvider);
		} else {
			window.alert(
				"Non-Ethereum browser detected. You should consider trying MetaMask!"
			);
		}
	}
	return (
		<>
			<main className="main-content">
				<section className="section-banner">
					<div className="container text-center">
						<div className="image-wrap" style={{ background: "#161a26" }}>
							<img src={turtle} alt="turtle" style={{ width: "700px" }} />
						</div>
						<div className="counter">
							<h3>
								<span
									style={{
										// width: "100px",
										boxShadow: "inset 0 0 2000px rgb(0 0 0 / 90%)",
									}}
								>
									RELEASE DATE ANNOUNCED WHEN WE REACH 10K IN DISCORD
								</span>
							</h3>
						</div>
						<div className="remaining-turtles">
							<h3 className="remaing">
								<span
									style={{
										width: "100px",
										boxShadow: "inset 0 0 2000px rgb(0 0 0 / 74%)",
									}}
								>
									REMAINING TURTLES: 8888
								</span>
							</h3>

							<div className="input-group">
								<button
									className="btn btn-minus cursor-pointer"
									id="decrease-qty"
									onClick={() => {
										if (quantity > 1) {
											setQuantity(quantity - 1);
										}
									}}
								>
									<img src={minus} alt="icon-minus" />
								</button>
								<input
									type="text"
									value={quantity}
									id="qty_to_mint"
									readonly=""
								/>
								<button className="btn btn-plus">
									<img
										src={plus}
										alt="icon-plus"
										onClick={() => {
											if (quantity < 10) {
												setQuantity(quantity + 1);
											}
										}}
									/>
								</button>
							</div>
							<button
								type="button"
								className="btn btn-black"
								id="connect_wallet"
								style={{ fontSize: "28px" }}
								onClick={async () => {
									await mint();
								}}
							>
								mint
							</button>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
