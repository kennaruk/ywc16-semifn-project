import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import * as d3 from "d3";
import "aframe";
import "aframe-scatterplot";
import { Entity, Scene } from "aframe-react";

import data from "./controllers/data.json";
import { fetchPDC } from "./controllers/pdc";
class App extends Component {
	constructor() {
		super();
		this.state = {
			x: []
		};
	}
	async fetchData() {
		console.log(await fetchPDC());
	}
	render() {
		// this.fetchData();
		return (
			<Scene>
				<a-scatterplot
					src={data}
					x="field1"
					y="field2"
					z="field3"
					val="field4"
				/>
			</Scene>
		);
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
