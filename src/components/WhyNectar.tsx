import { useState, useEffect, useCallback, useRef } from "react";

interface IFeatures {
	id: string;
	menuIcon: React.ReactNode;
	icon: React.ReactNode;
	title: string;
	description: string;
}

const features: IFeatures[] = [
	{
		id: "african-smbs",
		menuIcon: (
			<img
				className="w-6 h-6"
				src="/assets/reason-1-menu-icon.svg"
				alt=""
			/>
		),
		icon: (
			<img
				className="w-[41px] h-[41px]"
				src="/assets/reason-1-icon.svg"
				alt=""
			/>
		),
		title: "Built for African SMBs",
		description:
			"We understand the realities of operating here —long settlement times, unpredictable cash flow, and more. Nectar is designed specifically to help solve these challenges for businesses.",
	},
	{
		id: "financial-tools",
		menuIcon: (
			<img
				className="w-6 h-6"
				src="/assets/reason-2-menu-icon.svg"
				alt=""
			/>
		),
		icon: (
			<img
				className="w-[41px] h-[41px]"
				src="/assets/reason-2-icon.svg"
				alt=""
			/>
		),
		title: "All Your Financial Tools in One Place",
		description:
			"Banking, credit, savings, and insights—fully integrated, beautifully designed, and available on an intuitive mobile app",
	},
	{
		id: "credit",
		menuIcon: (
			<img
				className="w-6 h-6"
				src="/assets/reason-3-menu-icon.svg"
				alt=""
			/>
		),
		icon: (
			<img
				className="w-[41px] h-[41px]"
				src="/assets/reason-3-icon.svg"
				alt=""
			/>
		),
		title: "Credit You Can Actually Qualify For",
		description:
			"Our underwriting looks at real business performance, not just collateral, giving growing businesses a fair chance at capital.",
	},
	{
		id: "money-works",
		menuIcon: (
			<img
				className="w-6 h-6"
				src="/assets/reason-4-menu-icon.svg"
				alt=""
			/>
		),
		icon: (
			<img
				className="w-[41px] h-[41px]"
				src="/assets/reason-4-icon.svg"
				alt=""
			/>
		),
		title: "Your Money Works Every Day",
		description:
			"Most business accounts don’t reward you for your balance. Nectar does, with daily interest and treasury products that boost liquidity effortlessly.",
	},
	{
		id: "transparent",
		menuIcon: (
			<img
				className="w-6 h-6"
				src="/assets/reason-5-menu-icon.svg"
				alt=""
			/>
		),
		icon: (
			<img
				className="w-[41px] h-[41px]"
				src="/assets/reason-5-icon.svg"
				alt=""
			/>
		),
		title: "Transparent. Modern. Human.",
		description:
			"No hidden fees. No long queues. Just clear pricing, fast service, and a partner genuinely invested in your growth.",
	},
];

const ROTATION_INTERVAL = 5000; // 5 seconds per tab

export default function WhyNectar() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [progress, setProgress] = useState(0);
	// const [isPaused, setIsPaused] = useState(false);
	const isTransitioning = useRef(false);

	const goToNext = useCallback(() => {
		if (isTransitioning.current) return;
		isTransitioning.current = true;

		setActiveIndex((prev) => (prev + 1) % features.length);
		setProgress(0);

		// Reset the lock after a short delay
		setTimeout(() => {
			isTransitioning.current = false;
		}, 100);
	}, []);

	const handleTabClick = (index: number) => {
		isTransitioning.current = true;
		setActiveIndex(index);
		setProgress(0);

		setTimeout(() => {
			isTransitioning.current = false;
		}, 100);
	};

	// Auto-rotation and progress
	useEffect(() => {
		// if (isPaused) return;

		const progressInterval = setInterval(() => {
			if (isTransitioning.current) return;

			setProgress((prev) => {
				if (prev >= 100) {
					goToNext();
					return 0;
				}
				return prev + 100 / (ROTATION_INTERVAL / 50);
			});
		}, 50);

		return () => clearInterval(progressInterval);
	}, [/* isPaused, */ goToNext]);

	const activeFeature = features[activeIndex];

	return (
		<section
			className="relative min-h-screen py-20 px-0 md:px-30 overflow-hidden"
			// onMouseEnter={() => setIsPaused(true)}
			// onMouseLeave={() => setIsPaused(false)}
		>
			<div className="relative z-10 max-w-6xl mx-auto">
				<div className="flex items-start flex-col md:flex-row justify-between gap-8 md:gap-[140px]">
					{/* Left side - Menu tabs */}
					<div className="space-y-6 w-full max-w-full md:max-w-[33%]">
						{features.map((feature, index) => {
							const isActive = index === activeIndex;

							return (
								<button
									key={feature.id}
									onClick={() => handleTabClick(index)}
									className={`relative w-full flex items-center gap-2 px-4 py-3 rounded-full text-left transition-all duration-300 overflow-hidden outline-none h-12 ${
										isActive
											? "text-white"
											: "bg-white/[0.06] backdrop-blur-md text-white/90 hover:bg-white/[0.1] border border-white/[0.1] cursor-pointer"
									}`}
								>
									{/* Base orange gradient for active tab */}
									{isActive && (
										<div className="absolute inset-0 bg-gradient-to-r from-[#7a3a15] to-[#913407]" />
									)}

									{/* Dark overlay that fills from left, covering the orange as progress increases */}
									{isActive && (
										<div
											className="absolute inset-0 bg-[#4a2510] origin-left transition-transform duration-75 ease-linear"
											style={{
												transform: `scaleX(${progress / 100})`,
											}}
										/>
									)}

									{/* Menu Icon container */}
									<span
										className={`relative z-10 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
											isActive
												? "bg-white/20"
												: "bg-white/[0.08]"
										}`}
									>
										{feature.menuIcon}
									</span>

									{/* Title */}
									<span className="relative z-10 font-semibold text-white text-sm">
										{feature.title}
									</span>
								</button>
							);
						})}
					</div>

					{/* Right side - Content card */}
					<div className="lg:sticky lg:top-20 relative p-[26.49px] rounded-[26.49px] bg-gradient-to-br from-[#ffffff0d] to-[#0000004d] backdrop-blur-xl border border-[#ffffff1a] shadow-[inset_0_0_60px_rgba(0,0,0,0.3)] h-fit md:h-[400px]  w-full max-w-full md:max-w-[60%]">
						{/* h-[calc(100vh-365px)] */}
						{/* Vertical progress indicator on the right */}
						{/* <div className="absolute right-0 top-6 bottom-6 w-[3px] bg-white/10 rounded-full overflow-hidden">
							<div
								className="w-full bg-white/40 rounded-full transition-all duration-50 ease-linear"
								style={{ height: `${progress}%` }}
							/>
						</div> */}

						{/* Content */}
						<div className="pr-6">
							{/* Icon and title */}
							<div className="flex items-center gap-4 mb-[26px]">
								<span className="w-[41px] h-[41px] flex items-center justify-center shrink-0">
									{activeFeature.icon}
								</span>
								<h3 className="text-xl lg:text-3xl font-bold text-white">
									{activeFeature.title}
								</h3>
							</div>

							{/* Description */}
							<p className="text-white/80 text-base lg:text-2xl font-medium leading-relaxed">
								{activeFeature.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
