import { Button, IconButton } from "../../";

import config from "../../../../config.json";

export const Footer: React.FC = () => {
	return (
		<div className="footer-container">
			<div className="footer-inner">
				<div className="footer-socials">
					{config.pages.home["buttons-prefix"]}{" "}
					{config.pages.home.buttons.map((data, key) => (
						<IconButton key={key} {...data} type="link" style={data.title ? "black" : "string"} />
					))}
				</div>
				<div className="footer-links">
					<Button path="/" title="Home" style="string" type="link" />
					<Button path="/about" title="About" style="string" type="link" />
				</div>
				<div className="footer-info">
					<img className="footer-LG" src="https://cdn.jobgamesjg.xyz/files/JG-L.png" alt="" />
					<p>made by JobGamesJG</p>
				</div>
			</div>
		</div>
	);
};
