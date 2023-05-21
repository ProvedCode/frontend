import React, { useContext } from "react";
import { TalentsService } from "../../../../../../services/api-services";
import { UserContext } from "../../../../../../context/UserContext";
import Select, { components } from "react-select";

export function ValueCross(props) {
    const { proof, skills, setSkills, setDeletedSkills, deletedSkills } = props;

    const handleClearOne = () => {
        const nowSkill = skills.find(
            (skill) => skill.id === arguments[0].data.id
        );
        setDeletedSkills([nowSkill, ...deletedSkills]);
        setSkills(skills.filter((skill) => skill !== nowSkill));
    };
    return (
        <>
            {skills.length > 0 ? (
                <components.MultiValueRemove {...props}>
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={handleClearOne}
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        x
                    </span>
                </components.MultiValueRemove>
            ) : (
                <components.MultiValueRemove {...props}>
                    <span
                        style={{ cursor: "pointer" }}
                        onMouseDown={(e) => e.stopPropagation()}
                    >
                        x
                    </span>
                </components.MultiValueRemove>
            )}
        </>
    );
}
