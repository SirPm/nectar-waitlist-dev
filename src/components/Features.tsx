const FEATURES: {
	imageSrc: string;
	title: string;
	text: string;
	isFullWidth: boolean;
}[] = [
	{
		imageSrc: "/assets/same-day-credit.svg",
		title: "Same-Day Credit",
		text: "Enjoy in-app access to working capital, purchase order, and invoice discounting loans.",
		isFullWidth: true,
	},
	{
		imageSrc: "/assets/daily-interest.svg",
		title: "Daily Interest on Balance",
		text: "Earn interest on your account balance every single day.",
		isFullWidth: false,
	},
	{
		imageSrc: "/assets/fixed-deposits.svg",
		title: "Fixed Deposits with High Rates",
		text: "Earn up to 25% per annum when you fix a deposit for 30 days or more.",
		isFullWidth: false,
	},
	{
		imageSrc: "/assets/ai-powered-insights.svg",
		title: "AI Powered Business Insights",
		text: "Get insights into your business performance with AI built in.",
		isFullWidth: true,
	},
];
export const Features = () => {
	return (
		<div
			className="pt-[5.875rem] app-container"
			id="features"
		>
			<div className="flex flex-col items-center gap-[1.5625rem] mx-auto">
				<h2 className="text-white font-semibold text-[2.5rem] leading-[2.375rem] text-center">
					Built By Bankers, For You.
				</h2>
				<p className="text-base font-medium text-[#E2E2E2] text-center w-full md:max-w-1/2">
					Designed to meet business needs by Bankers who understand
					financial services in and out. A solution made to drive
					successful businesses.
				</p>
			</div>
			<div className="mt-[3.625rem]">
				<div className="flex flex-col lg:flex-row items-center flex-wrap gap-6 w-full max-w-[98.5rem] justify-center mx-auto">
					{FEATURES.map(
						({ imageSrc, title, text, isFullWidth }, idx) => (
							<div
								className={`bg-[#030303B2] rounded-[1.875rem] border border-[#FFFFFF1A] w-full min-h-[20rem] h-fit lg:h-[25.125rem] flex flex-col gap-[0.554375rem] lg:gap-0 justify-between items-center ${
									isFullWidth
										? "py-[1.235625rem] lg:py-[2.125rem] px-[3.161875rem] lg:px-[5.4375rem] max-w-[30rem] lg:max-w-[42.559375rem]"
										: "py-[1.235625rem] lg:py-[2.5rem] px-[3.161875rem] lg:px-[1.8125rem] max-w-[30rem] lg:max-w-[31.94rem]"
								}`}
								key={`${title}-${idx}`}
							>
								<div className="flex items-center justify-center">
									<img
										src={imageSrc}
										alt={`${title}'s alt`}
									/>
								</div>
								<div className="flex flex-col gap-2.5 items-center md:h-[5.03125rem]">
									<h5 className="text-[1.125rem] leading-[1.59375rem] text-white font-semibold text-center">
										{title}
									</h5>
									<p className="text-base text-[#A1A1AA] leading-[1.59375rem] text-center">
										{text}
									</p>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};
// gap-[0.75rem]
// gap-[2.5rem]
