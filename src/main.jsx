import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function NavBar() {
	return (
		<nav>
			<div className="navlogo">
				<p>Top G</p>
			</div>
			<div className="navbtn">
				<ul>
					<li>About Andrew</li>
					<li>
						How to Become a Top <b>G</b>
					</li>
				</ul>
			</div>
		</nav>
	);
}
function Hero() {
	return (
		<div className="hero">
			<h1>Your Ultimet Gudians To The TOP G Wrold</h1>
			<p>
				Ipsum ab laborum maiores optio animi fugit. Rerum nesciunt nemo
				quisquam hic veritatis. Odit maiores unde porro voluptatem nisi?
				Laboriosam animi omnis et porro quibusdam. Asperiores nemo ex
				aut ex!
			</p>
			<button>Read More !</button>
		</div>
	);
}
function App() {
	return (
		<div className="app">
			<NavBar />
			<Hero />
		</div>
	);
}
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
