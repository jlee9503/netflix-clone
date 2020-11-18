import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faPlus } from "@fortawesome/free-solid-svg-icons";

function Banner({ fetchURL }) {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchMoive() {
			const request = await axios.get(fetchURL);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}

		fetchMoive();
	}, [fetchURL]);

	const textTruncate = (str) => {
		return str?.length > 150 ? str.substr(0, 149) + "..." : str;
	};

	return (
		<header
			className="header"
			style={{
				backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<div className="banner_container">
				{/* Title */}
				<h2 className="banner_title">
					{movie?.title || movie?.original_name || movie?.name}
				</h2>

				{/* Buttons */}
				<div className="banner_buttons">
					<button>
						Play <FontAwesomeIcon icon={faCaretRight} className="play-button" />
					</button>
					<button>
						My List <FontAwesomeIcon icon={faPlus} className="play-button" />
					</button>
				</div>

				{/* Description */}
				<h3 className="banner_description">{textTruncate(movie?.overview)}</h3>
			</div>

			{/* Add fading effect on the bottom */}
			<div className="fading_effect"></div>
		</header>
	);
}

export default Banner;
