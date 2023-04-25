import { useCallback, useContext, useMemo, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import s from "./Header.module.scss";
import { Button } from "../../../shared/components";
import { UserContext } from "../../../context/UserContext";
import { useCookies } from "react-cookie"; // temp

export function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const editPath = useCallback(() => {
        return location.pathname + location.search + "#auth";
    }, [location]);

    const { auth } = useContext(UserContext);
    const profile = JSON.parse(sessionStorage.getItem("profile"));
    const [cookies, setCookie, removeCookie] = useCookies(["token", "user"]);
    console.log(profile);
    const menuItems = useMemo(
        () => [
            // { title: "Home", link: "/" },
            { title: "Talents", link: "/talents" },
            { title: "Proofs", link: "/proofs" },
        ],
        []
    );

    return (
        <header className={s.header}>
            <div className="__container">
                <Link to="/" className={s.logo}>
                    Proved<span>Code</span>
                </Link>
                <nav className={s.nav}>
                    {menuItems.map(({ title, link }, index) => (
                        <NavLink
                            to={link}
                            key={index}
                            className={({ isActive }) => {
                                return isActive ? s.active : "";
                            }}
                        >
                            {title}
                        </NavLink>
                    ))}
                </nav>
                <div className={s.btns}>
                    {!auth ? (
                        <Button
                            className={s.btn}
                            onClick={() =>
                                navigate(editPath(), { replace: true })
                            }
                        >
                            Login / Register
                        </Button>
                    ) : (
                        <>
                            <Link to="/profile" className={s.username}>
                                {profile?.first_name && profile?.last_name
                                    ? profile?.first_name +
                                      " " +
                                      profile?.last_name
                                    : ""}
                            </Link>
                            <Button
                                className={s.btn}
                                onClick={() => {
                                    removeCookie("token");
                                    removeCookie("user");
                                    navigate("/", { replace: true });
                                }}
                            >
                                Log Out
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
