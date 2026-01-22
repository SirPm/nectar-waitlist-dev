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
		<div className="my-[7.5rem] px-10 md:pl-[7.5625rem] md:pr-[7.4375rem]">
			<div className="flex flex-col gap-[6rem]">
				<div className="flex flex-col gap-8 items-center">
					<h3 className="text-[#1C0000] font-semibold text-2xl lg:text-[4.5rem] text-center lg:leading-18">
						Everything you
						<br className="hidden lg:block" />
						need to <span className="text-[#E65713]">thrive</span>
					</h3>
					<p className="text-[#545454] font-medium text-xl text-center">
						Delivering growth tools to growing businesses of all
						sizes, available on a
						<br className="hidden lg:block" />
						single mobile app
					</p>
				</div>
				<div className="flex items-center gap-5.25 flex-wrap justify-center">
					{THINGS_YOU_NEED_TO_THRIVE.map(({ image, text }, index) => (
						<div
							key={index}
							className="max-h-[26.0625rem] bg-[#FCFCFC] border border-[#E7E7E7] rounded-3xl pt-3 pb-8 flex flex-col gap-5.25 w-full max-w-[24.125rem]"
						>
							<div className="px-3">
								<img
									src={image}
									alt={`${text}`}
								/>
							</div>
							<div className="px-7">
								<p className="text-[#535353] text-base">
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
