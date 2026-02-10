import { FilledOrangeBtn } from "./styled";

export const HeaderContent = () => {
	return (
		<div
			className="h-[calc(100vh_-_173px)] flex justify-center md:items-center relative z-10 scroll-mt-6 md:mt-0 mt-[5.39125rem]"
			id="contactUs"
		>
			<div className="text-white w-full max-w-full md:max-w-[50%] lg:max-w-[60%] xl:max-w-[50%] mx-[1.125rem] md:mx-auto flex flex-col gap-3 lg:gap-6">
				<h1 className="font-bold text-[2rem] leading-10 md:text-5xl lg:text-[4.5rem] text-center lg:leading-18">
					Hello Business,
					<br />
					Meet Growth
				</h1>
				<p className="text-base md:text-[18px] lg:text-xl font-medium text-center">
					Modern business banking tools with AI,&nbsp;
					<br className="block md:hidden" /> designed to grow
					<br className="hidden lg:block" />
					&nbsp; your business from day one
				</p>
				<div className="flex items-center justify-center md:mt-0 mt-6">
					<a
						href="#waitListForm"
						className="w-fit sm:w-[13.375rem] md:w-fit"
					>
						<FilledOrangeBtn className="flex items-center w-full! justify-center!">
							Join Waitlist
						</FilledOrangeBtn>
					</a>
				</div>
				{/* <div className="relative bg-[#18181880] h-14 rounded-[1.125rem] flex items-center justify-between p-1">
					<input
						type="email"
						className="text-white placeholder:text-[#535353] pl-4 w-[calc(100%_-_160px)] outline-none"
						placeholder="Enter your email"
					/>
					<a
						href={SUBSTACK_LINK}
						target="_blank"
						rel="noopener noreferrer"
					>
						<FilledOrangeBtn className="flex items-center w-38!">
							Join Waitlist
						</FilledOrangeBtn>
					</a>
				</div> */}
			</div>
		</div>
	);
};
