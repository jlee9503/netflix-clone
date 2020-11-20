import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchURL, largePoster }) {
	const [movies, setMovies] = useState([]);
	const [trailerURL, setTrailerURL] = useState("");

	// Create an option object for Youtube trailer
	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			autoplay: 1,
		},
	};

	// Show trailer if the poster is clicked, close it on the second click
	const handleClick = (movie) => {
		// if the trailer Url exists, convert to the empty string when the user clicks the movie poster
		if (trailerURL) {
			setTrailerURL("");
		} else {
			movieTrailer(movie?.name || movie?.orginal_title || movie?.title || "")
				.then((url) => {
					// search only video id
					const urlParams = new URLSearchParams(new URL(url).search);
					// store video id in video_id variable
					let video_id = urlParams.get("v");
					// set trailer URL
					setTrailerURL(video_id);
				})
				.catch((error) => console.log(error));
		}
	};

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

			{/* Generating movie posters from movies array */}
			<div className="posters">
				{movies.map((movie) => (
					<img
						key={movie?.id}
						className={`poster ${largePoster && `poster_large`}`}
						src={`https://image.tmdb.org/t/p/original/${
							largePoster ? movie?.poster_path : movie?.backdrop_path
						}`}
						alt={movie?.name}
						onClick={() => handleClick(movie)}
					/>
				))}
			</div>

			{/* Insert Movie Trailer */}
			{trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
		</div>
	);
}

export default Row;
