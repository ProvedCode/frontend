import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { TalentPage } from "../components/TalentPage";
import { TalentsListPage } from "../components/TalentsListPage";
import "./App.scss";
import { NotFoundPage } from "../components/NotFoundPage/NotFoundPage";
import { RequireAuth } from "../hoc/RequireAuth";

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Navigate to="/talents" replace={true} />} />
				<Route path="talents" element={<TalentsListPage />} />
				<Route
					path="proofs"
					element={<Navigate to="/talents" replace={true} />}
				/>
				<Route element={<RequireAuth redirect={'/talents'}/>}>
					<Route path="talents/:id" element={<TalentPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	);
}
