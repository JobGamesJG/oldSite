import { useRouter } from "next/router";
import Link from "next/link";
import type { FC } from "../../../lib/types";

interface PropsButton {
	className?: string;
	title: string;
	style: "main" | "header" | "danger" | "string" | "transparent" | "black";
	external?: boolean;

	icon?: string;
	path: string;
	type: "button";
	onClick: () => void;
}

interface PropsLink {
	className?: string;
	title: string;
	style: "main" | "header" | "danger" | "string" | "transparent" | "black";
	external?: boolean;

	icon?: string;
	type: "link";
	path: string;
	onClick?: () => void;
}

type Props = { type: "link" | "button" } & (PropsButton | PropsLink);

export const Button: FC<Props> = (props) => {
	const { asPath } = useRouter();

	const { style, title, type, onClick, external, className: _className, icon } = props;
	const className = `button button-${style} ${_className ?? ""} ${
		asPath === props.path ? "active" : ""
	}`;

	return type === "button" ? (
		<button className={className} onClick={onClick}>
			{external && <i className="fa-solid fa-arrow-up-right-from-square" />} {title}
		</button>
	) : style === "header" ? (
		<Link href={props.path}>
			<button onClick={onClick} className={className}>
				<a>
					<i className={icon}></i>
					{title}
				</a>
				<div className="header-indicator"></div>
			</button>
		</Link>
	) : (
		<Link href={props.path}>
			<a onClick={onClick} className={className}>
				{external && <i className="fa-solid fa-arrow-up-right-from-square" />} {title}
			</a>
		</Link>
	);
};
