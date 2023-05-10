import React, {
    useCallback,
    forwardRef,
    useImperativeHandle,
    useEffect,
    useState,
    useContext,
} from "react";
import { UserContext } from "../../../../context/UserContext";
import { Button, Textarea } from "../../../../shared/components";
import { TalentsService } from "../../../../services/api-services";
import edit from "./images/edit.svg";
import s from "./SponsorAbout.module.scss";

export const SponsorAbout = forwardRef((props, ref) => {
    const {
        profile,
        editting,
        setEditting,
        save,
        setModalIsOpen,
        setCancelModalIsOpen,
        saveError,
    } = props;

    return (
        <div className={s.about}>
            <button
                className={s.edit}
                onClick={() => {
                    editting ? setCancelModalIsOpen(true) : setEditting(true);
                }}
            >
                <img src={edit} alt="edit" />
            </button>

            {editting ? (
                <div className={s.btns}>
                    <Button
                        onClick={() => setCancelModalIsOpen(true)}
                        className={s.btn}
                    >
                        Cancel
                    </Button>
                    <Button onClick={save} className={s.btn}>
                        Save
                    </Button>
                    <Button
                        className={s.btn}
                        onClick={() => {
                            setModalIsOpen(true);
                        }}
                    >
                        Delete profile
                    </Button>
                </div>
            ) : (
                ""
            )}
            {saveError && <div className={s.save_error}>{saveError}</div>}
        </div>
    );
});
