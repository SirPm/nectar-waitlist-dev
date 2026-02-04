// import { StackedCardsCarousel } from "./StackedCarousel";
import WhyNectar from "./WhyNectar";

export const WhyShouldYouUseNectar = () => {
	return (
		<div
			id="whyUs"
			className="bg-[#1C0000] h-screen relative pt-[59px] md:px-0 px-10"
		>
			<img
				src="/assets/why-us-ellipse.svg"
				alt=""
				className="absolute top-0 left-0"
			/>
			<img
				src="/assets/why-us-vector.svg"
				alt="why us vector"
				className="absolute bottom-0 left-[50%] -translate-x-1/2 w-full max-w-[50%]"
			/>

			<div className="flex flex-col gap-[40.85px]">
				<h5 className="text-center text-white text-[22px] md:text-[54px] leading-[23px] md:leading-[55px] font-semibold">
					Why should you <br /> use Nectar?
				</h5>
				{/* <StackedCardsCarousel /> */}
				<WhyNectar />
			</div>
		</div>
	);
};
