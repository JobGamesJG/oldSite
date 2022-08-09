import React, { useState } from "react";

export const IconButton: React.FC<{ slides: any | null }> = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current == length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current == 0 ? length - 1 : current - 1);
	};

	const jumpSlide = (now: number) => {
		setCurrent(now);
	};

	if (!Array.isArray(slides) || slides.length <= 0) return null;

	return (
		<section className="slider">
			<a className="slider-arrowL">
				<i className="fa-solid fa-caret-left" onClick={prevSlide}></i>
			</a>
			<div className="slides-wrapper">
				<div className="slides">
					{slides.map((slide, index) => {
						return (
							<div className={`slide ${index == current ? "active" : ""}`.trim()} key={index}>
								<img src={slide.image} alt="" className={`slide-image fm${slide.format}`.trim()} />
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
								onClick={() => jumpSlide(index)}></div>
						);
					})}
				</div>
			</div>
			<a className="slider-arrowR">
				<i className="fa-solid fa-caret-right" onClick={nextSlide}></i>
			</a>
		</section>
	);
};
