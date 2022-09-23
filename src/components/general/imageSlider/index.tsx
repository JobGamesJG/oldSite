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

	if (!Array.isArray(slides) || slides.length <= 0) return null;

	return (
		<section className="slider-container">
			<div className="slider">
				<div className="slider-image-wrapper">
					<div className="slider-image">
						{slides.map((slide, index) => {
							return (
								<div className={`slide ${index == current ? "active" : ""}`.trim()} key={index}>
									<img src={slide.image} alt="" />
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
			</div>
			<div className="button-container">
				<Button
					style="slider"
					type="button"
					icon="fa-solid fa-chevron-left"
					onClick={prevSlide}></Button>
				<Button
					style="slider"
					type="button"
					icon="fa-solid fa-chevron-right"
					onClick={nextSlide}></Button>
			</div>
		</section>
	);
};
