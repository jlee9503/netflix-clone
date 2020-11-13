import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";

function Row({ title, fetchURL }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			// Get requested URL
			const request = await axios.get(fetchURL);
			// Save movie data to movies array
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchURL]);

	return (
		<div className="row">
			<h2 className="row_title">{title}</h2>

			<div className="posters">
				{movies.map((movie) => (
					<img
						key={movie.id}
						className="poster"
						src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
						alt={movie.name}
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
