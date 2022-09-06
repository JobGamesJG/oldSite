import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import type { AnimeList } from "../../../../lib";
import React, { useEffect, useState } from "react";
import Config from "../../../../../config.json";

type Props = AnimeList & { number: number };

export const AnimeCard: React.FC<Props> = (props) => {
	const [active, setActive] = useState(false);
	const [hover, setHover] = useState(false);
	const [modal, setModal] = useState(false);
	const control = useAnimation();

	const variants: Variants = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				duration: 0.5 + 0.2 * (props.number % 10 || 10),
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	const variants2: Variants = {
		disabled: {
			opacity: 0,
			transition: {
				duration: 0.05,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
		enabled: {
			opacity: 1,
			transition: {
				duration: 0.05,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	const variants2_5: Variants = {
		disabled: {
			opacity: 0,
			scale: 0.8,
			transition: {
				duration: 0.3,
				delay: 0.05,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
		enabled: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.3,
				delay: 0.05,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	useEffect(() => {
		if (modal) void control.start("enabled");
		else void control.start("disabled");
	}, [control, modal]);

	return (
		<div className="card-card-wrapper">
			<AnimatePresence exitBeforeEnter>
				{active && (
					<motion.div
						animate={control}
						variants={variants2}
						initial="disabled"
						className={`card-popup-wrapper ${active ? "active" : ""}`.trim()}>
						<div className={`card-popup ${active ? "active" : ""}`.trim()}>
							<motion.div
								animate={control}
								variants={variants2_5}
								initial="disabled"
								className={`card-popup-inner ${props.status
									.replace(" ", "")
									.replace(" ", "")}`.trim()}>
								<div className="popup-placement">
									<div className="popup-header">
										<a className="popup-title" onClick={() => window.open(props.url)}>
											<i className="fa-solid fa-arrow-up-right-from-square"></i>
											<p className="popup-title">{props.title}</p>
										</a>
										<a onClick={() => [setModal(!modal), setTimeout(() => setActive(!modal), 200)]}>
											<i className="fas fa-times"></i>
										</a>
									</div>
									<div className="popup-info">
										<div className="popup-item">
											<p className="popup-text">status:</p>
											<p className="popup-prop">
												<i className={props.icon}></i> {props.status}
											</p>
										</div>
										<div className="popup-item">
											<p className="popup-text">eps:</p>
											<p className="popup-prop">
												<i className="fa-solid fa-ticket"></i> {props.eps_watchted} /{" "}
												{props.eps_num}
											</p>
										</div>
										<div className="popup-item">
											<p className="popup-text">rating:</p>
											<p className="popup-prop">
												<i className="fa-solid fa-star"></i> {props.rating} / 10
											</p>
										</div>
										<div className="popup-item">
											<p className="popup-text">type:</p>
											<p className="popup-prop">
												<i className={props.animeTypeIcon}></i> {props.animeType}
											</p>
										</div>
										<div className="popup-item">
											<p className="popup-text">tags:</p>
											<p className="popup-prop">{props.genres}</p>
										</div>
										<AnimatePresence exitBeforeEnter>
											{props.genres.includes("Ecchi") && (
												<div className="popup-item">
													<p className="popup-text">description:</p>
													<p className="popup-prop">For the plot😌😀</p>
												</div>
											)}
										</AnimatePresence>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				onHoverStart={active ? () => setHover(false) : () => setHover(true)} //{() => setHover(true)}
				onHoverEnd={() => setHover(false)}
				variants={variants}
				initial="initial"
				animate="animate"
				className={`card ${hover ? " active" : ""}`.trim()}
				onClick={
					active
						? () => [setHover(false), setModal(false)]
						: () => [setHover(!hover), setModal(!modal)]
				}>
				<img src={props.img} alt="" className="card-img" />
				<div className="card-overlap"></div>
				<div
					onClick={() => setActive(!active)}
					className={`card-info ${hover ? "active" : ""}`.trim()}>
					<p className="card-title">{props.title}</p>
				</div>
			</motion.div>
		</div>
	);
};
