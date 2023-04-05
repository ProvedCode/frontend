import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Layout } from "../Layout";
import s from "./TalentPage.module.scss";
import { Button } from "../../shared/components/Button/Button";
import avatar from "../../shared/images/member-3.png";
import { useNavigate } from "react-router-dom";
import linkedin from "../../shared/images/linkedin.svg";
import github from "../../shared/images/github.svg";
import { TalentsService } from "../../services/api-services";
import { TalentsContext } from "../../context/TalentsContext";
import useTalent from "../../hooks/useTalent";

export function TalentPage() {
    const params = useParams();
    const navigate = useNavigate();

    let { talent: info, isLoading } = useTalent(params.id);

    if (isLoading || !info) {
        return <></>;
    }

    return (
        <>
            <div className={s.btns}>
                <Button onClick={() => navigate(-1)}>Back</Button>
            </div>
            <div className={s.container}>
                <div className={s.talent_data}>
                    <img className={s.ava} src={info.image} alt="avatar" />
                    <div className={s.info_talent}>
                        <div className={s.name}>
                            {info.first_name} {info.last_name}
                        </div>
                        <ul>
                            <li>{info?.specialization}</li>
                        </ul>

                        <div className={s.skills}>
                            {info.skills?.map((skill, talent) => (
                                <div className={s.skill} key={talent}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <div className={s.links}>
                            {info.links?.map((link, talent) => (
                                <a className={s.link} href={link} key={talent}>
                                    {link.includes("linkedin") ? (
                                        <img
                                            className={s.socials}
                                            src={linkedin}
                                            alt=" media icon"
                                        />
                                    ) : (
                                        <img
                                            className={s.socials}
                                            src={github}
                                            alt=" media icon"
                                        />
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={s.about}>
                    <div className={s.ab_title}>about</div>

                    <h3>Bio</h3>
                    <div className={s.bio}>
                        <li>{info.bio}</li>
                    </div>
                    <h3>Contacts:</h3>
                    <ul>
                        {info.contacts?.map((contact, talent) => (
                            <li key={talent}>{contact}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* <div className={s.proofs}>
                <div className={s.info}>
                    <h3>Proof:</h3>
                </div>
            </div> */}
        </>
    );
}
