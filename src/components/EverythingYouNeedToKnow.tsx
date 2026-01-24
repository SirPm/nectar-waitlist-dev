import { AccordionFAQ } from "./AccordionFAQ";

export const EverythingYouNeedToKnow = () => {
	return (
		<div className="bg-[#1C0000] pt-[128px] pb-[131px] lg:px-[210px] xl:px-[310px] px-10 flex flex-col gap-[80px] relative">
			<img
				src="/assets/faq-ecclipse.png"
				className="absolute top-0 left-0"
				alt=""
			/>
			<div className="flex flex-col gap-8">
				<h3 className="font-semibold lg:text-7xl text-5xl text-white text-center">
					Everything you <br className="hidden lg:block" /> need to&nbsp;
					<span className="text-[#E65713]">know</span>
				</h3>
				<p className="text-center font-medium text-xl text-white">
					Get answers to common questions about Nectar
				</p>
			</div>
			<AccordionFAQ />
		</div>
	);
};
