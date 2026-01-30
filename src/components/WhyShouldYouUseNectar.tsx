import { useRef, useEffect, useState } from "react";

const cardsData: string[] = [
	"/assets/1.svg",
	"/assets/2.svg",
	"/assets/3.svg",
	"/assets/4.svg",
	"/assets/5.svg",
];

const StackedCardsCarousel = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isLocked, setIsLocked] = useState(false);
	const accumulatedDelta = useRef(0);
	const isTransitioning = useRef(false);
	const threshold = 50;
	const totalCards = cardsData.length;

	useEffect(() => {
		const handleWheel = (e: WheelEvent) => {
			const section = sectionRef.current;
			if (!section) return;

			const rect = section.getBoundingClientRect();

			const sectionInView =
				rect.top < window.innerHeight && rect.bottom > 0;
			const sectionCentered =
				rect.top < window.innerHeight * 0.5 &&
				rect.bottom > window.innerHeight * 0.5;

			if (!sectionInView) {
				if (isLocked) setIsLocked(false);
				return;
			}

			if (!isLocked) {
				if (sectionCentered) {
					if (e.deltaY > 0 && activeIndex < totalCards - 1) {
						setIsLocked(true);
						e.preventDefault();
						accumulatedDelta.current = e.deltaY;
						return;
					}
					if (e.deltaY < 0 && activeIndex > 0) {
						setIsLocked(true);
						e.preventDefault();
						accumulatedDelta.current = e.deltaY;
						return;
					}
				}
				return;
			}

			e.preventDefault();

			if (isTransitioning.current) return;

			accumulatedDelta.current += e.deltaY;

			if (Math.abs(accumulatedDelta.current) >= threshold) {
				const direction = accumulatedDelta.current > 0 ? 1 : -1;
				const newIndex = activeIndex + direction;

				if (newIndex < 0) {
					setIsLocked(false);
					accumulatedDelta.current = 0;
					return;
				}

				if (newIndex >= totalCards) {
					setIsLocked(false);
					accumulatedDelta.current = 0;
					return;
				}

				isTransitioning.current = true;
				setActiveIndex(newIndex);
				accumulatedDelta.current = 0;

				setTimeout(() => {
					isTransitioning.current = false;
				}, 400);
			}
		};

		window.addEventListener("wheel", handleWheel, { passive: false });
		return () => window.removeEventListener("wheel", handleWheel);
	}, [isLocked, activeIndex, totalCards]);

	const getOrderedCards = () => {
		const ordered = [];
		for (let i = 0; i < totalCards; i++) {
			const cardIndex = (activeIndex + i) % totalCards;
			ordered.push({
				card: cardsData[cardIndex],
				originalIndex: cardIndex,
				stackPosition: i,
			});
		}
		return ordered;
	};

	const orderedCards = getOrderedCards();
	const maxVisibleStack = 4;
	const stackOffset = 18;
	const horizontalInset = 16;

	return (
		<div
			ref={sectionRef}
			className="relative w-full"
		>
			<div className="flex items-center justify-center">
				<div
					className="relative w-full max-w-2xl"
					style={{ marginTop: `${maxVisibleStack * stackOffset}px` }}
				>
					{/* Render from back to front */}
					{[...orderedCards]
						.filter(
							({ stackPosition }) =>
								stackPosition <= maxVisibleStack,
						)
						.sort((a, b) => b.stackPosition - a.stackPosition)
						.map(({ card, originalIndex, stackPosition }) => {
							const inset = stackPosition * horizontalInset;

							return (
								<div
									key={originalIndex}
									className="absolute inset-0 transition-all duration-500 ease-out"
									style={{
										left: inset,
										right: inset,
										top: -stackPosition * stackOffset,
										zIndex: totalCards - stackPosition,
									}}
								>
									<div className="rounded-2xl border border-white/20 p-0 backdrop-blur-md transition-all duration-500">
										<img
											src={card}
											alt=""
										/>
									</div>
								</div>
							);
						})}

					{/* Invisible element to maintain height */}
					<div className="invisible">
						<div className="rounded-2xl p-8">
							<div className="mb-5 flex items-center gap-3">
								<div className="h-7 w-7" />
								<h2 className="text-xl font-semibold">
									Placeholder
								</h2>
							</div>
							<p className="text-lg leading-relaxed">
								{cardsData[0]}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const WhyShouldYouUseNectar = () => {
	return (
		<div
			id="whyUs"
			className="bg-[#1C0000] h-screen relative pt-[59px] md:px-0 px-10"
		>
			<img
				src="/assets/why-us-ellipse.svg"
				alt=""
				className="absolute top-0 left-0"
			/>
			<img
				src="/assets/why-us-vector.svg"
				alt=""
				className="absolute bottom-0 left-[50%] -translate-x-1/2 w-full max-w-[50%]"
			/>

			<div className="flex flex-col gap-[40.85px]">
				<h5 className="text-center text-white text-[22px] md:text-[54px] leading-[23px] md:leading-[55px] font-semibold">
					Why should you <br /> use Nectar?
				</h5>
				<StackedCardsCarousel />
			</div>
		</div>
	);
};
