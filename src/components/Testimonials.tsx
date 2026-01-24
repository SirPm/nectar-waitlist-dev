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
	"Hotels & Short-lets",
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
			<div className="py-[7.8125rem] flex flex-col gap-[3.4375rem]">
				<div className="flex items-center justify-between gap-8 flex-col md:flex-row px-10 md:px-[7.625rem]">
					<h4 className="text-black font-semibold text-4xl xl:text-[3.125rem] w-full max-w-[33.8125rem] md:text-left text-center">
						Built for&nbsp;
						<span className="text-[#E65713] inline-block mr-0.5 md:mr-0">
							Businesses
						</span>
						<br className="hidden md:block" />
						like yours.
					</h4>
					<p className="text-base xl:text-xl leading-7 text-black font-medium md:text-left text-center">
						If your business buys, sells, delivers, builds, or
						produces, Nectar helps you grow from day one.
					</p>
				</div>
				<div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
					<div className="flex items-center gap-6">
						{TESTIMONIALS_DATA.map((item, index) => (
							<div
								key={index}
								className="bg-[#FCFCFC] border border-[#E7E7E7] rounded-3xl h-20.25 whitespace-nowrap flex items-center justify-center p-6 flex-shrink-0"
							>
								<p className="text-2xl text-[#535353] font-bold">
									{item}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<TestimonialsSection />
		</div>
	);
};
