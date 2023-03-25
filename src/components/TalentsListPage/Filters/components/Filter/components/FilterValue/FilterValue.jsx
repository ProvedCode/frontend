import React from "react";
import s from "./FilterValue.module.scss";

export function FilterValue({ value }) {
	return (
		<div className="filter_value">
			<input type="checkbox" id={s.value} />
			<label htmlFor={s.value}>{value}</label>
		</div>
	);
}
