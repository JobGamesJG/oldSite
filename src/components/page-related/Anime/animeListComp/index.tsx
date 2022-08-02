import type { AnimeList } from "../../../../lib";
import React, { useState } from "react";
import { AnimeCard } from "../animeCard";
import { AnimatePresence, motion } from "framer-motion";
import { PulseLoader } from "react-spinners";

import { Loading } from "../../../other";

export const AnimeListComp: React.FC<{ animes: AnimeList[] | null }> = ({ animes }) => {
	const [count, setCount] = useState(10000);
	const onClick = () => setCount(count + 14);

	return (
		<AnimatePresence exitBeforeEnter>
			{animes ? (
				<>
					<motion.div
						key="2"
						className="card-list"
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								duration: 1,
								ease: [0.6, -0.05, 0.01, 0.99],
							},
						}}
						exit={{ opacity: 0 }}>
						{animes
							.slice(0, count)
							.filter((x) => x)
							.map((anime, i) => (
								<AnimeCard key={i} {...anime} number={i + 1} />
							))}
					</motion.div>
				</>
			) : (
				<motion.div
					key="1"
					style={{
						width: "100%",
						height: "100%",
						display: "grid",
						placeItems: "center",
					}}
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 1,
							ease: [0.6, -0.05, 0.01, 0.99],
						},
					}}
					exit={{ opacity: 0 }}>
					<div className="louding">
						<Loading bg={true} />
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
