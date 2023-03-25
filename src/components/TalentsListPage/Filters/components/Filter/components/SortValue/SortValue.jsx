import React from "react";
import s from "./SortValue.module.scss";

export function SortValue({ value }) {
    return <div className={s.sort_value}>{value}</div>;
}
