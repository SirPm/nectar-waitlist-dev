import { useMediaQuery } from "../hooks/useMediaQuery";
import { FilledOrangeBtn } from "./styled";

const mobileImages: string[] = [
	"/assets/intelligent-solutions-card-1.svg",
	"/assets/intelligent-solutions-card-2.svg",
	"/assets/intelligent-solutions-card-3.svg",
];

export const IntelligentSolutions = () => {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<div
			className="mt-[51px] md:my-[7.5rem] flex flex-col gap-6 md:gap-[6rem] px-[1.125rem] md:px-0 scroll-mt-5"
			id="about"
		>
			<div className="px-0 md:pl-[7.75rem] md:pr-[7.375rem]">
				<div className="flex flex-col gap-6 md:gap-12">
					<div className="flex items-start md:items-center gap-2 md:gap-8 flex-col lg:flex-row">
						{isMobile ? (
							<h3 className="w-full text-[#1C0000] font-semibold text-2xl md:text-4xl">
								<span className="text-[#E65713]">
									Intelligent
								</span>
								&nbsp;
								<span>
									solutions.&nbsp;
									<br className="block md:hidden" /> Better
									operations.
								</span>
							</h3>
						) : (
							<h3 className="w-full text-[#1C0000] font-semibold text-4xl md:text-5xl xl:text-[4.5rem] xl:leading-18 md:break-words">
								<span className="text-[#E65713]">
									Intelligent
								</span>
								&nbsp;solutions.
								<br className="hidden md:block" />
								Better operations.
							</h3>
						)}
						<p className="text-[#535353] w-full max-w-[356px] font-medium text-[14px] md:text-base xl:text-xl">
							Get instant insights, automated bookkeeping, and
							conversational support from an AI agent that learns
							your business.
						</p>
					</div>

					<a href="#waitListForm">
						<FilledOrangeBtn className="flex items-center">
							Join Waitlist
						</FilledOrangeBtn>
					</a>
				</div>
			</div>
			{isMobile ? (
				<div className="flex flex-col gap-[14.08px] items-center">
					{mobileImages.map((image, idx) => (
						<div
							key={idx}
							className="w-full"
						>
							<img
								src={image}
								alt=""
								className="w-full"
							/>
						</div>
					))}
				</div>
			) : (
				<div className="flex items-center gap-8 md:gap-5 flex-col md:flex-row justify-between">
					{/* xl:bg-[#FAFAFA] */}
					<div className="w-full max-w-full md:max-w-[32%] bg-[#FAFAFA]">
						<img
							src={
								isMobile
									? "/assets/intelligent-solutions-phone.svg"
									: "/assets/intelligent-solutions-phone-with-bg.svg"
							}
							className="w-[82%] md:w-fit"
							alt=""
						/>
					</div>
					<div className="flex flex-col gap-5 w-full max-w-full md:max-w-[32%]">
						<div className="bg-[#FAFAFA] rounded-[1.75rem] py-9.5 pl-8 flex flex-col gap-5.25">
							<h4 className="text-[#1C0000A3] text-[2rem] leading-9 font-semibold">
								It understands{" "}
								<br className="hidden md:block" />
								business
							</h4>
							<p className="text-[#535353] font-medium text-xl">
								Nectar AI answers business
								<br /> questions instantly. Your smartest
								<br /> teammate you didn’t need to hire.
							</p>
						</div>
						<div>
							<img
								src="/assets/intelligent-solutions-ai-input.svg"
								alt=""
								className="w-full"
							/>
						</div>
					</div>
					<div className="w-full max-w-full md:max-w-[32%] bg-[#FAFAFA]">
						<img
							src={
								isMobile
									? "/assets/intelligent-solutions-cards.svg"
									: "/assets/intelligent-solutions-cards-with-bg.svg"
							}
							alt=""
						/>
					</div>
				</div>
			)}
		</div>
	);
};
