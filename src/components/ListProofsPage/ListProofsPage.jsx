import { TalentsService } from "../../services/api-services";
import { useState } from "react";
import { useEffect } from "react";
import { ProofBlock } from "../TalentPage/components/ProofBlock/ProofBlock";
import { Button } from "../../shared/components";
import s from "../ListProofsPage/ListProofsPage.module.scss";

export function ListProofsPage() {
    const [proofs, setProofs] = useState({});

    useEffect(() => {
        TalentsService.getProofs().then((res) => setProofs(res));
    }, []);

    const filter = (proofs) => {
        const data = [...proofs].sort(
            (a, b) => new Date(b.created) - new Date(a.created)
        );
        return data;
    };

    const filterIncrease = () => {
        setProofs(filter(proofs));
    };

    const filterDecrease = () => {
        const data = [...proofs].sort(
            (a, b) => new Date(b.created) - new Date(a.created)
        );
        setProofs(filter(proofs).reverse());
    };

    return (
        <div>
            <div className={s.buttons}>
                <Button className={s.button} onClick={filterIncrease}>
                    Sort by date: descending
                </Button>
                <Button className={s.button} onClick={filterDecrease}>
                    Sort by date: ascending
                </Button>
            </div>

            {proofs.length > 0 ? (
                proofs.map((el) => {
                    return (
                        <ProofBlock
                            key={el.id}
                            link={el.link}
                            text={el.text}
                            created={el.created}
                        />
                    );
                })
            ) : (
                <div></div>
            )}
        </div>
    );
}
