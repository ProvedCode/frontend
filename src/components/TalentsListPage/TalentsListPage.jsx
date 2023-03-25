import React from "react";
import { Layout } from "../Layout";
import { SearchPanel } from "./SearchPanel";
import { Filters } from "./Filters";
import { TalentsList } from "./TalentsList";
import styles from "./TalentsListPage.module.scss";
import { Title } from "./Title";
export function TalentsListPage() {
	return (
		<Layout>
			<div className={styles.grid_container}>
				<SearchPanel />
				<Title />
				<Filters />
				<TalentsList />
			</div>
		</Layout>
	);
}
