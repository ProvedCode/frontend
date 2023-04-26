import { useState } from "react";
import { Button, Input, Textarea } from "../../../../shared/components";
import { TalentsService } from "../../../../services/api-services";
import s from "./AddingProofsForm.module.scss";
import plus from "../../../../shared/images/plus.svg";
export function AddingProofsForm({ user, token }) {
    const [activeProofs, setActiveProofs] = useState(false);
    const [link, setLink] = useState("");
    const [text, setText] = useState("");
    const [addProofError, setAddProofError] = useState("");
    
    function handle(e) {
        e.preventDefault();
        const proof = { link, text };
        TalentsService.addProof(proof, user.id, token)
            .then(() => {
                setActiveProofs(false);
                setLink("");
                setText("");
                setAddProofError("");
            })
            .catch((error) => {
                if (error.response.status === 400 || error.response.status === 500) {
                    setAddProofError("Incorrect link or description entered");
                }else{
                    setAddProofError("Something goes wrong");
                }
            });
    }

    return (
        <>
            <div className={s.updating_proofs}>
                <img
                    className={`${s.add} ${activeProofs ? s.rotated : ""}`}
                    onClick={() => {
                        setActiveProofs((prev) => !prev);
                        setAddProofError("");
                    }}
                    src={plus}
                ></img>
            </div>

            {activeProofs && (
                <form action="" className={s.add_proff_form}>
                    <div className={s.description}>
                        <Input
                            onChange={(e) => setLink(e.target.value)}
                            value={link}
                            className={s.pr_link}
                            type="text"
                            placeholder="Paste only one link"
                            autoComplete="off"
                        />

                        <Textarea
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                            className={s.pr_description}
                            placeholder="Write the description"
                        />
                        
                        <div className={s.btns}>
                        <span className={s.error} >{addProofError}</span>
                            <Button className={s.btn} onClick={handle}>
                                Publish
                            </Button>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
}
