import { motion, AnimatePresence, useAnimation, Variants } from "framer-motion";
import type { AnimeList } from "../../../../lib";
import React, { useEffect, useState } from "react";

type Props = AnimeList & { number: number };

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

const variants3: Variants = {
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

export const AnimeCard: React.FC<Props> = (props) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [hover, setHover] = useState(false);
	const control = useAnimation();

	useEffect(() => {
		if (modalOpen) void control.start("enabled");
		else void control.start("disabled");
	}, [control, modalOpen]);

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

	return (
		<div className="card-container">
			<AnimatePresence exitBeforeEnter>
				{modalOpen && (
					<motion.div
						className={`modal-container ${modalOpen ? "active" : ""}`.trim()}
						animate={control}
						variants={variants2}
						initial="disabled">
						<div className="modal-outer">
							<motion.div
								className={`modal ${props.status.replaceAll(" ", "")}`.trim()}
								animate={control}
								initial="disabled"
								variants={variants3}>
								<div className="modal-inner">
									<div className="modal-header">
										<a className="popup-title" onClick={() => window.open(props.url)}>
											<i className="fa-solid fa-arrow-up-right-from-square"></i>
											<p>{props.title}</p>
										</a>
										<a>
											<i
												className="fas fa-times"
												onClick={() => [
													control.start("disabled"),
													setTimeout(() => setModalOpen(!modalOpen), 200),
												]}></i>
										</a>
									</div>
									<div className="modal-info">
										<div className="modal-item">
											<p className="modal-text">status:</p>
											<p className="modal-prop">
												<i className={props.icon}></i> {props.status}
											</p>
										</div>
										<div className="modal-item">
											<p className="modal-text">eps:</p>
											<p className="modal-prop">
												<i className="fa-solid fa-ticket"></i> {props.eps_watchted} /{" "}
												{props.eps_num}
											</p>
										</div>
										<div className="modal-item">
											<p className="modal-text">rating:</p>
											<p className="modal-prop">
												<i className="fa-solid fa-star"></i> {props.rating} / 10
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				onHoverStart={modalOpen ? () => setHover(false) : () => setHover(true)} //{() => setHover(true)}
				onHoverEnd={() => setHover(false)}
				variants={variants}
				initial="initial"
				animate="animate"
				className={`card ${hover ? " active" : ""}`.trim()}
				onClick={() => [setHover(!hover), setModalOpen(!modalOpen)]}>
				<img src={props.img} alt="" />
				<div
					onClick={() => setModalOpen(!modalOpen)}
					className={`card-info ${hover ? "active" : ""}`.trim()}>
					<p>{props.title}</p>
				</div>
			</motion.div>
		</div>
	);
};
