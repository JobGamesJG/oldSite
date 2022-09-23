import { AnimatePresence, motion, Variants } from "framer-motion";
import { Button } from "../../";
import React, { useState } from "react";

export const ImageSlider: React.FC<{ slides: any | null }> = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const [change, setChange] = useState(0);

	const nextSlide = () => {
		setCurrent(current == slides.length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current == 0 ? slides.length - 1 : current - 1);
	};

	const jumpSlide = (now: number) => {
		setCurrent(now);
	};

	const variants: Variants = {
		initial: { opacity: 0.7 },
		disabled: {
			opacity: 1,
			transition: {
				duration: 0.7,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	if (!Array.isArray(slides) || slides.length <= 0) return null;

	return (
		<section className="slider-wrapper">
			<div className="slider">
				<a className="slider-arrow L" onClick={prevSlide}>
					<i className="fa-solid fa-chevron-left"></i>
				</a>
				<div className="slider-image-wrapper">
					<div className="slider-image">
						{slides.map((slide, index) => {
							return (
								<div className={`slide ${index == current ? "active" : ""}`.trim()} key={index}>
									<img src={slide.image} alt="" className="slider-image" />
								</div>
							);
						})}
					</div>
					<div className="bullets">
						{slides.map((slide, index) => {
							return (
								<div
									className={`bullet ${index == current ? "active" : ""}`.trim()}
									key={index}
									onClick={() => [jumpSlide(index)]}></div>
							);
						})}
					</div>
				</div>

				<Button
					style="black"
					type="button"
					icon="fa-solid fa-chevron-right"
					onClick={nextSlide}></Button>
				<a className="slider-arrow R" onClick={nextSlide}>
					<i className="fa-solid fa-chevron-right"></i>
				</a>
			</div>
		</section>
	);
};
