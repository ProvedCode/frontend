import React from "react";
import { useParams } from "react-router";
import { Layout } from "../Layout";
import s from "./TalentPage.module.scss";
import { Button } from "../../shared/components/Button/Button";
import avatar from "../../shared/images/member-3.png";
import { useNavigate } from "react-router-dom";
import linkedin from "../../shared/images/linkedin.svg";
import github from "../../shared/images/github.svg";

export function TalentPage() {
    const params = useParams();
    const navigate = useNavigate();
    const info = {
        first_name: "Baba",
        last_name: "Klava",
        specialization: "Web-UI",
        skills: ["Java-Script", "React", "Node.js"],
        contacts: ["daniil.ievtukhov@nure.ua", "+380675839817"],
        links: ["https://www.instagram.com/", "https://www.linkedin.com/"],
        bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    };
    return (
        <>
            {/* <h1>{params?.id}</h1> */}
            <div className={s.container}>
                <div className={s.box}>
                    <img id={s.ava} src={avatar} />
                    <div className={s["info-talent"]}>
                        <div className={s.name}>
                            {info.first_name} {info.last_name}
                        </div>
                        <ul>
                            <p>{info.specialization}</p>
                        </ul>

                        <div className={s.skills}>
                            {info.skills.map((skill, index) => (
                                <div className={s.skill} key={index}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <div className={s.links}>
                            {info.links.map((link, index) => (
                                <a className={s.linkss} href={link} key={index}>
                                    {link.includes("linkedin") ? (
                                        <img
                                            className={s.socials}
                                            src={linkedin}
                                        />
                                    ) : (
                                        <img
                                            className={s.socials}
                                            src={github}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={s.about}>
                    <div className={s["ab-title"]}>about</div>

                    <div className={s.bio}>
                        <h3>Bio</h3>
                        <p>{info.bio}</p>
                    </div>
                    <ul>
                        <h3>Contacts:</h3>
                        {info.contacts.map((contact, index) => (
                            <li key={index}>{contact}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={s.proofs}>
                <div className={s.info}>
                    <h3>Proof:</h3>
                </div>
            </div>
            <div className={s.btns}>
                <Button onClick={() => navigate(-1)}>Back</Button>
            </div>
        </>
    );
}
