import type { AnimeList } from "../../../../lib";
import React, { useState } from "react";
import { AnimeCard } from "../animeCard";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const AnimeListComp: React.FC<{ animes: AnimeList[] | null }> = ({ animes }) => {
	const [count, setCount] = useState(10000);

	return (
		<div className="anime-list">
			{animes ? (
				<>
					{animes
						.slice(0, count)
						.filter((x) => x)
						.map((anime, i) => (
							<AnimeCard key={i} {...anime} number={i + 1} />
						))}
				</>
			) : (
				<>
					{Array(7)
						.fill(null)
						.map((_, key) => (
							<Skeleton
								key={key}
								height={300}
								width={200}
								baseColor="#1e1f21"
								highlightColor="#101111"
								borderRadius={10}
							/>
						))}
				</>
			)}
		</div>
	);
};
