export const Loading: React.FC<{ bg: boolean }> = ({ bg }) => {
	return (
		<>
			<div className={`loading ${bg ? "active" : ""}`.trim()}>
				<div className="loading-Cirle-Wrapper">
					<div className="loading-Circle main"></div>
				</div>
				<div className="loading-Cirle-Wrapper">
					<div className="loading-Circle"></div>
				</div>
				<div className="loading-Cirle-Wrapper">
					<div className="loading-Circle"></div>
				</div>
				<div className="loading-Cirle-Wrapper">
					<div className="loading-Circle"></div>
				</div>
			</div>
		</>
	);
};
