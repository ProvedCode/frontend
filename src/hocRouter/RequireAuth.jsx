import React from "react";
import { useLocation } from "react-router";

export default function RequireAuth() {
    const location = useLocation();
	return <div>RequireAuth</div>;
}
