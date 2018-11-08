import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Entity, Scene } from "aframe-react";

import data from "./controllers/data.json";
import { fetchPDC } from "./controllers/pdc";

// import * as d3 from "d3";
require("aframe");
// require("d3");
require("aframe-scatterplot");

// import "aframe";
// import "aframe-scatterplot";
class App extends Component {
	constructor() {
		super();
		this.state = {
			x: []
		};
	}
	async fetchData() {
		// console.log(await fetchPDC());
	}
	render() {
		return (
			<Scene>
				<a-scatterplot
					title="Average salary by province / year"
					src="/format_clean_dataset.json"
					x="province" //lat
					y="averageSalary" //val
					z="year" //lon
					val="province" //color
					position="0.5 0.5 -0.5"
					pointSize="5"
				/>
			</Scene>
		);
		// this.fetchData();
		// return <div />;
		// return (
		// 	<div className="App">
		// 		<header className="App-header">
		// 			<img src={logo} className="App-logo" alt="logo" />
		// 			<p>
		// 				Edit <code>src/App.js</code> and save to reload.
		// 			</p>
		// 			<a
		// 				className="App-link"
		// 				href="https://reactjs.org"
		// 				target="_blank"
		// 				rel="noopener noreferrer"
		// 			>
		// 				Learn React
		// 			</a>
		// 		</header>
		// 	</div>
		// );
	}
}

export default App;
