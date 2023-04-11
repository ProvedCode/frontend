import { useCallback, useContext, useMemo, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import { Button } from "../../../shared/components";
import { UserContext } from "../../../context/UserContext";
import { useCookies } from "react-cookie";  // temp

export function Header() {
	const navigate = useNavigate();
	const location = useLocation();
	const editPath = useCallback(() => {
		return location.pathname + location.search + "#auth";
	}, [location]);

    const { auth } = useContext(UserContext);
    const [cookies, setCookie, removeCookie] = useCookies(['token']);  // temp

	const menuItems = useMemo(
		() => [
			{ title: "Home", link: "/" },
			{ title: "Talents", link: "/talents" },
			// { title: "Proofs", link: "/proofs" },
		],
		[]
	);

	return (
		<header className={styles.header}>
			<div className="__container">
				<Link to="/" className={styles.logo}>
					Proved<span>Code</span>
				</Link>
				<nav className={styles.nav}>
					{menuItems.map(({ title, link }, index) => (
						<NavLink
							to={link}
							key={index}
							className={({ isActive }) => {
								return isActive ? styles.active : "";
							}}>
							{title}
						</NavLink>
					))}
				</nav>
				<div className={styles.btns}>
					{!auth ? (
						<Button
							className={styles.btn}
							onClick={() => navigate(editPath(), { replace: true })}>
							Login / Register
						</Button>
					) : (
						<Button
							className={styles.btn}
							onClick={() => removeCookie('token')}>
							Log Out
						</Button>
					)}
				</div>
			</div>
		</header>
	);
}
