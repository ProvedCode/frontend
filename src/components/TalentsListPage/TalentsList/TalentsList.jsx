import s from "./TalentsList.module.scss";
import { TalentCard } from "./components/TalentCard";
import data from "./shared/data/response.json";
import { useEffect, useState } from "react";

export function TalentsList() {
	const [talents, setTalents] = useState([]);

	useEffect(() => {
		setTalents(data.content);
	}, []);

	return (
		<div className={s.talents_list}>
			{talents.map((talent) => (
				<TalentCard key={talent.id} talent={talent} />
			))}
		</div>
	);
}
