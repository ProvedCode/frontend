import { ProfileProofBlock } from "./components/ProfileProofBlock";
import { TalentsService } from "../../../../services/api-services";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../context/UserContext";
import s from "./ProfileListProofs.module.scss";

export function ProfileListProofs({ id }) {
    const [talentsProofs, setTalentsProofs] = useState([]);
    const { token } = useContext(UserContext);

    useEffect(() => {
        TalentsService.getProofs(id, token)
            .then((proofs) => {
                setTalentsProofs(proofs);
            })
            .catch((err) => console.log(err));
    }, [talentsProofs]);

    return (
        <>
            {talentsProofs.length > 0 ? (
                <div>
                    {talentsProofs.map((el) => {
                        return (
                            <ProfileProofBlock
                                key={el.id}
                                link={el.link}
                                text={el.text}
                                status={el.status}
                                created={el.created}
                            />
                        );
                    })}
                </div>
            ) : (
                <span>
                    <div className={s.no_proofs}>No proofs yet!</div>
                </span>
            )}
        </>
    );
}
