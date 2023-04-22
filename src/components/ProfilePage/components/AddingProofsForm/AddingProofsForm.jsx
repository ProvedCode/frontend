import { useState, useContext } from "react";
import { Button } from "../../../../shared/components";
import { Input } from "../../../../shared/components";
import { Textarea } from "../../../../shared/components";
import { TalentsService } from "../../../../services/api-services";
import { UserContext } from "../../../../context/UserContext";
import s from "./AddingProofsForm.module.scss";
export function AddingProofsForm({ active, setActive }) {
    //const [id, setId]=useState(0)
    const { user, token } = useContext(UserContext);
    const [link, setLink] = useState("");
    const [text, setText] = useState("");
    const [talentsProofs, setTalentsProofs] = useState([]);
    function handle(e) {
        e.preventDefault();
        const proof = { link, text };
        TalentsService.addProof(proof, user.id, token)
            .then(() => {
                if (text !== "") {
                    const allProofs = [...talentsProofs, proof];
                    setTalentsProofs(allProofs);
                    console.log(allProofs);
                }
                setActive(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <form action="" className={s.add_proff_form}>
                {/* <button className={s.close} onClick={() => setActive(false)}>
                    X
                </button> */}
                <div className={s.description}>
                    <Input
                        onChange={(e) => setLink(e.target.value)}
                        value={link}
                        className={s.pr_link}
                        type="text"
                        name="proofsLink"
                        placeholder="Paste only one link"
                    />

                    <Textarea
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        className={s.pr_description}
                        name="proofsDescription"
                        placeholder="Write the description"
                    />
                    <div className={s.btns}>
                        <Button className={s.btn} onClick={handle}>
                            Publish
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
}
