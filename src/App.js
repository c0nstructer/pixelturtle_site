import "./App.css";
import Hero from "./Hero";
import { useState } from "react";
import Home from "./Home";
import Welcome from "./Welcome";
import Special from "./Special";
import Roadmap from "./Roadmap";
import FAQ from "./FAQ";
import Team from "./Team";
import Footer from "./Footer";

function App() {
	const [connecctstatus, setConnectedstatus] = useState(false);
	return (
		<>
			<Hero connecctstatus={connecctstatus} />
			<Home
				connecctstatus={connecctstatus}
				setConnectedstatus={setConnectedstatus}
			/>
			<Welcome />
			<Special />
			<Roadmap />
			<div className="section-wrap">
				<FAQ />
				<Team />
			</div>
			<Footer />
		</>
	);
}

export default App;
