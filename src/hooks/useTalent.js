import { useEffect, useState } from "react";
import { TalentsService } from "../services/api-services";
import { useCookies } from "react-cookie";

export function useTalent(id) {
	const [talent, setTalent] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [cookies] = useCookies(["token"]);

    useEffect(() => {
        setIsLoading(true);
        console.log(isLoading);
		TalentsService.getTalent(id, cookies?.token)
			.then((talent) => {
                setTalent(talent);
                console.log(talent);
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [cookies?.token, id]);

	return { talent, isLoading, error };
}
