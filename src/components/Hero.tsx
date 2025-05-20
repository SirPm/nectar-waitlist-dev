import { FilledWhiteBtn } from "./styled";

export const Hero = () => {
	return (
		<div className="app-container">
			<div className="flex justify-between pl-[1.375rem] pr-[1.375rem] xl:pr-[5.47rem] mt-[2.9375rem] pt-14">
				<div className="flex flex-col gap-8 mt-[9.625rem]">
					<div className="flex flex-col gap-4">
						<div className="flex flex-col">
							<h2 className="main-heading-top">
								Intelligent Banking.
							</h2>
							<h2 className="main-heading-bottom">
								Good Business.
							</h2>
						</div>
						<p className="text-[0.9375rem] xl:text-base text-[#E2E2E2]">
							Apply in&nbsp;
							<span className="font-semibold">10 minutes</span> to
							start accessing same-day loans, daily
							<br /> interest, and AI-led business management
							tools.
						</p>
					</div>
					<FilledWhiteBtn className="flex items-center gap-2">
						<span className="text-black">
							Join the Waitlist. It's free!
						</span>
						<img src="/assets/chevron-right.svg" />
					</FilledWhiteBtn>
				</div>
				<div className="w-[504px] h-[666px] shrink-0">
					<img
						className="w-full h-full"
						src="/assets/phones.svg"
						alt="two black phones"
					/>
				</div>
			</div>
		</div>
	);
};
