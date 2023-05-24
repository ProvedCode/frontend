import s from "./ProofBlock.module.scss";
import { Kudos } from "./components/Kudos";
import { TalentsService } from "../../../../../../services/api-services";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../../../../context/UserContext";
export function ProofBlock({
    id,
    link,
    text,
    created,
    status,
    setProofId = null,
    setModalIsOpen = null,
}) {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        TalentsService.getProofsSkills(id)

            .then((response) => {
                setSkills(response.skills);
            })

            .catch((error) => {
                console.log(error);
            });
    }, [id]);
    return (
        <>
            {status === "PUBLISHED" ? (
                <div className={s.out}>
                    <div className={s.proofs}>
                        <div className={s.info}>
                            <h1>Link:</h1>
                            <a
                                className={s.link}
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Click to know me more
                            </a>
                            <div className={s.proof_description}>
                                <div className={s.title}>Description:</div>
                                {text}
                            </div>
                        </div>
                        <div className={s.skills}>
                            {skills
                                ? skills.map((skill, index) => (
                                      <div className={s.skill} key={index}>
                                          {skill.skill}
                                      </div>
                                  ))
                                : ""}
                        </div>
                        <div className={s.date}>
                            <Kudos
                                id={id}
                                setProofId={setProofId}
                                setModalIsOpen={setModalIsOpen}
                            />
                            <b className={s.created}>
                                Created: {created.split(" ")[0]}
                            </b>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
}
