import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import { FilledOrangeBtn } from "./styled";

interface Testimonial {
	id: number;
	name: string;
	title: string;
	quote: string;
	image: string;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		name: "Tamara Posibi",
		title: "CEO, Irtus Business",
		quote: "“I love how Nectar incorporates both business management and my everyday payments in one app. The bookkeeping is great too!”",
		image: "/assets/tamara-posibi.png",
	},
	{
		id: 2,
		name: "David Adeleke",
		title: "Founder, Communique",
		quote: "“I get access to loans if I ever need it, monthly reports on how and where we’re spending, and areas for improvement. This is my favourite financial services app.”",
		image: "/assets/david-adeleke.png",
	},
	{
		id: 3,
		name: "Victoria Ene Okere",
		title: "CEO, Slate94 Productions",
		quote: "“The daily interest on our balances alone has covered many operational costs this quarter. I’m going to be on this app for a long time.”",
		image: "/assets/victoria-okere.png",
	},
];

interface TestimonialCardProps {
	testimonial: Testimonial;
	isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
	testimonial,
	isActive,
}) => {
	return (
		<div
			className={`flex gap-[17.57px] transition-all duration-500 border min-h-[178.63px] py-[14.06px] px-[11.71px] rounded-[18.74px] shadow-lg ${
				isActive
					? "bg-white border-[#E7E7E799] opacity-100 scale-100 z-10"
					: "opacity-30 border-[#E7E7E7] bg-[#FAFAFA] scale-95 z-0"
			}`}
		>
			<div className="flex-shrink-0">
				<img
					src={testimonial.image}
					alt={testimonial.name}
					className="w-[9.4075rem] h-[9.4075rem] rounded-[18.74px] object-cover"
				/>
			</div>
			<div className="flex-1 flex flex-col gap-[18.16px]">
				<p className="text-base font-medium text-[#000000CC]">
					{testimonial.quote}
				</p>
				<div className="flex flex-col gap-[4.69px]">
					<p className="font-medium text-sm text-black">
						{testimonial.name}
					</p>
					<p className="text-[#00000099] text-xs">
						{testimonial.title}
					</p>
				</div>
			</div>
		</div>
	);
};

export const TestimonialsSection: React.FC = () => {
	return (
		<div className="bg-white pb-[7.8125rem] px-10 md:px-[7.5rem] flex items-center justify-center">
			<div className="max-w-6xl w-full flex items-center justify-between gap-[3.25rem] lg:flex-row flex-col-reverse">
				{/* Left side - Swiper testimonials */}
				<div className="flex-1 relative">
					<Swiper
						direction="vertical"
						slidesPerView={3}
						centeredSlides={true}
						spaceBetween={24}
						mousewheel={{
							sensitivity: 1,
							releaseOnEdges: true,
						}}
						modules={[Mousewheel]}
						initialSlide={1}
						className="lg:h-[620px] h-[590px]"
						slideToClickedSlide={true}
					>
						{testimonials.map((testimonial) => (
							<SwiperSlide
								key={testimonial.id}
								className="!h-auto"
							>
								{({ isActive }) => (
									<TestimonialCard
										testimonial={testimonial}
										isActive={isActive}
									/>
								)}
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* Right side - CTA */}
				<div className="flex-1 flex flex-col justify-center gap-6">
					<h2 className="text-[2rem] font-bold leading-tight md:text-left text-center">
						Trusted by&nbsp;
						<span className="text-[#E65713]">Entrepreneurs</span>
						&nbsp;
						<br className="hidden xs:block" /> building real
						businesses.
					</h2>

					<div className="relative bg-[#FAFAFA] h-14 rounded-[1.25rem] flex items-center justify-between py-1 pr-1 pl-3 border border-[#E6571314]">
						<input
							type="email"
							className="text-black placeholder:text-[#8E8E93] w-[calc(100%_-_170px)] outline-none bg-transparent"
							placeholder="Join other winning businesses"
						/>
						<FilledOrangeBtn
							className="flex items-center rounded-[1.0625rem]! whitespace-nowrap"
							style={{ padding: "12px 20px" }}
						>
							Get Started Now
						</FilledOrangeBtn>
					</div>
				</div>
			</div>
		</div>
	);
};
