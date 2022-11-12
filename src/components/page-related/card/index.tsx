import React, { useState } from "react";

import config from "../../../../config.json";
import { FC } from "../../../lib";

interface PropsCard {
	title: string;
	image: string;
	details: string;
	onClick: () => void;
}

type Props = PropsCard;

export const Card: FC<Props> = (props) => {
	const { title, image, details, onClick } = props;

	return (
		<div className="choose-item" onClick={onClick}>
			<div className="img-container">
				<img src={image} alt="" />
			</div>
			<div className="choose-details">
				<h1>{title}</h1>
				<p>{details}</p>
			</div>
		</div>
	);
};
