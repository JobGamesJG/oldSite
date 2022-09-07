export const Loading: React.FC<{ bg: boolean }> = ({ bg }) => {
	return <div className={`loader ${bg ? "active" : ""}`.trim()} />;
};
