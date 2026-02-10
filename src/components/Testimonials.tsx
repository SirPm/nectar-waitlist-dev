import { TestimonialsSection } from "./TestimonialsSection";

const TESTIMONIALS_DATA = [
	"FMCG Distribution",
	"Import / Export",
	"Manufacturing",
	"Food & Beverage",
	"Wholesale Trade",
	"Retail & Supermarkets",
	"Online Sellers",
	"E-commerce",
	"Logistics & Delivery",
	"Transport & Haulage",
	"Construction",
	"Building Materials",
	"Real Estate",
	"Travel & Tours",
	"Hotels & Shortlets",
	"Restaurants & Catering",
	"Private Schools",
	"Healthcare Providers",
	"Pharma & Medical",
	"Auto & Fleets",
	"Solar & Power",
];

export const Testimonials = () => {
	return (
		<div>
			<div className="pt-[50px] pb-[107px] md:py-[7.8125rem] flex flex-col gap-[3.4375rem]">
				<div className="flex items-center justify-between md:justify-center gap-2 md:gap-8 flex-col md:flex-row px-[1.125rem] md:px-[7.625rem]">
					<h4 className="text-black font-semibold text-[28px] leading-[34px] md:leading-[60px] md:text-4xl xl:text-[3.125rem] w-full max-w-[33.8125rem] md:text-left text-center">
						Built for&nbsp;
						<span className="text-[#E65713] inline-block mr-0.5 md:mr-0">
							Businesses
						</span>
						&nbsp;
						<br />
						like yours.
					</h4>
					<p className="text-[14px] leading-5 xl:text-xl md:leading-7 text-black font-medium md:text-left text-center">
						If your business buys, sells, delivers,&nbsp;
						<br className="hidden md:block" /> builds, or&nbsp;
						<br className="block md:hidden" />
						produces, Nectar helps you&nbsp;
						<br className="hidden md:block" /> grow from day one.
					</p>
				</div>
				<div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
					<div className="flex items-center gap-6 animate-marquee">
						{[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map(
							(item, index) => (
								<div
									key={index}
									className="bg-[#FCFCFC] border border-[#E7E7E7] rounded-2xl h-6 whitespace-nowrap flex items-center justify-center p-3 md:p-6 flex-shrink-0"
								>
									<p className="text-xs md:text-base text-[#535353] font-bold">
										{item}
									</p>
								</div>
							),
						)}
					</div>
				</div>
			</div>
			<TestimonialsSection />
		</div>
	);
};
