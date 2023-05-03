import React, { useEffect, useRef, useCallback } from "react";
import s from "./CancelEditProofModal.module.scss";

import { Button } from "../../../../../../shared/components";

export function CancelEditProofModal({ cancelModalIsOpen, setCancelModalIsOpen, editProof, setEditProof }) {
    const window = useRef();
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!window.current.contains(e.target)) {
                setCancelModalIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setCancelModalIsOpen]);

    const showModal = useCallback(() => {
        setCancelModalIsOpen(true);
        document.body.style.overflowY = "hidden";
    }, [setCancelModalIsOpen]);

    const hideModal = useCallback(() => {
        setCancelModalIsOpen(false);
        document.body.style.overflowY = "auto";
    }, [setCancelModalIsOpen]);

    useEffect(() => {
        if (cancelModalIsOpen) {
            showModal();
        } else {
            hideModal();
        }
    }, [cancelModalIsOpen, showModal, hideModal]);

    return (
        <div className={`${s.modal} ${cancelModalIsOpen ? s.show : s.hide}`}>
            <div ref={window} className={`${s.block_modal} ${cancelModalIsOpen ? s.show : s.hide}`}>
                <div className={s.header}>
                    <span>Canceling</span>
                    <button className={s.close} onClick={() => setCancelModalIsOpen(false)}>
                        &#215;
                    </button>
                </div>
                <div className={s.body}>
                    <p>Are you sure you want to undo all changes?</p>
                </div>
                <div className={s.btns}>
                    <Button
                        className={s.btn}
                        onClick={() => {
                            setEditProof(
                                editProof.map((obj) => {
                                    return {
                                        ...obj,
                                        edit: false,
                                    };
                                })
                            );
                            hideModal();
                        }}
                    >
                        Yes, I want
                    </Button>
                    <Button className={s.btn} onClick={() => setCancelModalIsOpen(false)}>
                        No, I don't
                    </Button>
                </div>
            </div>
        </div>
    );
}
