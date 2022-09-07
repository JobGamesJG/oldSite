import { useRouter } from "next/router";
import Link from "next/link";
import type { FC } from "../../../lib/types";

interface PropsButton {
	className?: string;
	title: string;
	style: "main" | "nav" | "danger" | "string" | "transparent" | "black";
	external?: boolean;

	path: string;
	type: "button";
	onClick: () => void;
}

interface PropsLink {
	className?: string;
	title: string;
	style: "main" | "nav" | "danger" | "string" | "transparent" | "black";
	external?: boolean;

	type: "link";
	path: string;
	onClick?: () => void;
}

type Props = { type: "link" | "button" } & (PropsButton | PropsLink);

export const Button: FC<Props> = (props) => {
	const { asPath } = useRouter();

	const { style, title, type, onClick, external, className: _className } = props;
	const className = `button button-${style} ${_className ?? ""} ${
		asPath === props.path ? "active" : ""
	}`;

	return type === "button" ? (
		<button className={className} onClick={onClick}>
			{external && <i className="fa-solid fa-arrow-up-right-from-square" />} {title}
		</button>
	) : style === "nav" ? (
		<Link href={props.path}>
			<a onClick={onClick} className={className}>
				{title}
				<div className="nav-indicator"></div>
			</a>
		</Link>
	) : (
		<Link href={props.path}>
			<a onClick={onClick} className={className}>
				{external && <i className="fa-solid fa-arrow-up-right-from-square" />} {title}
			</a>
		</Link>
	);
};
