import React from "react";
import { FilterValue } from "./components/FilterValue";
import s from './Filter.module.scss';


export function Filter() {
    return <div className={s.filter}>
        <div className="filter_title">Specialization</div>
        <div className="filter_values">
            <FilterValue value={"text"}/>
        </div>
    </div>;
}
