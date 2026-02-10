// import { StackedCardsCarousel } from "./StackedCarousel";
import WhyNectar from "./WhyNectar";

export const WhyShouldYouUseNectar = () => {
	return (
		<div
			id="whyUs"
			className="bg-[#1C0000] min-h-screen relative pt-[59px] md:px-0 px-[1.125rem] mt-[100px] md:mt-0"
		>
			<img
				src="/assets/why-us-ellipse.svg"
				alt=""
				className="absolute top-0 left-0"
			/>
			<img
				src="/assets/why-us-vector.svg"
				alt="why us vector"
				className="absolute bottom-0 left-[50%] -translate-x-1/2 w-full md:max-w-[50%]"
			/>

			<div className="flex flex-col gap-[40.85px]">
				<h5 className="text-center text-white text-[28px] md:text-[54px] leading-[35px] md:leading-[55px] font-semibold">
					Why should you <br /> use Nectar?
				</h5>
				{/* <StackedCardsCarousel /> */}
				<WhyNectar />
			</div>
		</div>
	);
};
