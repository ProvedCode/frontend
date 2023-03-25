import React, { useMemo } from "react";
import s from "./FilterValue.module.scss";

export function FilterValue({ value }) {
	const inputId = useMemo(
		() => `my-input-${Math.random().toString(36).slice(2, 9)}`,
		[]
	);

	return (
		<div className={s.filter_value}>
			<input type="checkbox" id={inputId} />
			<label htmlFor={inputId} />
			<div>{value}</div>
		</div>
	);
}
