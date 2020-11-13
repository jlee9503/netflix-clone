import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";

function App() {
	return (
		<div className="App">
			<Row title="Trending Now" fetchURL={requests.fetchTrending} />
			<Row title="Top Rated" fetchURL={requests.fetchTopRated} />
			<Row
				title="Netflix Originals"
				fetchURL={requests.fetchNetflixOriginals}
			/>
			<Row title="Action" fetchURL={requests.fetchActionMovies} />
			<Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
			<Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
			<Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
