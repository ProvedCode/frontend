// import userInfo from "../../../../userInfo.json";
import { ProofBlock } from "../ProofBlock/ProofBlock";
import { TalentsService } from "../../../../services/api-services";
import { useTalent } from "../../../../hooks/useTalent";

export function ListProofs({ id }) {
    // const { proofs } = userInfo[0];

    return (
        <div>
            {TalentsService.getTalent(id).content?.map((el) => {
                return (
                    <ProofBlock
                        key={el.id}
                        link={el.link}
                        text={el.text}
                        created={el.created}
                    />
                );
            })}
        </div>
    );
}
