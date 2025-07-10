import { FilledWhiteBtn } from "./styled";

export const Hero = () => {
	return (
		<div className="app-container">
			<div className="flex justify-between items-center lg:[align-items:unset] flex-col lg:flex-row pl-[1.375rem] pr-[1.375rem] xl:pr-[5.47rem] mt-[2.9375rem] pt-14 gap-[3.75rem] lg:gap-0">
				<div className="flex flex-col gap-8 lg:mt-[9.625rem] items-center lg:[align-items:unset]">
					<div className="flex flex-col gap-4 items-center lg:[align-items:unset]">
						<div className="flex flex-col items-center lg:[align-items:unset]">
							<h2 className="main-heading-top text-center lg:text-left">
								Banking Built For Business.
							</h2>
							<h2 className="main-heading-bottom text-center lg:text-left">
								Backed By Intelligence.
							</h2>
						</div>
						<p className="text-[0.9375rem] xl:text-base text-[#E2E2E2] text-center lg:text-left max-w-[23rem] lg:max-w-fit w-full">
							Apply in&nbsp;
							<span className="font-semibold">10 minutes</span> to
							start accessing same-day loans, daily
							<br className="hidden lg:block" /> interest, and
							AI-led business management tools.
						</p>
					</div>
					<a href="#contactUs">
						<FilledWhiteBtn className="flex items-center gap-2">
							<span className="text-black font-medium">
								Join the Waitlist. It's free!
							</span>
							<img src="/assets/chevron-right.svg" />
						</FilledWhiteBtn>
					</a>
				</div>
				<div className="sm:w-[504px] sm:h-[666px] shrink-0">
					<img
						className="w-full h-full object-contain"
						src="/assets/phones-1x.png"
						srcSet="/assets/phones-2x.png 2x, /assets/phones-3x.png 3x"
						alt="two black phones"
					/>
				</div>
			</div>
		</div>
	);
};
