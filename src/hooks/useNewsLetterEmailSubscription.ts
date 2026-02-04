import { useState } from "react";

export const useNewsLetterEmailSubscription = () => {
	const [isLoading, setIsLoading] = useState(false);

	const handleSubscribe = async (email: string) => {
		setIsLoading(true);
		const formdata = new FormData();
		formdata.append("Email", email);

		const requestOptions: RequestInit = {
			method: "POST",
			body: formdata,
			redirect: "follow" as RequestRedirect,
		};

		try {
			const resp = await fetch(
				"https://script.google.com/macros/s/AKfycbzLv1Dv1e_C451jguocS05MtLt4YkfzfSNZ5hZwsWr-IAcH0gG1_tbr_rrc6HH6_DoHbA/exec",
				requestOptions,
			);
			await resp.json();
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		handleSubscribe,
	};
};
