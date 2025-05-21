export const ContactFormSuccessView = () => {
	return (
		<div className="flex flex-col gap-6 items-center">
			<div className="w-[7.5rem] h-[7.5rem]">
				<img
					src="/assets/success.gif"
					alt="success gif"
					className="w-full h-full"
				/>
			</div>
			<div className="flex flex-col gap-2.5 items-center">
				<h6 className="font-semibold text-[1.125rem] leading-[1.59375rem] text-white text-center">
					You are on the list! 🎉
				</h6>
				<p className="text-base  leading-[1.59375rem] text-[#FFFFFFE5] text-center">
					Thank you for signing up! You'll be the first to know when
					we go live. Stay tuned for exciting updates.
				</p>
			</div>
		</div>
	);
};
