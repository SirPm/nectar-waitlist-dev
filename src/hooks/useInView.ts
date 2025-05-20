import { useEffect, useRef, useState } from "react";

export const useInView = <T extends HTMLElement>(
	options?: IntersectionObserverInit
) => {
	const ref = useRef<T | null>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(([entry]) => {
			setIsInView(entry.isIntersecting);
		}, options);

		observer.observe(ref.current);

		return () => {
			if (ref.current) observer.unobserve(ref.current);
		};
	}, [ref.current, options]);

	return { ref, isInView };
};
