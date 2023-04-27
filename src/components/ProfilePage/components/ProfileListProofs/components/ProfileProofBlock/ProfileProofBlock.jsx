import { useEffect, useState } from "react";
import { TalentsService } from "../../../../../../services/api-services";
import s from "./ProfileProofBlock.module.scss";
import { handlerDropdown } from "./dropdown";
import { DeletingProofModal } from "./components/DeletingProofModal";
import { Kudos } from "../../../../../TalentPage/components/ListProofs/components/ProofBlock/components/Kudos";
export function ProfileProofBlock({
    id,
    userID,
    token,
    link,
    text,
    status,
    created,
    talentsProofs,
    setTalentsProofs,
    editProof,
    setEditProof,
}) {
    window.onclick = (event) => {
        handlerDropdown(event, s.dropdown_content, s.show);
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [kudos, setKudos] = useState(0);
    useEffect(() => {
        TalentsService.getKudos(id, token)
            .then((kudos) => {
                setKudos(kudos.amount);
            })
            .catch((err) => console.log(err));
    }, []);
    function save(newStatus) {
        const newProof = {
            link: link,
            text: text,
            status: newStatus,
            created: created,
        };
        TalentsService.editProof(userID, id, newProof, token)
            .then(() => {
                setTalentsProofs(
                    talentsProofs.map((obj) => {
                        if (obj.id === id) {
                            return { id: id, ...newProof };
                        }
                        return obj;
                    })
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <DeletingProofModal
                id={id}
                userID={userID}
                token={token}
                modalIsOpen={modalIsOpen}
                setModalIsOpen={setModalIsOpen}
                talentsProofs={talentsProofs}
                setTalentsProofs={setTalentsProofs}
            />
            <div className={s.out}>
                <div className={s.proofs}>
                    <div className={s.info}>
                        <div className={s.settings}>
                            <button className={s.dropbtn}></button>
                            <div
                                id="cityDropdown"
                                className={s.dropdown_content}
                            >
                                {status === "DRAFT" ? (
                                    <button
                                        onClick={() => {
                                            setEditProof(
                                                editProof.map((obj) => {
                                                    return {
                                                        ...obj,
                                                        edit: obj.id === id,
                                                    };
                                                })
                                            );
                                        }}
                                    >
                                        Edit
                                    </button>
                                ) : (
                                    ""
                                )}
                                {status === "DRAFT" || status === "HIDDEN" ? (
                                    <button onClick={() => save("PUBLISHED")}>
                                        Publish
                                    </button>
                                ) : (
                                    ""
                                )}
                                {status === "PUBLISHED" ? (
                                    <button onClick={() => save("HIDDEN")}>
                                        Hide
                                    </button>
                                ) : (
                                    ""
                                )}
                                <button onClick={() => setModalIsOpen(true)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                        <span className={s.status}>
                            {status.toLocaleLowerCase()}
                        </span>

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
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className={s.date}>
                        <Kudos id={id} />
                        <b className={s.created}>
                            Created: {created.split(" ")[0]}
                        </b>
                    </div>
                </div>
            </div>
        </>
    );
}
