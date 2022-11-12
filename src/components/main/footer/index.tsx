import { Button } from "../../";

import config from "../../../../config.json";

export const Footer: React.FC = () => {
	return (
		<div className="footer-container">
			<div className="footer-inner">
				<div className="footer-socials">
					{config.pages.home["buttons-prefix"]}{" "}
					{config.pages.home.buttons.map((data, key) => (
						<Button key={key} {...data} type="link" style="string" />
					))}
				</div>
				<div className="footer-links">
					<Button path="/" title="Home" external style="string" type="link" />
					<Button path="/about" title="About" external style="string" type="link" />
				</div>
				<div className="footer-info">
					<img className="footer-LG" src="https://cdn.jobgamesjg.xyz/files/JG-L.png" alt="" />
					<p>
						made by <i>JobGamesJG</i>
					</p>
				</div>
			</div>
		</div>
	);
};
