import { Routes, Route, Navigate } from "react-router-dom";
import { TalentsListPage } from "../components/TalentsListPage";
import "./App.scss";

export function App() {
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/talents" replace={true}/>}/>
            <Route path="/talents" element={<TalentsListPage />}/>
            <Route path="/proofs" element={<Navigate to="/talents" replace={true} />}/>
            {/* <Route path="/talents/:id" element={<TalentPage />}/> */}
            {/* <Route path="/*" element={<NotFoundPage />}/> */}
            <Route path="*" element={<Navigate to="/talents" replace={true}/>}/>
        </Routes>
    );
}
