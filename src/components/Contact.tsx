import { useState } from "react";
import { ContactForm, type IContactUsFormData } from "./ContactForm";
import { ContactFormSuccessView } from "./ContactFormSuccessView";

export const Contact = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmitForm = async (formData: IContactUsFormData) => {
		setIsLoading(true);
		const formdata = new FormData();
		formdata.append("Business Name", formData.businessName);
		formdata.append("Nature of Business", formData.description);
		formdata.append("Average Loan Amount", formData.amount);
		formdata.append("Email Address", formData.email);

		const requestOptions: RequestInit = {
			method: "POST",
			body: formdata,
			redirect: "follow" as RequestRedirect,
		};

		try {
			const resp = await fetch(
				"https://script.google.com/macros/s/AKfycbzLv1Dv1e_C451jguocS05MtLt4YkfzfSNZ5hZwsWr-IAcH0gG1_tbr_rrc6HH6_DoHbA/exec",
				requestOptions
			);
			await resp.json();
			setIsLoading(false);
			setIsSubmitted(true);
			setTimeout(() => {
				setIsSubmitted(false);
			}, 5000);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};

	return (
		<div
			className="pt-[13.4375rem] app-container"
			id="contactUs"
		>
			<div className="flex flex-col gap-[3.625rem]">
				<div className="flex flex-col gap-[1.5625rem] items-center w-full max-w-[25rem] md:max-w-[36rem] mx-auto">
					<h3 className="text-white text-[2rem] md:text-[2.5rem] leading-[2.375rem] text-center font-semibold">
						Get Notified When
						<br className="inline-block md:hidden" />
						We Go Live
					</h3>
					<p className="text-base font-medium text-[#E2E2E2] text-center">
						Stay ahead of the curve. Get notified at launch and
						<br className="inline-block md:hidden" />
						enjoy exclusive benefits for early supporters.
					</p>
				</div>
				<div className="w-full max-w-[27.375rem] mx-auto bg-[#FFFFFF1A] border border-[#FFEBEB45] rounded-4xl p-6">
					{isSubmitted ? (
						<ContactFormSuccessView />
					) : (
						<ContactForm
							handleSubmitForm={handleSubmitForm}
							isLoading={isLoading}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
