import { useRouter } from "next/router";
import Link from "next/link";
import type { FC } from "../../../lib/types";

interface PropsButton {
	className?: string;
	title?: string;
	icon?: string;
	style: "main" | "header" | "slider" | "danger" | "string" | "transparent" | "black";
	external?: boolean;

	type: "button";
	path?: string;
	onClick: () => void;
}

interface PropsLink {
	className?: string;
	title?: string;
	icon?: string;
	style: "main" | "header" | "slider" | "danger" | "string" | "transparent" | "black";
	external?: boolean;

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

	return icon ? (
		type === "button" ? (
			<button className={className} onClick={onClick}>
				<i className={icon} /> {Boolean(title) && title}
				{style === "header" ? <div className="header-indicator" /> : <></>}
			</button>
		) : (
			<Link href={props.path}>
				<a onClick={onClick} className={className}>
					<i className={icon} /> {Boolean(title) && title}
					{style === "header" ? <div className="header-indicator" /> : <></>}
				</a>
			</Link>
		)
	) : type === "button" ? (
		<button className={className} onClick={onClick}>
			{external && <i className="fa-solid fa-arrow-up-right-from-square" />} {title}
		</button>
	) : style === "header" ? (
		<Link href={props.path}>
			<button onClick={onClick} className={className}>
				{title}
				<div className="header-indicator" />
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
