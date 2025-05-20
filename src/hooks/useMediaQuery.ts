import { useEffect, useState } from "react";

export const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query);
		const handleChange = () => setMatches(mediaQueryList.matches);

		handleChange(); // Set initial value
		mediaQueryList.addEventListener("change", handleChange);

		return () => mediaQueryList.removeEventListener("change", handleChange);
	}, [query]);

	return matches;
};
