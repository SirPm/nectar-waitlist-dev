import { FilledOrangeBtn } from "./styled";

export const HeaderContent = () => {
	return (
		<div className="h-[calc(100vh_-_173px)] flex justify-center items-center relative z-10">
			<div className="text-white w-full max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[60%] xl:max-w-[50%] mx-auto flex flex-col gap-2 lg:gap-6">
				<h1 className="font-bold text-2xl lg:text-[4.5rem] text-center lg:leading-18">
					Hello Business,
					<br className="hidden lg:block" />
					Meet Growth
				</h1>
				<p className="text-base lg:text-xl font-medium text-center">
					Modern business banking tools with AI, designed to
					<br className="hidden lg:block" />
					grow your business from day one
				</p>
				<div className="relative bg-[#18181880] h-14 rounded-[1.125rem] flex items-center justify-between p-1">
					<input
						type="email"
						className="text-white placeholder:text-[#535353] pl-4 w-[calc(100%_-_160px)] outline-none"
						placeholder="Enter your email"
					/>
					<FilledOrangeBtn className="flex items-center w-38!">
						Join Waitlist
					</FilledOrangeBtn>
				</div>
			</div>
		</div>
	);
};
