import { useMemo } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import { Button } from "../../../shared/components";

export function Header() {
	const menuItems = useMemo(
		() => [
			{ title: "Home", link: "/" },
			{ title: "Talents", link: "/talents" },
			{ title: "Proofs", link: "/proofs" },
		],
		[]
	);

	return (
		<header className={styles.header}>
			<div className="__container">
				<div className={styles.logo}>
					<Link to="/">Proved<span>Code</span></Link>
				</div>
				<nav className={styles.nav}>
					{menuItems.map(({ title, link }, index) => (
						<Link to={link} key={index}>
							{title}
						</Link>
					))}
				</nav>
				<div className={styles.btns}>
					<Button className={styles.btn}>Login</Button>
					<Button className={styles.btn}>Register</Button>
				</div>
			</div>
		</header>
	);
}
