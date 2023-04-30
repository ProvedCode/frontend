import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../shared/components";
import { TalentsContext } from "../../../context/TalentsContext";
import s from "./Footer.module.scss";
import classNames from "classnames";

export function Footer() {
    const { page, size } = useContext(TalentsContext);
    const titles1 = [
        "For Jobseekers",
        "Search Jobs",
        "Register",
        "Job Alerts",
        "Career",
        "Advice",
    ];
    const titles2 = ["Popular", "Search Jobs", "Employers", "Agencies"];
    const titles3 = [
        "Recruiters",
        " CV Database Access",
        "Advertise Jobs",
        "Search CVs",
        "Test CV Search",
    ];
    const titles4 = [
        "About thecreation",
        "About Us",
        "Contact Us",
        "Work for Us",
        "Help",
        "FAQ",
    ];

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        const onScroll = () => {
            const scrollY = window.scrollY;
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollY > top - window.innerHeight + height / 2) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <footer ref={ref}>
            <div className="__container">
                <div className={s.content}>
                    <div className={s.first_column}>
                        <div
                            className={classNames(s.titles, {
                                [s.visible]: isVisible,
                            })}
                        >
                            <div>
                                {titles1.map((el) => {
                                    return <p className={s.title}>{el}</p>;
                                })}
                            </div>
                            <div>
                                {titles2.map((el) => {
                                    return <p className={s.title}>{el}</p>;
                                })}
                            </div>
                            <div>
                                {titles3.map((el) => {
                                    return <p className={s.title}>{el}</p>;
                                })}
                            </div>
                            <div>
                                {titles4.map((el) => {
                                    return <p className={s.title}>{el}</p>;
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={s.second_column}>
                        <div className={s.motivation}>
                            <div className={s.logo}>
                                <span>Your </span>Future <span>On </span> Your
                                <span> Hands</span>
                            </div>
                            <p>
                                Start with what needs to be done, then do what
                                is possible, and suddenly you will be doing the
                                impossible.
                            </p>
                            <Button
                                onClick={() =>
                                    (window.location.href = `talents?page=${page}&size=${size}#auth`)
                                }
                                className={s.btn}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={s.rights}>
                    <p>© 2023 | All Rights Reserved.</p>
                    <Link to="/" className={s.logo}>
                        Proved<span>Code</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
