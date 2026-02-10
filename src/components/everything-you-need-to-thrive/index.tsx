interface IThingsYouNeedToThrive {
	image: string;
	text: string;
}

const THINGS_YOU_NEED_TO_THRIVE: IThingsYouNeedToThrive[] = [
	{
		image: "/assets/everything-you-need-to-thrive-1.svg",
		text: "Open a modern high-yield business account with seamless payments, and AI features that help your business grow.",
	},
	{
		image: "/assets/everything-you-need-to-thrive-2.svg",
		text: "Access fast, transparent business loans, built for real operating needs like assets, invoices, and purchase orders.",
	},
	{
		image: "/assets/everything-you-need-to-thrive-3.svg",
		text: "Put your idle funds to work with high-yield savings and automated sweep features that optimise your liquidity.",
	},
];

export const EverythingYouNeedToThrive = () => {
	return (
		<div
			className="my-[60px] md:my-[7.5rem] px-[1.125rem] md:px-10 md:pl-[7.5625rem] md:pr-[7.4375rem] scroll-mt-5"
			id="products"
		>
			<div className="flex flex-col gap-7.5 md:gap-[6rem]">
				<div className="flex flex-col gap-3 md:gap-8 items-center">
					<h3 className="text-[#1C0000] font-semibold text-[28px] leading-8.5 lg:text-[4.5rem] text-center lg:leading-18">
						Everything you&nbsp;
						<br className="hidden lg:block" />
						need <br className="block md:hidden" /> to&nbsp;
						<span className="text-[#E65713]">thrive</span>
					</h3>
					<p className="text-[#545454] font-medium text-[14px] leading-[19px] md:text-xl md:leading-7 text-center">
						Delivering growth tools to growing businesses&nbsp;
						<br className="block md:hidden" /> of all sizes,
						available on a&nbsp;
						<br className="hidden lg:block" />
						single mobile app
					</p>
				</div>
				<div className="flex items-center gap-5.25 flex-wrap justify-center py-[9.82px] md:py-0">
					{THINGS_YOU_NEED_TO_THRIVE.map(({ image, text }, index) => (
						<div
							key={index}
							className="max-h-[26.0625rem] bg-[#FCFCFC] border border-[#E7E7E7] rounded-3xl pt-3 pb-6 md:pb-8 flex flex-col gap-4.5 md:gap-5.25 w-full max-w-full md:max-w-[24.125rem]"
						>
							<div className="px-3 flex items-center justify-center">
								<img
									src={image}
									alt={`${text}`}
								/>
							</div>
							<div className="px-3 md:px-7">
								<p className="text-[#535353] text-[14px] md:text-base">
									{text}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
