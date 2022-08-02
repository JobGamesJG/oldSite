import { motion, Variants } from "framer-motion";

export const Socials: React.FC = () => {
	const variants: Variants = {
		initial: {
			transform: "translateY(10px)",
			opacity: 0,
		},
		animate: {
			transform: "translateY(0px)",
			opacity: 1,
			transition: {
				delay: 0.1,
				duration: 0.3,
				ease: [0.6, 0, 0.17, 1],
			},
		},
		animate2: {
			transform: "translateY(0px)",
			opacity: 1,
			transition: {
				delay: 0.2,
				duration: 0.3,
				ease: [0.6, 0, 0.17, 1],
			},
		},
		animate3: {
			transform: "translateY(0px)",
			opacity: 1,
			transition: {
				delay: 0.3,
				duration: 0.3,
				ease: [0.6, 0, 0.17, 1],
			},
		},
		animate4: {
			transform: "translateY(0px)",
			opacity: 1,
			transition: {
				delay: 0.4,
				duration: 0.3,
				ease: [0.6, 0, 0.17, 1],
			},
		},
	};

	return (
		<>
			<div className="socials">
				<motion.div initial="initial" animate="animate" variants={variants}>
					<a className="fa-brands fa-github" href="https://github.com/JobGamesJG"></a>
				</motion.div>
				<motion.div initial="initial" animate="animate2" variants={variants}>
					<a
						className="fa-brands fa-discord"
						href="https://discord.com/users/679240313952403457"></a>
				</motion.div>
				<motion.div initial="initial" animate="animate3" variants={variants}>
					<a className="fa-brands fa-twitter" href="https://twitter.com/JobGamesJG"></a>
				</motion.div>
				<motion.div initial="initial" animate="animate3" variants={variants}>
					<a
						className="fa-brands fa-youtube"
						href="https://www.youtube.com/channel/UCB76PdQLx9wg4DCKbsVhyvA"></a>
				</motion.div>
			</div>
		</>
	);
};
