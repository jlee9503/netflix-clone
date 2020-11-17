import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./requests";

function App() {
	return (
		<div className="App">
			<Banner fetchURL={requests.fetchNetflixOriginals} />
			<Row
				title="Trending Now"
				fetchURL={requests.fetchTrending}
				largePoster={true}
			/>
			<Row title="Top Rated" fetchURL={requests.fetchTopRated} />
			<Row
				title="Netflix Originals"
				fetchURL={requests.fetchNetflixOriginals}
			/>
			<Row title="Action" fetchURL={requests.fetchActionMovies} />
			<Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
			<Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
			<Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
		</div>
	);
}

export default App;
