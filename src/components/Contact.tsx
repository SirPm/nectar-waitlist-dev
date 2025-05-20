import { ContactForm } from "./ContactForm";

export const Contact = () => {
	return (
		<div className="pt-[13.4375rem] app-container">
			<div className="flex flex-col gap-[3.625rem]">
				<div className="flex flex-col gap-[1.5625rem] items-center w-full max-w-[36rem] mx-auto">
					<h3 className="text-white text-[2.5rem] leading-[2.375rem] text-center">
						Get Notified When We Go Live
					</h3>
					<p className="text-base font-medium text-[#E2E2E2] text-center">
						Stay ahead of the curve. Get notified at launch and
						enjoy exclusive benefits for early supporters.
					</p>
				</div>
				<div className="w-full max-w-[27.375rem] mx-auto bg-[#FFFFFF1A] border border-[#FFEBEB45] rounded-4xl p-6">
					<ContactForm />
				</div>
			</div>
		</div>
	);
};
