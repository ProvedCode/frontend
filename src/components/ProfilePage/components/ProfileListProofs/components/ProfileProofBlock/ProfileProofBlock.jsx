import s from "./ProfileProofBlock.module.scss";
import { handlerDropdown } from "./dropdown";

export function ProfileProofBlock({ link, text, status, created }) {
    window.onclick = (event) => {
        handlerDropdown(event, s.dropdown_content, s.show);
    };
    // const status = "PUBLISHED";
    return (
        <div className={s.out}>
            <div className={s.proofs}>
                <div className={s.info}>
                    <div className={s.settings}>
                        <button className={s.dropbtn}></button>
                        <div id="cityDropdown" className={s.dropdown_content}>
                            {status === "DRAFT" ? <button>Edit</button> : ""}
                            {status === "DRAFT" || status === "HIDDEN" ? <button>Publish</button> : ""}
                            {status === "PUBLISHED" ? <button>Hide</button> : ""}
                            <button>Delete</button>
                        </div>
                    </div>
                    <span className={s.status}>{status.toLocaleLowerCase()}</span>

                    <h1>Link:</h1>
                    <a className={s.link} href={link} target="_blank">
                        Click to know me more
                    </a>
                    <div className={s.proof_description}>
                        <div className={s.title}>Description:</div>
                        {text}
                    </div>
                </div>
                <div className={s.date}>
                    <b className={s.created}>Created: {created.split(" ")[0]}</b>
                </div>
            </div>
        </div>
    );
}
