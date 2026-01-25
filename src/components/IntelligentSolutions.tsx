import { useMediaQuery } from "../hooks/useMediaQuery";
import { FilledOrangeBtn } from "./styled";

export const IntelligentSolutions = () => {
	const isMobile = useMediaQuery("(max-width: 768px)");

	return (
		<div
			className="my-[7.5rem] flex flex-col gap-[6rem] px-10 md:px-0 scroll-mt-5"
			id="about"
		>
			<div className="px-10 md:pl-[7.75rem] md:pr-[7.375rem]">
				<div className="flex flex-col gap-12">
					<div className="flex items-center gap-8 flex-col lg:flex-row">
						<h3 className="text-[#1C0000] font-semibold text-4xl md:text-5xl xl:text-[4.5rem] xl:leading-18 w-full break-words">
							<span className="text-[#E65713]">Intelligent</span>
							&nbsp;solutions.
							<br className="hidden md:block" />
							Better operations.
						</h3>
						<p className="text-[#535353] font-medium text-base xl:text-xl">
							Get instant insights, automated bookkeeping, and
							conversational support from an AI agent that learns
							your business.
						</p>
					</div>
					<FilledOrangeBtn className="flex items-center">
						Join Waitlist
					</FilledOrangeBtn>
				</div>
			</div>
			<div className="flex items-center gap-8 md:gap-5 flex-col md:flex-row">
				<div>
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
				<div className="flex flex-col gap-5">
					<div className="bg-[#FAFAFA] rounded-[1.75rem] py-9.5 pl-8 flex flex-col gap-5.25">
						<h4 className="text-[#1C0000A3] text-[2rem] leading-9 font-semibold">
							It understands <br className="hidden md:block" />
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
						/>
					</div>
				</div>
				<div>
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
		</div>
	);
};
