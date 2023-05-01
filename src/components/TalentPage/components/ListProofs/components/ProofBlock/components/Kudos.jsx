import s from "./Kudos.module.scss";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../../../../../../../context/UserContext";
import { TalentsService } from "../../../../../../../services/api-services";
import { TalentsContext } from "../../../../../../../context/TalentsContext";
import { useSearchParams } from "react-router-dom";

export function Kudos({ id }) {
    const [kudos, setKudos] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const { token } = useContext(UserContext);
    const { page, size } = useContext(TalentsContext);
    const { user } = useContext(UserContext);
    const [pages, setPages] = useState({ page: 0, size: 5, orderBy: "desc" });
    const [countOfPages, setCountOfPages] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();
    const { talentsProofs, setTalentsProofs } = useContext(UserContext);
    const [proofs, setProofs] = useState([]);

    const myProofs = talentsProofs.map((el) => el.id);

    useEffect(() => {
        TalentsService.getKudos(id, token)
            .then((kudos) => {
                setKudos(kudos.amount);
                setIsLiked(kudos.has_kudos);
            })
            .catch((err) => console.log(err));
    }, []);

    function likeProof() {
        if (token) {
            if (!isLiked) {
                TalentsService.putKudos(id, token)
                    .then((response) => {
                        setKudos(kudos + 1);
                        setIsLiked(!isLiked);
                    })
                    .catch((err) => console.log(err));
            } else {
                TalentsService.deleteKudos(id, token)
                    .then(() => {
                        setKudos(kudos - 1);
                        setIsLiked(!isLiked);
                    })
                    .catch((err) => console.log(err));
            }
        } else {
            window.location.href = `proofs?page=${page}&size=${size}#auth`;
        }
    }
    //ПОЛУЧАЕМ СВОИ ПРУФЫ

    useEffect(() => {
        if (user.id) {
            TalentsService.getProofs(user.id, token)
                .then((proofs) => {
                    setTalentsProofs(proofs);
                })
                .catch((err) => console.log(err));
        }
    }, [id, token, talentsProofs.length, setTalentsProofs]);

    useEffect(() => {
        TalentsService.getAllProofs(
            searchParams.get("page") || "",
            pages.size,
            pages.orderBy
        ).then((res) => {
            setProofs(res.content);
            setCountOfPages(res.total_pages);
        });
    }, [pages, page, size]);

    return (
        <div className={s.kudos_block}>
            <svg
                cursor="pointer"
                xmlns="http://www.w3.org/2000/svg"
                color="#676767"
                width="35"
                height="35"
                fill="currentColor"
                viewBox="0 0 16 16"
                onClick={myProofs.includes(id) ? () => {} : likeProof}
                className={` ${isLiked ? s.kudos_liked : s.kudos}`}
            >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
            </svg>
            <div className={s.count}>{kudos} </div>
        </div>
    );
}
